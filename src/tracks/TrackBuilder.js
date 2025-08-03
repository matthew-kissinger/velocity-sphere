/**
 * TrackBuilder - Builds 3D racing tracks from segment data
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { curveFromArc, createLoopCurve, createRampCurve, generateLoopWithRamps } from './CurveUtils.js';
import { ShaderManager } from '../rendering/ShaderManager.js';

export class TrackBuilder {
  constructor(physicsWorld, scene) {
    this.physicsWorld = physicsWorld;
    this.scene = scene;
    
    // Track collections
    this.trackMeshes = [];
    this.trackBodies = [];
    this.segments = [];
    
    // Track constants
    this.SEGMENT_LENGTH = 6;
    this.TRACK_THICKNESS = 0.6;
    this.DEFAULT_WIDTH = 10;
    this.WALL_HEIGHT = 2.0;
    this.WALL_THICKNESS = 0.4;
    
    // Shader system integration
    this.shaderManager = new ShaderManager();
    this.currentShader = 'rainbow-flow'; // Default shader
    
    // Performance optimization: Geometry and material caching
    this.geometryCache = new Map();
    this.sharedMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true, // Use vertex colors for rainbow effect
      roughness: 0.8,
      metalness: 0.1
    });
    this.wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.1
    });
    
    // Performance tracking with more detailed metrics
    this.performanceStats = {
      drawCallsBefore: 0,
      drawCallsAfter: 0,
      meshCountBefore: 0,
      meshCountAfter: 0,
      trianglesBefore: 0,
      trianglesAfter: 0,
      geometryCacheHits: 0,
      materialCacheHits: 0,
      memoryBefore: 0,
      memoryAfter: 0
    };
    
    // Enhanced geometry and material caches for optimization
    this.geometryCache = new Map();
    this.materialCache = new Map();
    this.maxCacheSize = 100; // Prevent memory leaks
    this.cacheStats = { hits: 0, misses: 0 };
    
    // Instanced mesh pools
    this.instancedWalls = null;
    this.wallInstanceCount = 0;
    
    // Materials
    this.materials = {
      track: this.physicsWorld.getMaterial('track')
    };
    
    this.createTextures();
    this.createSharedMaterials();
  }

  createTextures() {
    // Checkered texture for start/finish lines
    this.checkeredTexture = this.createCheckeredTexture();
    
    // Track surface texture
    this.trackTexture = this.createTrackTexture();
  }
  
  // Get or create cached geometry
  getCachedGeometry(type, width = this.DEFAULT_WIDTH) {
    const key = `${type}_${width}`;
    if (!this.geometryCache.has(key)) {
      let geometry;
      switch (type) {
        case 'track':
          geometry = new THREE.BoxGeometry(width, this.TRACK_THICKNESS, this.SEGMENT_LENGTH);
          break;
        case 'wall':
          geometry = new THREE.BoxGeometry(this.WALL_THICKNESS, this.WALL_HEIGHT, this.SEGMENT_LENGTH);
          break;
        case 'platform':
          geometry = new THREE.BoxGeometry(width + 6, this.TRACK_THICKNESS * 2, this.SEGMENT_LENGTH * 2);
          break;
        default:
          geometry = new THREE.BoxGeometry(width, this.TRACK_THICKNESS, this.SEGMENT_LENGTH);
      }
      this.geometryCache.set(key, geometry);
    }
    return this.geometryCache.get(key);
  }
  
  createSharedMaterials() {
    // Shared material for track segments with vertex colors support
    this.sharedTrackMaterial = new THREE.MeshStandardMaterial({
      map: this.trackTexture,
      vertexColors: true, // Enable vertex colors for rainbow effect
      roughness: 0.8,
      metalness: 0.1
    });
    
    // Shared material for walls
    this.sharedWallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333 
    });
    
    console.log('📦 Created shared materials for optimization');
  }

  createCheckeredTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(x * size / 8, y * size / 8, size / 8, size / 8);
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    return texture;
  }

  createTrackTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Create asphalt-like texture
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 0, size, size);
    
    // Add noise for texture
    const imageData = ctx.getImageData(0, 0, size, size);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 30;
      data[i] += noise;     // R
      data[i + 1] += noise; // G
      data[i + 2] += noise; // B
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }

  async buildTrack(levelData, strategy = 'segment') {
    console.log('🏁 Building optimized track from level data...');
    
    // Capture detailed performance stats before building
    this.capturePerformanceStatsBefore();
    
    this.clearTrack();
    
    // Set shader from level data if specified
    if (levelData.shader) {
      await this.setShader(levelData.shader);
    }
    
    // Set skybox from level data if specified
    if (levelData.skybox && this.scene) {
      // Find skybox in scene (should be set up by Game.js)
      const skyboxObject = this.scene.children.find(child => 
        child.userData && child.userData.type === 'skybox'
      );
      
      // Note: Skybox management will be handled by Game.js
      console.log(`Track requesting skybox: ${levelData.skybox}`);
    }
    
    // Check if level data specifies a generation strategy
    const generationStrategy = levelData.generationStrategy || strategy;
    
    let trackData;
    
    // Use traditional segment-based approach for existing levels (1-5) or if specified
    if (generationStrategy === 'segment' || levelData.generateTrack) {
      // Generate segments from level data (existing method)
      this.segments = this.generateSegments(levelData);
      
      // Build optimized track meshes and physics (existing method)
      trackData = await this.buildOptimizedTrackMeshes();
    } else {
      // Use new strategy-based generation for new levels
      const { TrackGenerationFactory } = await import('./generation/TrackGenerationStrategies.js');
      const strategyInstance = TrackGenerationFactory.createStrategy(generationStrategy, this);
      
      // Build track using the selected strategy
      const result = strategyInstance.generate(levelData);
      
      // Store meshes and bodies
      this.trackMeshes = result.meshes || [];
      this.trackBodies = result.bodies || [];
      
      // Format trackData to match expected structure
      trackData = {
        startPlane: result.startPlane || null,
        finishPlane: result.finishPlane || null,
        startPosition: result.startPosition || new THREE.Vector3(0, 5, 0),
        checkpoints: result.checkpoints || [],
        bounds: result.bounds || { minY: -200, maxY: 50 }
      };
    }
    
    // Capture detailed performance stats after building
    this.capturePerformanceStatsAfter();
    
    console.log(`🏁 Optimized track built${this.segments.length ? ` with ${this.segments.length} segments` : ''}`);
    this.logPerformanceImprovement();
    
    return trackData;
  }

  capturePerformanceStatsBefore() {
    // Count current meshes in scene
    this.performanceStats.meshCountBefore = this.scene.children.filter(child => child instanceof THREE.Mesh).length;
    
    // Try to get memory usage if available
    if (performance.memory) {
      this.performanceStats.memoryBefore = performance.memory.usedJSHeapSize;
    }
    
    // Reset cache stats
    this.cacheStats = { hits: 0, misses: 0 };
  }

  capturePerformanceStatsAfter() {
    // Count meshes after building
    this.performanceStats.meshCountAfter = this.scene.children.filter(child => child instanceof THREE.Mesh).length;
    
    // Get memory usage if available
    if (performance.memory) {
      this.performanceStats.memoryAfter = performance.memory.usedJSHeapSize;
    }
    
    // Store cache stats
    this.performanceStats.geometryCacheHits = this.cacheStats.hits;
    this.performanceStats.materialCacheHits = this.materialCache.size;
  }

  generateSegments(levelData) {
    const segments = [];
    let position = new THREE.Vector3(0, 5, 0);
    let yaw = 0;
    let pitch = 0;
    let roll = 0;
    
        // Helper function to add a segment (matches original exactly)
    const addSegment = (opts = {}) => {
      // Handle lateral shift (for special track positioning)
      if (opts.lateralShift) {
        const orientationNow = this.getOrientation(yaw, pitch, roll);
        const rightVec = new THREE.Vector3(1, 0, 0).applyQuaternion(orientationNow);
        position.add(rightVec.multiplyScalar(opts.lateralShift));
        return; // Don't create a segment, just shift position
      }
      
      // Handle custom position for loop segments
      if (opts.customPosition) {
        const orientation = opts.customOrientation || this.getOrientation(yaw, pitch, roll);
        const center = opts.customPosition.clone();
        
        let lanes;
        if (opts.lanes) {
          lanes = opts.lanes.map(l => Object.assign({}, l));
        } else {
          lanes = [ { offset: 0, width: this.DEFAULT_WIDTH, isBoost: false } ];
        }
        
        segments.push({
          center,
          orientation: orientation.clone(),
          lanes,
          type: opts.type || 'box',
          curve: opts.curve || null,
          tubularSegments: opts.tubularSegments || 32,
          isGap: opts.isGap || false,
          isStartLine: opts.isStartLine || false,
          isFinishLine: opts.isFinishLine || false,
          isBouncePad: opts.isBouncePad || false,
          isBoost: opts.isBoost || false,
          isBoostPowerup: opts.isBoostPowerup || false
        });
        
        // Update position if nextPosition is provided
        if (opts.nextPosition) {
          position.copy(opts.nextPosition);
        }
        
        // Update angles if provided
        if (opts.setYaw !== undefined) yaw = opts.setYaw;
        if (opts.setPitch !== undefined) pitch = opts.setPitch;
        if (opts.setRoll !== undefined) roll = opts.setRoll;
        
        return;
      }
      
      const orientation = this.getOrientation(yaw, pitch, roll);
      const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(orientation).clone();
      const nextPos = position.clone().add(forward.clone().multiplyScalar(this.SEGMENT_LENGTH));
      const center = position.clone().add(nextPos).multiplyScalar(0.5);
      let lanes;
      if (opts.lanes) {
        lanes = opts.lanes.map(l => Object.assign({}, l));
      } else {
        lanes = [ { offset: 0, width: this.DEFAULT_WIDTH, isBoost: false } ];
      }
      segments.push({
        center,
        orientation: orientation.clone(),
        lanes,
        type: opts.type || 'box',
        curve: opts.curve || null,
        tubularSegments: opts.tubularSegments || 32,
        isGap: opts.isGap || false,
        isStartLine: opts.isStartLine || false,
        isFinishLine: opts.isFinishLine || false,
        isBouncePad: opts.isBouncePad || false,
        isBoost: opts.isBoost || false,
        isBoostPowerup: opts.isBoostPowerup || false
      });
      // Advance yaw/pitch/roll for next segment
      yaw   += opts.yawDelta   || 0;
      pitch += opts.pitchDelta || 0;
      roll  += opts.rollDelta  || 0;
      // Move position for next segment
      position.copy(nextPos);
    };
    
    // Add loop helper function - Hot Wheels style with separate entry/exit lanes
    const addLoop = (radius, rampLength = 15) => {
      console.log('Building Hot Wheels loop with separate entry/exit lanes');
      
      // Store initial state
      const startPos = position.clone();
      const startYaw = yaw;
      const startPitch = pitch;
      const startRoll = roll;
      
      // KEY INSIGHT: Entry and exit are SEPARATE lanes that merge at the top
      // Entry lane curves to the RIGHT and up
      // Exit lane curves to the LEFT coming down
      // They meet at the top of the loop
      
      const laneOffset = this.DEFAULT_WIDTH * 0.6; // How far apart entry/exit lanes are
      const loopCenterZ = startPos.z + radius * 1.5; // Loop center ahead
      const loopCenterY = startPos.y + radius; // Loop center one radius above ground
      const loopCenter = new THREE.Vector3(startPos.x, loopCenterY, loopCenterZ);
      
      // PHASE 1: Entry Ramp - curves right and up
      const entrySegments = 5;
      const curveAngle = Math.PI * 0.15; // Curve 27 degrees to the right
      
      for (let i = 0; i < entrySegments; i++) {
        const t = (i + 1) / entrySegments;
        const easedT = t * t * (3 - 2 * t); // Smooth interpolation
        
        // Curve to the right while moving forward
        const lateralOffset = laneOffset * Math.sin(curveAngle * easedT);
        const forwardProgress = rampLength * t;
        
        // Start ramping up
        const heightProgress = radius * 0.3 * easedT; // Rise to entry point
        const pitchProgress = Math.PI * 0.25 * easedT; // Pitch up 45 degrees
        
        const segmentPos = new THREE.Vector3(
          startPos.x + lateralOffset,
          startPos.y + heightProgress,
          startPos.z + forwardProgress
        );
        
        // Slight yaw to follow the curve
        const segmentYaw = startYaw + curveAngle * easedT;
        const segmentPitch = startPitch + pitchProgress;
        
        addSegment({
          customPosition: segmentPos,
          customOrientation: this.getOrientation(segmentYaw, segmentPitch, startRoll),
          setYaw: segmentYaw,
          setPitch: segmentPitch
        });
      }
      
      // PHASE 2: Loop Arc - only the top portion
      // Start at about 225 degrees (lower right) and go to 315 degrees (lower left)
      const loopStartAngle = Math.PI * 1.25; // 225 degrees
      const loopEndAngle = Math.PI * 1.75;   // 315 degrees
      
      // First arc to the top
      const arcSegments = 20;
      for (let i = 0; i <= arcSegments; i++) {
        const t = i / arcSegments;
        // Go from start angle all the way around to end angle
        const angle = loopStartAngle - Math.PI * 1.5 * t; // Go counterclockwise
        
        const x = loopCenter.x + laneOffset * (1 - t * 2); // Merge lanes at top
        const y = loopCenter.y - radius * Math.cos(angle);
        const z = loopCenter.z - radius * Math.sin(angle);
        
        // Pitch follows the tangent to the circle
        const segmentPitch = startPitch + angle - Math.PI/2;
        
        addSegment({
          customPosition: new THREE.Vector3(x, y, z),
          customOrientation: this.getOrientation(startYaw, segmentPitch, startRoll),
          setPitch: segmentPitch
        });
      }
      
      // PHASE 3: Exit Ramp - curves left and down
      // Start from exit point of loop
      const exitStartAngle = loopEndAngle;
      const exitX = loopCenter.x - laneOffset;
      const exitY = loopCenter.y - radius * Math.cos(exitStartAngle);
      const exitZ = loopCenter.z - radius * Math.sin(exitStartAngle);
      
      position.set(exitX, exitY, exitZ);
      pitch = startPitch + exitStartAngle - Math.PI/2;
      
      for (let i = 0; i < entrySegments; i++) {
        const t = (i + 1) / entrySegments;
        const easedT = t * t * (3 - 2 * t);
        
        // Curve back to center while moving forward
        const lateralOffset = laneOffset * (1 - easedT);
        const forwardProgress = rampLength * t;
        
        // Ramp down to ground level
        const currentHeight = exitY - (exitY - startPos.y) * easedT;
        const currentPitch = pitch - (pitch - startPitch) * easedT;
        
        const segmentPos = new THREE.Vector3(
          startPos.x - lateralOffset,
          currentHeight,
          exitZ + forwardProgress
        );
        
        addSegment({
          customPosition: segmentPos,
          customOrientation: this.getOrientation(startYaw, currentPitch, startRoll),
          setPitch: currentPitch
        });
      }
      
      // Reset state for next segments
      pitch = startPitch;
      yaw = startYaw;
      position.y = startPos.y;
    };

    // Execute the level's track generation function
    levelData.generateTrack(addSegment, addLoop);
    
    return segments;
  }

  async buildOptimizedTrackMeshes() {
    const rainbowColors = this.generateRainbowColors();
    let startPlane = null;
    let finishPlane = null;
    let startPosition = new THREE.Vector3(0, 5, 0);
    let minY = Infinity;
    let maxY = -Infinity;
    
    // Separate segments by type for optimized handling
    const boxSegments = [];
    const curveSegments = [];
    const wallData = [];
    
    this.segments.forEach((segment, index) => {
      // Track min/max Y positions
      if (segment.center) {
        minY = Math.min(minY, segment.center.y);
        maxY = Math.max(maxY, segment.center.y);
      }
      const baseColor = rainbowColors[index % rainbowColors.length];
      
      // Categorize segments for optimization
      segment.lanes.forEach(lane => {
        if (segment.isGap) return;
        
        if (segment.type === 'curve' && segment.curve) {
          curveSegments.push({ segment, lane, baseColor, index });
        } else {
          boxSegments.push({ segment, lane, baseColor, index });
          
          // Collect wall data for instanced rendering
          if (segment.lanes.length === 1) {
            const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
            const lanePosition = segment.center.clone().add(right.clone().multiplyScalar(lane.offset));
            
            // Left wall
            const leftWallPos = lanePosition.clone()
              .add(right.clone().multiplyScalar(-(lane.width/2 + this.WALL_THICKNESS/2)));
            leftWallPos.y += this.WALL_HEIGHT/2 + this.TRACK_THICKNESS/2;
            
            // Right wall
            const rightWallPos = lanePosition.clone()
              .add(right.clone().multiplyScalar(lane.width/2 + this.WALL_THICKNESS/2));
            rightWallPos.y += this.WALL_HEIGHT/2 + this.TRACK_THICKNESS/2;
            
            wallData.push(
              { position: leftWallPos, orientation: segment.orientation },
              { position: rightWallPos, orientation: segment.orientation }
            );
          }
        }
      });
      
      // Handle start/finish lines
      if (segment.isStartLine) {
        startPlane = this.buildStartFinishLine(segment, true);
        startPosition = this.calculateSpawnPosition(segment);
      }
      
      if (segment.isFinishLine) {
        finishPlane = this.buildStartFinishLine(segment, false);
        console.log('Built finish plane:', finishPlane);
      }
      
      // Handle bounce pads
      if (segment.isBouncePad) {
        this.buildBouncePad(segment);
      }
      
      // Handle boost sections (speed pads)
      if (segment.isBoost) {
        this.buildBoostSection(segment);
      }
      
      // Handle boost powerups
      if (segment.isBoostPowerup) {
        this.buildBoostPowerup(segment);
      }
    });
    
    // Build optimized track segments
    await this.buildMergedBoxSegments(boxSegments);
    
    // Build curved segments individually (can't be easily merged)
    curveSegments.forEach(({ segment, lane, baseColor }) => {
      this.buildCurvedTrackLane(segment, lane, baseColor);
    });
    
    // Build instanced walls
    this.buildInstancedWalls(wallData);
    
    console.log(`📊 Track Y bounds - Min: ${minY}, Max: ${maxY}, Total drop: ${maxY - minY}`);
    console.log(`🎯 Built ${boxSegments.length} box segments, ${curveSegments.length} curve segments, ${wallData.length} walls`);
    
    return {
      startPlane,
      finishPlane,
      startPosition,
      checkpoints: [],
      bounds: {
        minY: minY === Infinity ? -200 : minY,
        maxY: maxY === -Infinity ? 50 : maxY
      }
    };
  }



  buildCurvedTrackLane(segment, lane, baseColor) {
    // Build a curved track segment by creating segments along the curve
    const curve = segment.curve;
    const steps = segment.tubularSegments || 32;
    const trackWidth = lane.width || this.DEFAULT_WIDTH;
    
    // Sample points along the curve
    const points = [];
    const tangents = [];
    const normals = [];
    const binormals = [];
    
    // Get curve frames
    const frames = curve.computeFrenetFrames(steps, false);
    
    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    const uvs = [];
    
    // Generate vertices along the curve
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const point = curve.getPoint(t);
      const normal = frames.normals[i];
      const binormal = frames.binormals[i];
      
      // Create track cross-section at this point
      // The track should be oriented perpendicular to the curve tangent
      const halfWidth = trackWidth / 2;
      const halfThickness = this.TRACK_THICKNESS / 2;
      
      // For a vertical loop, we need to orient the track properly
      // The binormal gives us the "right" direction
      // The normal gives us the "up" direction (towards center of curvature)
      
      // Calculate the four corners of the track at this position
      // We want the track surface to face towards the center of the loop
      
      // Inner bottom
      vertices.push(
        point.x - binormal.x * halfWidth - normal.x * halfThickness,
        point.y - binormal.y * halfWidth - normal.y * halfThickness,
        point.z - binormal.z * halfWidth - normal.z * halfThickness
      );
      
      // Inner top
      vertices.push(
        point.x + binormal.x * halfWidth - normal.x * halfThickness,
        point.y + binormal.y * halfWidth - normal.y * halfThickness,
        point.z + binormal.z * halfWidth - normal.z * halfThickness
      );
      
      // Outer top
      vertices.push(
        point.x + binormal.x * halfWidth + normal.x * halfThickness,
        point.y + binormal.y * halfWidth + normal.y * halfThickness,
        point.z + binormal.z * halfWidth + normal.z * halfThickness
      );
      
      // Outer bottom
      vertices.push(
        point.x - binormal.x * halfWidth + normal.x * halfThickness,
        point.y - binormal.y * halfWidth + normal.y * halfThickness,
        point.z - binormal.z * halfWidth + normal.z * halfThickness
      );
      
      // UVs
      const u = t;
      uvs.push(0, u, 1, u, 1, u, 0, u);
    }
    
    // Create faces
    for (let i = 0; i < steps; i++) {
      const a = i * 4;
      const b = (i + 1) * 4;
      
      // Top face
      indices.push(a + 3, a + 2, b + 3);
      indices.push(b + 3, a + 2, b + 2);
      
      // Bottom face
      indices.push(a, b, a + 1);
      indices.push(a + 1, b, b + 1);
      
      // Left face
      indices.push(a, a + 3, b);
      indices.push(b, a + 3, b + 3);
      
      // Right face
      indices.push(a + 1, b + 1, a + 2);
      indices.push(a + 2, b + 1, b + 2);
    }
    
    // Set geometry attributes
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    const materialColor = baseColor.getHex();
    const material = new THREE.MeshStandardMaterial({
      color: materialColor,
      map: this.trackTexture,
      roughness: 0.8,
      metalness: 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    this.scene.add(mesh);
    this.trackMeshes.push(mesh);
    
    // Create physics trimesh from the geometry
    const physicsVertices = [];
    const physicsIndices = [];
    
    // Extract vertices from geometry
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      physicsVertices.push(positions[i], positions[i + 1], positions[i + 2]);
    }
    
    // Extract indices
    if (geometry.index) {
      const index = geometry.index.array;
      for (let i = 0; i < index.length; i++) {
        physicsIndices.push(index[i]);
      }
    } else {
      // Generate indices for non-indexed geometry
      for (let i = 0; i < positions.length / 3; i++) {
        physicsIndices.push(i);
      }
    }
    
    // Create trimesh shape
    const trimeshShape = new CANNON.Trimesh(
      new Float32Array(physicsVertices),
      new Uint16Array(physicsIndices)
    );
    
    const body = new CANNON.Body({ 
      mass: 0, 
      material: this.materials.track,
      shape: trimeshShape
    });
    
    this.physicsWorld.addBody(body);
    this.trackBodies.push(body);
    
    // TODO: Add walls for curved segments in future
  }

  async buildMergedBoxSegments(boxSegments) {
    if (boxSegments.length === 0) return;
    
    console.log(`🔧 Building ${boxSegments.length} box segments with geometry merging...`);
    
    // Process segments in chunks for better performance
    const chunkSize = 20;
    const chunks = [];
    
    for (let i = 0; i < boxSegments.length; i += chunkSize) {
      chunks.push(boxSegments.slice(i, i + chunkSize));
    }
    
    // Process chunks sequentially to avoid overwhelming async calls
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
      const chunk = chunks[chunkIndex];
      const geometries = [];
      const colors = [];
      
      chunk.forEach(({ segment, lane, baseColor }) => {
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
        const lanePosition = segment.center.clone().add(right.clone().multiplyScalar(lane.offset));
        
        // Get or create cached geometry
        const geometryKey = `box_${lane.width}_${this.TRACK_THICKNESS}_${this.SEGMENT_LENGTH}`;
        let geometry = this.getOrCreateGeometry(geometryKey, () => 
          new THREE.BoxGeometry(lane.width, this.TRACK_THICKNESS, this.SEGMENT_LENGTH)
        );
        
        // Clone and transform geometry
        const clonedGeometry = geometry.clone();
        
        // Apply transformation
        const matrix = new THREE.Matrix4();
        matrix.compose(lanePosition, segment.orientation, new THREE.Vector3(1, 1, 1));
        clonedGeometry.applyMatrix4(matrix);
        
        // Add vertex colors for rainbow effect
        const positionCount = clonedGeometry.attributes.position.count;
        const colorArray = new Float32Array(positionCount * 3);
        
        for (let i = 0; i < positionCount; i++) {
          const offset = i * 3;
          colorArray[offset] = baseColor.r;
          colorArray[offset + 1] = baseColor.g;
          colorArray[offset + 2] = baseColor.b;
        }
        
        clonedGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        
        geometries.push(clonedGeometry);
        
        // Create physics body for each segment (keep separate for collision)
        const shape = new CANNON.Box(new CANNON.Vec3(lane.width/2, this.TRACK_THICKNESS/2, this.SEGMENT_LENGTH/2));
        const body = new CANNON.Body({ mass: 0, material: this.materials.track });
        body.addShape(shape);
        body.position.copy(lanePosition);
        body.quaternion.copy(segment.orientation);
        
        this.physicsWorld.addBody(body);
        this.trackBodies.push(body);
      });
      
      // Merge geometries into single mesh
      if (geometries.length > 0) {
        const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
        
        // Apply current shader to the merged geometry
        const mergedMesh = await this.applyTrackShader(mergedGeometry);
        mergedMesh.castShadow = true;
        mergedMesh.receiveShadow = true;
        
        this.scene.add(mergedMesh);
        this.trackMeshes.push(mergedMesh);
        
        // Clean up individual geometries
        geometries.forEach(geo => geo.dispose());
        
        console.log(`✅ Merged chunk ${chunkIndex + 1}/${chunks.length} with ${chunk.length} segments`);
      }
    }
  }

  buildInstancedWalls(wallData) {
    if (wallData.length === 0) return;
    
    console.log(`🧱 Building ${wallData.length} walls with InstancedMesh...`);
    
    // Get or create cached wall geometry
    const wallGeometry = this.getOrCreateGeometry(
      `wall_${this.WALL_THICKNESS}_${this.WALL_HEIGHT}_${this.SEGMENT_LENGTH}`,
      () => new THREE.BoxGeometry(this.WALL_THICKNESS, this.WALL_HEIGHT, this.SEGMENT_LENGTH)
    );
    
    // Create instanced mesh for all walls
    this.instancedWalls = new THREE.InstancedMesh(
      wallGeometry,
      this.sharedWallMaterial,
      wallData.length
    );
    
    this.instancedWalls.castShadow = true;
    this.instancedWalls.receiveShadow = true;
    
    // Set up instance matrices and physics bodies
    wallData.forEach((wall, index) => {
      const matrix = new THREE.Matrix4();
      matrix.compose(
        wall.position,
        wall.orientation,
        new THREE.Vector3(1, 1, 1)
      );
      
      this.instancedWalls.setMatrixAt(index, matrix);
      
      // Create physics body for each wall
      const wallShape = new CANNON.Box(new CANNON.Vec3(
        this.WALL_THICKNESS/2, 
        this.WALL_HEIGHT/2, 
        this.SEGMENT_LENGTH/2
      ));
      const wallBody = new CANNON.Body({ mass: 0, material: this.materials.track });
      wallBody.addShape(wallShape);
      wallBody.position.copy(wall.position);
      wallBody.quaternion.copy(wall.orientation);
      this.physicsWorld.addBody(wallBody);
      this.trackBodies.push(wallBody);
    });
    
    this.instancedWalls.instanceMatrix.needsUpdate = true;
    this.instancedWalls.count = wallData.length;
    this.wallInstanceCount = wallData.length;
    
    this.scene.add(this.instancedWalls);
    this.trackMeshes.push(this.instancedWalls);
    
    console.log(`✅ Created instanced walls: ${wallData.length} instances in 1 draw call`);
  }
  
  buildBouncePad(segment) {
    segment.lanes.forEach(lane => {
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
      const lanePosition = segment.center.clone().add(right.clone().multiplyScalar(lane.offset));
      
      // Create bounce pad visual - bright cyan platform
      const padGeometry = new THREE.BoxGeometry(lane.width, 0.3, this.SEGMENT_LENGTH);
      const padMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00cccc,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2
      });
      
      const padMesh = new THREE.Mesh(padGeometry, padMaterial);
      padMesh.position.copy(lanePosition);
      padMesh.position.y += this.TRACK_THICKNESS / 2 + 0.15; // Slightly above track
      padMesh.quaternion.copy(segment.orientation);
      
      this.scene.add(padMesh);
      this.trackMeshes.push(padMesh);
      
      // Create physics body for bounce detection
      const padShape = new CANNON.Box(new CANNON.Vec3(lane.width/2, 0.15, this.SEGMENT_LENGTH/2));
      const padBody = new CANNON.Body({ 
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: padShape
      });
      padBody.position.copy(padMesh.position);
      padBody.quaternion.copy(segment.orientation);
      padBody.userData = { isBouncePad: true };
      
      this.physicsWorld.addBody(padBody);
      this.trackBodies.push(padBody);
      
      // Add glowing effect markers
      const markerGeometry = new THREE.CylinderGeometry(0.5, 0.8, 0.1, 8);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff
      });
      
      // Add 4 corner markers
      const markerPositions = [
        { x: lane.width/2 - 1, z: this.SEGMENT_LENGTH/2 - 1 },
        { x: -(lane.width/2 - 1), z: this.SEGMENT_LENGTH/2 - 1 },
        { x: lane.width/2 - 1, z: -(this.SEGMENT_LENGTH/2 - 1) },
        { x: -(lane.width/2 - 1), z: -(this.SEGMENT_LENGTH/2 - 1) }
      ];
      
      markerPositions.forEach(pos => {
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(lanePosition);
        marker.position.y += this.TRACK_THICKNESS / 2 + 0.35;
        
        const markerOffset = new THREE.Vector3(pos.x, 0, pos.z);
        markerOffset.applyQuaternion(segment.orientation);
        marker.position.add(markerOffset);
        
        marker.quaternion.copy(segment.orientation);
        
        this.scene.add(marker);
        this.trackMeshes.push(marker);
      });
    });
  }
  
  buildBoostSection(segment) {
    segment.lanes.forEach(lane => {
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
      const lanePosition = segment.center.clone().add(right.clone().multiplyScalar(lane.offset));
      
      // SPEED PAD: Classic racing game style
      const speedPadGroup = new THREE.Group();
      
      // Base pad - flat rectangular platform
      const baseGeometry = new THREE.BoxGeometry(lane.width * 0.9, 0.3, this.SEGMENT_LENGTH * 0.8);
      const baseMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333 // Dark gray base
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = 0.15;
      speedPadGroup.add(base);
      
      // Glowing top surface
      const surfaceGeometry = new THREE.PlaneGeometry(lane.width * 0.8, this.SEGMENT_LENGTH * 0.7);
      const surfaceMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ffff, // Bright cyan
        transparent: true,
        opacity: 0.8
      });
      const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
      surface.position.y = 0.31; // Just above base
      surface.rotateX(-Math.PI / 2);
      speedPadGroup.add(surface);
      
      // Arrow chevrons on surface
      for (let i = 0; i < 3; i++) {
        const chevronGeometry = new THREE.ConeGeometry(0.4, 1.2, 3);
        const chevronMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffffff // White arrows
        });
        
        const chevron = new THREE.Mesh(chevronGeometry, chevronMaterial);
        chevron.position.set(0, 0.4, (i - 1) * 1.5);
        chevron.rotateX(-Math.PI / 2); // Point forward along track direction
        
        speedPadGroup.add(chevron);
      }
      
      // Side energy strips for extra visibility
      for (let side = -1; side <= 1; side += 2) {
        const stripGeometry = new THREE.BoxGeometry(0.2, 0.8, this.SEGMENT_LENGTH * 0.6);
        const stripMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x00aaff,
          transparent: true,
          opacity: 0.7
        });
        
        const strip = new THREE.Mesh(stripGeometry, stripMaterial);
        strip.position.set(side * (lane.width * 0.4), 0.4, 0);
        
        speedPadGroup.add(strip);
      }
      
      speedPadGroup.position.copy(lanePosition);
      speedPadGroup.position.y += this.TRACK_THICKNESS / 2 + 0.1;
      speedPadGroup.quaternion.copy(segment.orientation);
      
      // Store for animation
      speedPadGroup.userData.isBoostPad = true;
      
      this.scene.add(speedPadGroup);
      this.trackMeshes.push(speedPadGroup);
      
      // Create physics body for speed pad detection - thin trigger zone
      const padShape = new CANNON.Box(new CANNON.Vec3(lane.width/2, 0.5, this.SEGMENT_LENGTH/2));
      const padBody = new CANNON.Body({ 
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: padShape,
        isTrigger: true // Make it a trigger so it doesn't cause collision bumps
      });
      padBody.position.copy(lanePosition);
      padBody.position.y = lanePosition.y + this.TRACK_THICKNESS / 2 + 0.5; // Taller detection zone for slopes
      padBody.quaternion.copy(segment.orientation);
      padBody.userData = { isSpeedPad: true };
      
      this.physicsWorld.addBody(padBody);
      this.trackBodies.push(padBody);
    });
  }
  
  buildBoostPowerup(segment) {
    segment.lanes.forEach(lane => {
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
      const lanePosition = segment.center.clone().add(right.clone().multiplyScalar(lane.offset));
      
      // Create boost powerup visual - SIMPLIFIED: single sphere with shader
      const orbGeometry = new THREE.SphereGeometry(1.8, 8, 6); // Much simpler geometry
      
      // Simple bright material that's always visible
      const orbMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00, // Bright yellow - highly visible
        transparent: false
      });
      
      // Add animated rotation and floating
      const orbGroup = new THREE.Group();
      
      // Create main orb
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orbGroup.add(orb);
      
      // Add glowing ring around it for extra visibility
      const ringGeometry = new THREE.RingGeometry(2.2, 2.8, 8);
      const ringMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, // Bright green ring
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotateX(-Math.PI / 2); // Lie flat
      orbGroup.add(ring);
      
      // Store for animation
      orbGroup.userData.isAnimatedPowerup = true;
      
      orbGroup.position.copy(lanePosition);
      orbGroup.position.y += this.TRACK_THICKNESS / 2 + 3;
      
      this.scene.add(orbGroup);
      this.trackMeshes.push(orbGroup);
      
      // Create physics body for powerup detection - as a trigger/sensor only
      const powerupShape = new CANNON.Sphere(2);
      const powerupBody = new CANNON.Body({ 
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: powerupShape,
        isTrigger: true  // This makes it a sensor that doesn't physically collide
      });
      powerupBody.position.copy(orbGroup.position);
      powerupBody.userData = { isBoostPowerup: true, collected: false };
      
      this.physicsWorld.addBody(powerupBody);
      this.trackBodies.push(powerupBody);
      
      // Store mesh reference for hiding when collected
      powerupBody.userData.meshes = [orbGroup];
    });
  }

  buildStartFinishLine(segment, isStart) {
    const geometry = new THREE.PlaneGeometry(this.DEFAULT_WIDTH, 2);
    const material = new THREE.MeshBasicMaterial({ 
      map: this.checkeredTexture, 
      side: THREE.DoubleSide,
      opacity: 0.8,
      transparent: true
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    const offset = isStart ? -this.SEGMENT_LENGTH/2 - 0.01 : this.SEGMENT_LENGTH/2 + 0.01;
    const forward = new THREE.Vector3(0, 0, offset).applyQuaternion(segment.orientation);
    
    mesh.position.copy(segment.center).add(forward);
    mesh.quaternion.copy(segment.orientation);
    mesh.rotateX(Math.PI / 2);
    
    this.scene.add(mesh);
    this.trackMeshes.push(mesh);
    
    // Add starting platform at start
    if (isStart) {
      // Create a larger platform for starting
      const platformGeometry = new THREE.BoxGeometry(this.DEFAULT_WIDTH + 6, this.TRACK_THICKNESS * 2, this.SEGMENT_LENGTH * 2);
      const platformMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x555555,
        metalness: 0.3,
        roughness: 0.7
      });
      
      const platformMesh = new THREE.Mesh(platformGeometry, platformMaterial);
      platformMesh.position.copy(segment.center);
      platformMesh.position.y -= this.TRACK_THICKNESS; // Align with track
      platformMesh.quaternion.copy(segment.orientation);
      platformMesh.castShadow = true;
      platformMesh.receiveShadow = true;
      this.scene.add(platformMesh);
      this.trackMeshes.push(platformMesh);
      
      // Add physics for platform
      const platformShape = new CANNON.Box(new CANNON.Vec3(
        (this.DEFAULT_WIDTH + 6)/2, 
        this.TRACK_THICKNESS, 
        this.SEGMENT_LENGTH
      ));
      const platformBody = new CANNON.Body({ mass: 0, material: this.materials.track });
      platformBody.addShape(platformShape);
      platformBody.position.copy(platformMesh.position);
      platformBody.quaternion.copy(segment.orientation);
      this.physicsWorld.addBody(platformBody);
      this.trackBodies.push(platformBody);
      
      // Add side barriers to prevent falling off platform
      const barrierHeight = 1.5;
      const barrierThickness = 0.3;
      
      // Left barrier
      const leftBarrierGeometry = new THREE.BoxGeometry(barrierThickness, barrierHeight, this.SEGMENT_LENGTH * 2);
      const barrierMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
      
      const leftBarrier = new THREE.Mesh(leftBarrierGeometry, barrierMaterial);
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
      leftBarrier.position.copy(segment.center)
        .add(right.clone().multiplyScalar(-(this.DEFAULT_WIDTH + 6)/2 - barrierThickness/2));
      leftBarrier.position.y += barrierHeight/2;
      leftBarrier.quaternion.copy(segment.orientation);
      leftBarrier.castShadow = true;
      this.scene.add(leftBarrier);
      this.trackMeshes.push(leftBarrier);
      
      // Right barrier
      const rightBarrier = new THREE.Mesh(leftBarrierGeometry, barrierMaterial);
      rightBarrier.position.copy(segment.center)
        .add(right.clone().multiplyScalar((this.DEFAULT_WIDTH + 6)/2 + barrierThickness/2));
      rightBarrier.position.y += barrierHeight/2;
      rightBarrier.quaternion.copy(segment.orientation);
      rightBarrier.castShadow = true;
      this.scene.add(rightBarrier);
      this.trackMeshes.push(rightBarrier);
      
      // Back barrier
      const backBarrierGeometry = new THREE.BoxGeometry(this.DEFAULT_WIDTH + 6, barrierHeight, barrierThickness);
      const backBarrier = new THREE.Mesh(backBarrierGeometry, barrierMaterial);
      const backward = new THREE.Vector3(0, 0, -1).applyQuaternion(segment.orientation);
      backBarrier.position.copy(segment.center)
        .add(backward.clone().multiplyScalar(this.SEGMENT_LENGTH - barrierThickness/2));
      backBarrier.position.y += barrierHeight/2;
      backBarrier.quaternion.copy(segment.orientation);
      backBarrier.castShadow = true;
      this.scene.add(backBarrier);
      this.trackMeshes.push(backBarrier);
      
      // Add physics for barriers
      const sideBarrierShape = new CANNON.Box(new CANNON.Vec3(barrierThickness/2, barrierHeight/2, this.SEGMENT_LENGTH));
      const backBarrierShape = new CANNON.Box(new CANNON.Vec3((this.DEFAULT_WIDTH + 6)/2, barrierHeight/2, barrierThickness/2));
      
      [leftBarrier, rightBarrier].forEach(barrier => {
        const body = new CANNON.Body({ mass: 0, material: this.materials.track });
        body.addShape(sideBarrierShape);
        body.position.copy(barrier.position);
        body.quaternion.copy(segment.orientation);
        this.physicsWorld.addBody(body);
        this.trackBodies.push(body);
      });
      
      const backBody = new CANNON.Body({ mass: 0, material: this.materials.track });
      backBody.addShape(backBarrierShape);
      backBody.position.copy(backBarrier.position);
      backBody.quaternion.copy(segment.orientation);
      this.physicsWorld.addBody(backBody);
      this.trackBodies.push(backBody);
    }
    
    // Calculate the normal BEFORE rotation for correct plane detection
    const planeNormal = new THREE.Vector3(0, 0, 1).applyQuaternion(segment.orientation);
    
    // Add finish line visuals - clear and simple design
    if (!isStart) {
      // FINISH LINE ARCH - Two bright pillars and a banner
      const pillarHeight = 15;
      const pillarWidth = 1.5;
      const trackWidth = this.DEFAULT_WIDTH + 4;
      
      // Left pillar
      const pillarGeometry = new THREE.BoxGeometry(pillarWidth, pillarHeight, pillarWidth);
      const pillarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff // Bright white pillars
      });
      
      const leftPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(segment.orientation);
      leftPillar.position.copy(mesh.position)
        .add(right.clone().multiplyScalar(-trackWidth/2));
      leftPillar.position.y = mesh.position.y + pillarHeight/2;  // Set absolute, don't add
      leftPillar.quaternion.copy(segment.orientation);
      this.scene.add(leftPillar);
      this.trackMeshes.push(leftPillar);
      
      // Right pillar
      const rightPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      rightPillar.position.copy(mesh.position)
        .add(right.clone().multiplyScalar(trackWidth/2));
      rightPillar.position.y = mesh.position.y + pillarHeight/2;  // Set absolute, don't add
      rightPillar.quaternion.copy(segment.orientation);
      this.scene.add(rightPillar);
      this.trackMeshes.push(rightPillar);
      
      // Top banner connecting pillars
      const bannerGeometry = new THREE.BoxGeometry(trackWidth + pillarWidth, 2, 0.5);
      const bannerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00 // Green for finish
      });
      
      const banner = new THREE.Mesh(bannerGeometry, bannerMaterial);
      banner.position.copy(mesh.position);
      banner.position.y = mesh.position.y + pillarHeight;  // Set absolute position
      banner.quaternion.copy(segment.orientation);
      this.scene.add(banner);
      this.trackMeshes.push(banner);
      
      // Removed text mesh that was causing visual glitch
      
      // Checkered pattern on track
      const checkerGeometry = new THREE.PlaneGeometry(trackWidth, 4);
      const checkerMaterial = new THREE.MeshBasicMaterial({ 
        map: this.checkeredTexture,
        side: THREE.DoubleSide,
        opacity: 0.95
      });
      const checkerMesh = new THREE.Mesh(checkerGeometry, checkerMaterial);
      checkerMesh.position.copy(mesh.position);
      checkerMesh.position.y += 0.02; // Just above track surface
      checkerMesh.quaternion.copy(segment.orientation);
      checkerMesh.rotateX(Math.PI / 2);
      this.scene.add(checkerMesh);
      this.trackMeshes.push(checkerMesh);
      
      // Add animated light strips on pillars for visibility
      for (let i = 0; i < 3; i++) {
        const lightGeometry = new THREE.BoxGeometry(pillarWidth * 1.2, 1, pillarWidth * 1.2);
        const lightMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffff00, // Yellow lights
          transparent: true,
          opacity: 0.8
        });
        
        const leftLight = new THREE.Mesh(lightGeometry, lightMaterial);
        leftLight.position.x = leftPillar.position.x;
        leftLight.position.z = leftPillar.position.z;
        leftLight.position.y = mesh.position.y + 3 + i * 4;  // Position relative to track
        this.scene.add(leftLight);
        this.trackMeshes.push(leftLight);
        
        const rightLight = new THREE.Mesh(lightGeometry, lightMaterial);
        rightLight.position.x = rightPillar.position.x;
        rightLight.position.z = rightPillar.position.z;
        rightLight.position.y = mesh.position.y + 3 + i * 4;  // Position relative to track
        this.scene.add(rightLight);
        this.trackMeshes.push(rightLight);
      }
    }
    
    return {
      position: mesh.position.clone(),
      normal: planeNormal
    };
  }

  calculateSpawnPosition(segment) {
    // Spawn in center of the platform
    const spawnPos = segment.center.clone();
    spawnPos.y += this.TRACK_THICKNESS + 1.1; // Platform height + ball radius + clearance
    return spawnPos;
  }

  generateRainbowColors() {
    const colors = [];
    for (let i = 0; i < this.segments.length; i++) {
      const hue = (i / this.segments.length) * 0.65; // 0 to 0.65 for nice rainbow
      const color = new THREE.Color();
      color.setHSL(hue, 1.0, 0.5);
      colors.push(color);
    }
    return colors;
  }

  getOrientation(yaw, pitch, roll) {
    const qBase = new THREE.Quaternion().setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'));
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(qBase).normalize();
    const qRoll = new THREE.Quaternion().setFromAxisAngle(forward, roll);
    return qBase.multiply(qRoll);
  }

  getOrCreateGeometry(key, createFn) {
    if (!this.geometryCache.has(key)) {
      this.geometryCache.set(key, createFn());
      console.log(`📦 Cached geometry: ${key}`);
      if (this.cacheStats) this.cacheStats.misses++;
    } else {
      if (this.cacheStats) this.cacheStats.hits++;
    }
    return this.geometryCache.get(key);
  }
  
  getOrCreateMaterial(key, createFn) {
    if (!this.materialCache.has(key)) {
      this.materialCache.set(key, createFn());
      console.log(`🎨 Cached material: ${key}`);
    }
    return this.materialCache.get(key);
  }
  
  logPerformanceImprovement() {
    const meshReduction = this.performanceStats.meshCountBefore - this.performanceStats.meshCountAfter;
    const meshReductionPercent = this.performanceStats.meshCountBefore > 0 
      ? ((meshReduction / this.performanceStats.meshCountBefore) * 100).toFixed(1)
      : '0';
    
    console.log(`\n🚀 PERFORMANCE OPTIMIZATION RESULTS:`);
    console.log(`📊 Mesh count: ${this.performanceStats.meshCountBefore} → ${this.performanceStats.meshCountAfter} (${meshReductionPercent}% reduction)`);
    console.log(`🧱 Wall instances: ${this.wallInstanceCount} walls in 1 draw call`);
    console.log(`📦 Geometry cache: ${this.geometryCache.size} cached geometries (${this.cacheStats.hits} hits, ${this.cacheStats.misses} misses)`);
    console.log(`🎨 Material cache: ${this.materialCache.size} cached materials`);
    
    // Memory stats if available
    if (this.performanceStats.memoryBefore && this.performanceStats.memoryAfter) {
      const memoryDiff = this.performanceStats.memoryAfter - this.performanceStats.memoryBefore;
      const memoryMB = (memoryDiff / 1024 / 1024).toFixed(2);
      console.log(`💾 Memory usage: +${memoryMB} MB`);
    }
    
    console.log(`✨ Using vertex colors for rainbow effect (single material)`);
    console.log(`🏗️ Merged box segments in chunks of 20 for better performance\n`);
  }
  
  clearTrack() {
    // Remove meshes
    this.trackMeshes.forEach(mesh => {
      this.scene.remove(mesh);
      if (mesh.geometry && !this.geometryCache.has(mesh.geometry)) {
        mesh.geometry.dispose();
      }
      if (mesh.material && mesh.material !== this.sharedTrackMaterial && mesh.material !== this.sharedWallMaterial) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(mat => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    });
    this.trackMeshes = [];
    
    // Remove physics bodies
    this.trackBodies.forEach(body => {
      this.physicsWorld.removeBody(body);
    });
    this.trackBodies = [];
    
    // Clear segments
    this.segments = [];
    
    // Reset instanced walls
    this.instancedWalls = null;
    this.wallInstanceCount = 0;
  }

  dispose() {
    this.clearTrack();
    
    // Dispose textures
    if (this.checkeredTexture) this.checkeredTexture.dispose();
    if (this.trackTexture) this.trackTexture.dispose();
    
    // Dispose shared materials
    if (this.sharedTrackMaterial) this.sharedTrackMaterial.dispose();
    if (this.sharedWallMaterial) this.sharedWallMaterial.dispose();
    
    // Dispose cached geometries
    this.geometryCache.forEach(geometry => geometry.dispose());
    this.geometryCache.clear();
    
    // Dispose cached materials
    this.materialCache.forEach(material => material.dispose());
    this.materialCache.clear();
    
    // Dispose shader manager
    if (this.shaderManager) {
      this.shaderManager.cleanup();
    }
    
    console.log('🧹 Disposed TrackBuilder resources');
  }

  /**
   * Set the shader for the track
   * @param {string} shaderName - Name of the shader to use
   */
  async setShader(shaderName) {
    this.currentShader = shaderName;
    console.log(`Track shader set to: ${shaderName}`);
  }

  /**
   * Update shader uniforms (call this every frame)
   * @param {number} deltaTime - Time since last frame
   * @param {THREE.Camera} camera - Current camera
   * @param {THREE.Vector2} resolution - Screen resolution
   */
  updateShaderUniforms(deltaTime, camera, resolution) {
    if (this.shaderManager) {
      this.shaderManager.updateUniforms(deltaTime, camera, resolution);
    }
    
    // Update simple animations for powerups and boost pads
    const currentTime = performance.now() * 0.001; // Convert to seconds
    this.trackMeshes.forEach(object => {
      // Animate powerups (floating and rotation)
      if (object.userData.isAnimatedPowerup) {
        // Store original Y position if not stored
        if (!object.userData.originalY) {
          object.userData.originalY = object.position.y;
        }
        // Float gently around original position
        object.position.y = object.userData.originalY + Math.sin(currentTime * 3.0) * 0.3;
        object.rotation.y = currentTime * 2.0; // Rotate around Y axis
      }
      
      // Animate boost pads (pulsing effects)
      if (object.userData.isBoostPad) {
        const pulse = Math.sin(currentTime * 4.0) * 0.3 + 0.7;
        const fastPulse = Math.sin(currentTime * 8.0) * 0.2 + 0.8;
        
        // Pulse the glowing surface (child 1)
        if (object.children[1]) {
          object.children[1].material.opacity = pulse * 0.9;
        }
        
        // Pulse the side strips (children 5 and 6)
        if (object.children[5]) {
          object.children[5].material.opacity = fastPulse * 0.7;
        }
        if (object.children[6]) {
          object.children[6].material.opacity = fastPulse * 0.7;
        }
        
        // Make chevron arrows pulse brighter
        for (let i = 2; i <= 4; i++) {
          if (object.children[i]) {
            const brightness = pulse + 0.3;
            object.children[i].material.color.setRGB(brightness, brightness, brightness);
          }
        }
      }
    });
  }

  /**
   * Apply the current shader to merged track geometry
   * @param {THREE.BufferGeometry} mergedGeometry - The merged track geometry
   * @returns {Promise<THREE.Mesh>}
   */
  async applyTrackShader(mergedGeometry) {
    try {
      if (this.currentShader && this.currentShader !== 'rainbow-flow') {
        // Use custom shader
        console.log(`Applying custom shader: ${this.currentShader}`);
        return await this.shaderManager.applyShader(this.currentShader, mergedGeometry);
      } else {
        // Use default material with vertex colors (rainbow-flow)
        console.log('Using default rainbow-flow material');
        return new THREE.Mesh(mergedGeometry, this.sharedMaterial);
      }
    } catch (error) {
      console.error('Failed to apply shader, using fallback:', error);
      // Fallback to default material
      return new THREE.Mesh(mergedGeometry, this.sharedMaterial);
    }
  }

  /**
   * Get available shaders for level selection
   * @returns {Array<Object>}
   */
  getAvailableShaders() {
    return [
      { name: 'rainbow-flow', description: 'Classic rainbow track', performance: 'good' },
      { name: 'tech-grid', description: 'Futuristic grid pattern', performance: 'good' },
      { name: 'energy-pulse', description: 'Pulsating energy effects', performance: 'medium' },
      { name: 'crystal-surface', description: 'Crystalline ice surface', performance: 'medium' },
      { name: 'lava-flow', description: 'Molten lava surface', performance: 'medium' },
      { name: 'matrix-rain', description: 'Digital rain effect', performance: 'good' }
    ];
  }

  /**
   * Preload shaders for better performance
   * @param {Array<string>} shaderNames - Array of shader names to preload
   */
  async preloadShaders(shaderNames) {
    if (this.shaderManager) {
      await this.shaderManager.preloadShaders(shaderNames);
    }
  }
}