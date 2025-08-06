# Velocity Sphere - Complete Technical Documentation & Source Code

## Overview

This document contains everything needed to recreate Velocity Sphere, a procedural 3D racing game. The game features a sophisticated track generation system that builds racing tracks from simple segment definitions, combined with realistic physics and optimized rendering.

## Core Architecture

The game consists of several key systems:
1. **Track Builder**: Procedural track generation from segment definitions
2. **Physics System**: Ball physics with Cannon.js integration
3. **Input System**: Keyboard and mobile controls
4. **Rendering Pipeline**: Optimized Three.js rendering with shaders
5. **Game Loop**: Core update cycle managing all systems

## Complete TrackBuilder.js - The Heart of the Game

```javascript
/**
 * TrackBuilder - Builds 3D racing tracks from segment data
 * This is the core of the procedural generation system
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class TrackBuilder {
  constructor(physicsWorld, scene) {
    this.physicsWorld = physicsWorld;
    this.scene = scene;
    
    // Track collections
    this.trackMeshes = [];
    this.trackBodies = [];
    this.segments = [];
    
    // Track constants - these define the scale of the world
    this.SEGMENT_LENGTH = 6;      // Each track piece is 6 units long
    this.TRACK_THICKNESS = 0.6;   // Track is 0.6 units thick
    this.DEFAULT_WIDTH = 10;      // Standard track width
    this.WALL_HEIGHT = 2.0;       // Side barriers
    this.WALL_THICKNESS = 0.4;
    
    // Optimization: Geometry and material caching
    this.geometryCache = new Map();
    this.sharedMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,  // Use vertex colors for rainbow effect
      roughness: 0.8,
      metalness: 0.1
    });
    this.wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.1
    });
    
    // Performance tracking
    this.performanceStats = {
      meshCountBefore: 0,
      meshCountAfter: 0,
      geometryCacheHits: 0
    };
    
    // Instanced mesh pools for walls
    this.instancedWalls = null;
    this.wallInstanceCount = 0;
    
    // Physics materials
    this.materials = {
      track: this.physicsWorld.getMaterial('track')
    };
    
    this.createTextures();
  }

  createTextures() {
    // Checkered texture for start/finish lines
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
    
    this.checkeredTexture = new THREE.CanvasTexture(canvas);
    this.checkeredTexture.wrapS = THREE.RepeatWrapping;
    this.checkeredTexture.wrapT = THREE.RepeatWrapping;
    
    // Track surface texture
    const trackCanvas = document.createElement('canvas');
    trackCanvas.width = 256;
    trackCanvas.height = 256;
    const trackCtx = trackCanvas.getContext('2d');
    
    // Asphalt-like texture
    trackCtx.fillStyle = '#2a2a2a';
    trackCtx.fillRect(0, 0, 256, 256);
    
    // Add noise
    const imageData = trackCtx.getImageData(0, 0, 256, 256);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 30;
      data[i] += noise;
      data[i + 1] += noise;
      data[i + 2] += noise;
    }
    trackCtx.putImageData(imageData, 0, 0);
    
    this.trackTexture = new THREE.CanvasTexture(trackCanvas);
    this.trackTexture.wrapS = THREE.RepeatWrapping;
    this.trackTexture.wrapT = THREE.RepeatWrapping;
    this.trackTexture.repeat.set(4, 4);
  }

  /**
   * Main entry point - builds track from level data
   */
  async buildTrack(levelData) {
    console.log('🏁 Building track from level data...');
    
    this.clearTrack();
    
    // Generate segments from level definition
    this.segments = this.generateSegments(levelData);
    
    // Build optimized track meshes and physics
    const trackData = await this.buildOptimizedTrackMeshes();
    
    console.log(`✅ Track built with ${this.segments.length} segments`);
    
    return trackData;
  }

  /**
   * Convert level definition to track segments
   * This is where the magic happens - simple definitions become 3D tracks
   */
  generateSegments(levelData) {
    const segments = [];
    let position = new THREE.Vector3(0, 5, 0);  // Start 5 units up
    let yaw = 0;     // Horizontal rotation
    let pitch = 0;   // Vertical rotation (hills/drops)
    let roll = 0;    // Banking angle
    
    // The addSegment function is passed to level definitions
    const addSegment = (opts = {}) => {
      // Handle special positioning (for loops, etc)
      if (opts.customPosition) {
        const orientation = opts.customOrientation || 
          this.getOrientation(yaw, pitch, roll);
        segments.push({
          center: opts.customPosition.clone(),
          orientation: orientation.clone(),
          lanes: opts.lanes || [{ offset: 0, width: this.DEFAULT_WIDTH }],
          ...opts
        });
        
        if (opts.nextPosition) position.copy(opts.nextPosition);
        if (opts.setYaw !== undefined) yaw = opts.setYaw;
        if (opts.setPitch !== undefined) pitch = opts.setPitch;
        if (opts.setRoll !== undefined) roll = opts.setRoll;
        return;
      }
      
      // Standard segment generation
      const orientation = this.getOrientation(yaw, pitch, roll);
      const forward = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(orientation);
      const nextPos = position.clone()
        .add(forward.multiplyScalar(this.SEGMENT_LENGTH));
      const center = position.clone().add(nextPos).multiplyScalar(0.5);
      
      segments.push({
        center,
        orientation: orientation.clone(),
        lanes: opts.lanes || [{ offset: 0, width: this.DEFAULT_WIDTH }],
        type: opts.type || 'box',
        isGap: opts.isGap || false,
        isStartLine: opts.isStartLine || false,
        isFinishLine: opts.isFinishLine || false,
        isBouncePad: opts.isBouncePad || false,
        isBoost: opts.isBoost || false,
        isBoostPowerup: opts.isBoostPowerup || false
      });
      
      // Update position and angles for next segment
      yaw += opts.yawDelta || 0;
      pitch += opts.pitchDelta || 0;
      roll += opts.rollDelta || 0;
      position.copy(nextPos);
    };
    
    // Special function for creating loops
    const addLoop = (radius, rampLength = 15) => {
      console.log('Building Hot Wheels style loop');
      
      const startPos = position.clone();
      const laneOffset = this.DEFAULT_WIDTH * 0.6;
      const loopCenterZ = startPos.z + radius * 1.5;
      const loopCenterY = startPos.y + radius;
      const loopCenter = new THREE.Vector3(startPos.x, loopCenterY, loopCenterZ);
      
      // Entry ramp - curves right and up
      const entrySegments = 5;
      for (let i = 0; i < entrySegments; i++) {
        const t = (i + 1) / entrySegments;
        const easedT = t * t * (3 - 2 * t);
        
        const lateralOffset = laneOffset * Math.sin(Math.PI * 0.15 * easedT);
        const forwardProgress = rampLength * t;
        const heightProgress = radius * 0.3 * easedT;
        
        addSegment({
          customPosition: new THREE.Vector3(
            startPos.x + lateralOffset,
            startPos.y + heightProgress,
            startPos.z + forwardProgress
          ),
          setPitch: pitch + Math.PI * 0.25 * easedT
        });
      }
      
      // Loop arc
      const arcSegments = 20;
      for (let i = 0; i <= arcSegments; i++) {
        const t = i / arcSegments;
        const angle = Math.PI * 1.25 - Math.PI * 1.5 * t;
        
        const x = loopCenter.x + laneOffset * (1 - t * 2);
        const y = loopCenter.y - radius * Math.cos(angle);
        const z = loopCenter.z - radius * Math.sin(angle);
        
        addSegment({
          customPosition: new THREE.Vector3(x, y, z),
          setPitch: angle - Math.PI/2
        });
      }
      
      // Exit ramp continues similarly...
    };

    // Execute the level's track generation function
    levelData.generateTrack(addSegment, addLoop);
    
    return segments;
  }

  /**
   * Convert Euler angles to quaternion orientation
   * This allows smooth rotations and banking
   */
  getOrientation(yaw, pitch, roll) {
    const qBase = new THREE.Quaternion()
      .setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'));
    const forward = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(qBase).normalize();
    const qRoll = new THREE.Quaternion()
      .setFromAxisAngle(forward, roll);
    return qBase.multiply(qRoll);
  }

  /**
   * Build optimized 3D meshes from segments
   * Uses geometry merging and instancing for performance
   */
  async buildOptimizedTrackMeshes() {
    const rainbowColors = this.generateRainbowColors();
    let startPlane = null;
    let finishPlane = null;
    let startPosition = new THREE.Vector3(0, 5, 0);
    let minY = Infinity, maxY = -Infinity;
    
    // Separate segments by type for optimization
    const boxSegments = [];
    const wallData = [];
    
    this.segments.forEach((segment, index) => {
      // Track bounds
      minY = Math.min(minY, segment.center.y);
      maxY = Math.max(maxY, segment.center.y);
      
      const baseColor = rainbowColors[index % rainbowColors.length];
      
      // Process each lane
      segment.lanes.forEach(lane => {
        if (segment.isGap) return;  // Skip gaps
        
        boxSegments.push({ segment, lane, baseColor, index });
        
        // Collect wall data for instanced rendering
        if (segment.lanes.length === 1) {
          const right = new THREE.Vector3(1, 0, 0)
            .applyQuaternion(segment.orientation);
          const lanePos = segment.center.clone()
            .add(right.multiplyScalar(lane.offset));
          
          // Left wall
          const leftWallPos = lanePos.clone()
            .add(right.multiplyScalar(-(lane.width/2 + this.WALL_THICKNESS/2)));
          leftWallPos.y += this.WALL_HEIGHT/2 + this.TRACK_THICKNESS/2;
          
          // Right wall
          const rightWallPos = lanePos.clone()
            .add(right.multiplyScalar(lane.width/2 + this.WALL_THICKNESS/2));
          rightWallPos.y += this.WALL_HEIGHT/2 + this.TRACK_THICKNESS/2;
          
          wallData.push(
            { position: leftWallPos, orientation: segment.orientation },
            { position: rightWallPos, orientation: segment.orientation }
          );
        }
      });
      
      // Special elements
      if (segment.isStartLine) {
        startPlane = this.buildStartFinishLine(segment, true);
        startPosition = this.calculateSpawnPosition(segment);
      }
      
      if (segment.isFinishLine) {
        finishPlane = this.buildStartFinishLine(segment, false);
      }
      
      if (segment.isBoostPowerup) {
        this.buildBoostPowerup(segment);
      }
      
      if (segment.isBoost) {
        this.buildBoostSection(segment);
      }
    });
    
    // Build merged geometry for performance
    await this.buildMergedBoxSegments(boxSegments);
    this.buildInstancedWalls(wallData);
    
    return {
      startPlane,
      finishPlane,
      startPosition,
      checkpoints: [],
      bounds: { minY, maxY }
    };
  }

  /**
   * Merge track segments into single mesh for performance
   * Reduces draw calls from 100s to <10
   */
  async buildMergedBoxSegments(boxSegments) {
    const chunkSize = 20;  // Process in chunks
    
    for (let i = 0; i < boxSegments.length; i += chunkSize) {
      const chunk = boxSegments.slice(i, i + chunkSize);
      const geometries = [];
      
      chunk.forEach(({ segment, lane, baseColor }) => {
        const right = new THREE.Vector3(1, 0, 0)
          .applyQuaternion(segment.orientation);
        const lanePosition = segment.center.clone()
          .add(right.multiplyScalar(lane.offset));
        
        // Get cached geometry
        const geometry = this.getCachedGeometry('box', lane.width).clone();
        
        // Transform geometry
        const matrix = new THREE.Matrix4();
        matrix.compose(lanePosition, segment.orientation, 
          new THREE.Vector3(1, 1, 1));
        geometry.applyMatrix4(matrix);
        
        // Add vertex colors
        const positionCount = geometry.attributes.position.count;
        const colors = new Float32Array(positionCount * 3);
        for (let i = 0; i < positionCount; i++) {
          colors[i * 3] = baseColor.r;
          colors[i * 3 + 1] = baseColor.g;
          colors[i * 3 + 2] = baseColor.b;
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        geometries.push(geometry);
        
        // Create physics body
        const shape = new CANNON.Box(new CANNON.Vec3(
          lane.width/2, this.TRACK_THICKNESS/2, this.SEGMENT_LENGTH/2));
        const body = new CANNON.Body({ 
          mass: 0, 
          material: this.materials.track 
        });
        body.addShape(shape);
        body.position.copy(lanePosition);
        body.quaternion.copy(segment.orientation);
        
        this.physicsWorld.addBody(body);
        this.trackBodies.push(body);
      });
      
      // Merge geometries
      if (geometries.length > 0) {
        const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
        const mergedMesh = new THREE.Mesh(mergedGeometry, this.sharedMaterial);
        mergedMesh.castShadow = true;
        mergedMesh.receiveShadow = true;
        
        this.scene.add(mergedMesh);
        this.trackMeshes.push(mergedMesh);
      }
    }
  }

  /**
   * Build all walls as instanced mesh - massive performance win
   */
  buildInstancedWalls(wallData) {
    if (wallData.length === 0) return;
    
    const wallGeometry = this.getCachedGeometry('wall');
    
    // Create instanced mesh
    this.instancedWalls = new THREE.InstancedMesh(
      wallGeometry,
      this.wallMaterial,
      wallData.length
    );
    
    // Set instance matrices
    wallData.forEach((wall, index) => {
      const matrix = new THREE.Matrix4();
      matrix.compose(wall.position, wall.orientation, 
        new THREE.Vector3(1, 1, 1));
      this.instancedWalls.setMatrixAt(index, matrix);
      
      // Physics body for each wall
      const wallShape = new CANNON.Box(new CANNON.Vec3(
        this.WALL_THICKNESS/2, this.WALL_HEIGHT/2, this.SEGMENT_LENGTH/2));
      const wallBody = new CANNON.Body({ 
        mass: 0, 
        material: this.materials.track 
      });
      wallBody.addShape(wallShape);
      wallBody.position.copy(wall.position);
      wallBody.quaternion.copy(wall.orientation);
      this.physicsWorld.addBody(wallBody);
      this.trackBodies.push(wallBody);
    });
    
    this.instancedWalls.instanceMatrix.needsUpdate = true;
    this.scene.add(this.instancedWalls);
    this.trackMeshes.push(this.instancedWalls);
  }

  /**
   * Build boost powerup - glowing orb that resets boost cooldown
   */
  buildBoostPowerup(segment) {
    segment.lanes.forEach(lane => {
      const right = new THREE.Vector3(1, 0, 0)
        .applyQuaternion(segment.orientation);
      const lanePosition = segment.center.clone()
        .add(right.multiplyScalar(lane.offset));
      
      // Visual: glowing orb
      const orbGeometry = new THREE.SphereGeometry(1.8, 8, 6);
      const orbMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00  // Bright yellow
      });
      
      const orbGroup = new THREE.Group();
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orbGroup.add(orb);
      
      // Glowing ring for visibility
      const ringGeometry = new THREE.RingGeometry(2.2, 2.8, 8);
      const ringMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotateX(-Math.PI / 2);
      orbGroup.add(ring);
      
      orbGroup.userData.isAnimatedPowerup = true;
      orbGroup.position.copy(lanePosition);
      orbGroup.position.y += this.TRACK_THICKNESS / 2 + 3;
      
      this.scene.add(orbGroup);
      this.trackMeshes.push(orbGroup);
      
      // Physics trigger
      const powerupShape = new CANNON.Sphere(2);
      const powerupBody = new CANNON.Body({ 
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: powerupShape,
        isTrigger: true  // Non-colliding sensor
      });
      powerupBody.position.copy(orbGroup.position);
      powerupBody.userData = { 
        isBoostPowerup: true, 
        collected: false,
        meshes: [orbGroup]
      };
      
      this.physicsWorld.addBody(powerupBody);
      this.trackBodies.push(powerupBody);
    });
  }

  /**
   * Build speed boost section - classic racing game speed pads
   */
  buildBoostSection(segment) {
    segment.lanes.forEach(lane => {
      const right = new THREE.Vector3(1, 0, 0)
        .applyQuaternion(segment.orientation);
      const lanePosition = segment.center.clone()
        .add(right.multiplyScalar(lane.offset));
      
      const speedPadGroup = new THREE.Group();
      
      // Base pad
      const baseGeometry = new THREE.BoxGeometry(
        lane.width * 0.9, 0.3, this.SEGMENT_LENGTH * 0.8);
      const baseMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = 0.15;
      speedPadGroup.add(base);
      
      // Glowing surface
      const surfaceGeometry = new THREE.PlaneGeometry(
        lane.width * 0.8, this.SEGMENT_LENGTH * 0.7);
      const surfaceMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8
      });
      const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
      surface.position.y = 0.31;
      surface.rotateX(-Math.PI / 2);
      speedPadGroup.add(surface);
      
      // Arrow chevrons
      for (let i = 0; i < 3; i++) {
        const chevronGeometry = new THREE.ConeGeometry(0.4, 1.2, 3);
        const chevronMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffffff
        });
        const chevron = new THREE.Mesh(chevronGeometry, chevronMaterial);
        chevron.position.set(0, 0.4, (i - 1) * 1.5);
        chevron.rotateX(-Math.PI / 2);
        speedPadGroup.add(chevron);
      }
      
      speedPadGroup.userData.isBoostPad = true;
      speedPadGroup.position.copy(lanePosition);
      speedPadGroup.position.y += this.TRACK_THICKNESS / 2 + 0.1;
      speedPadGroup.quaternion.copy(segment.orientation);
      
      this.scene.add(speedPadGroup);
      this.trackMeshes.push(speedPadGroup);
      
      // Physics trigger
      const padShape = new CANNON.Box(new CANNON.Vec3(
        lane.width/2, 0.5, this.SEGMENT_LENGTH/2));
      const padBody = new CANNON.Body({ 
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: padShape,
        isTrigger: true
      });
      padBody.position.copy(lanePosition);
      padBody.position.y = lanePosition.y + this.TRACK_THICKNESS / 2 + 0.5;
      padBody.quaternion.copy(segment.orientation);
      padBody.userData = { isSpeedPad: true };
      
      this.physicsWorld.addBody(padBody);
      this.trackBodies.push(padBody);
    });
  }

  /**
   * Build start/finish line with checkered pattern
   */
  buildStartFinishLine(segment, isStart) {
    const geometry = new THREE.PlaneGeometry(this.DEFAULT_WIDTH, 2);
    const material = new THREE.MeshBasicMaterial({ 
      map: this.checkeredTexture, 
      side: THREE.DoubleSide,
      opacity: 0.8,
      transparent: true
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    const offset = isStart ? -this.SEGMENT_LENGTH/2 : this.SEGMENT_LENGTH/2;
    const forward = new THREE.Vector3(0, 0, offset)
      .applyQuaternion(segment.orientation);
    
    mesh.position.copy(segment.center).add(forward);
    mesh.quaternion.copy(segment.orientation);
    mesh.rotateX(Math.PI / 2);
    
    this.scene.add(mesh);
    this.trackMeshes.push(mesh);
    
    // Start platform
    if (isStart) {
      const platformGeometry = new THREE.BoxGeometry(
        this.DEFAULT_WIDTH + 6, this.TRACK_THICKNESS * 2, this.SEGMENT_LENGTH * 2);
      const platformMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x555555,
        metalness: 0.3,
        roughness: 0.7
      });
      
      const platformMesh = new THREE.Mesh(platformGeometry, platformMaterial);
      platformMesh.position.copy(segment.center);
      platformMesh.position.y -= this.TRACK_THICKNESS;
      platformMesh.quaternion.copy(segment.orientation);
      this.scene.add(platformMesh);
      this.trackMeshes.push(platformMesh);
      
      // Platform physics
      const platformShape = new CANNON.Box(new CANNON.Vec3(
        (this.DEFAULT_WIDTH + 6)/2, this.TRACK_THICKNESS, this.SEGMENT_LENGTH));
      const platformBody = new CANNON.Body({ 
        mass: 0, 
        material: this.materials.track 
      });
      platformBody.addShape(platformShape);
      platformBody.position.copy(platformMesh.position);
      platformBody.quaternion.copy(segment.orientation);
      this.physicsWorld.addBody(platformBody);
      this.trackBodies.push(platformBody);
    }
    
    // Finish line arch
    if (!isStart) {
      const pillarHeight = 15;
      const pillarWidth = 1.5;
      const trackWidth = this.DEFAULT_WIDTH + 4;
      
      // Pillars
      const pillarGeometry = new THREE.BoxGeometry(
        pillarWidth, pillarHeight, pillarWidth);
      const pillarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff
      });
      
      const right = new THREE.Vector3(1, 0, 0)
        .applyQuaternion(segment.orientation);
      
      // Left pillar
      const leftPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      leftPillar.position.copy(mesh.position)
        .add(right.clone().multiplyScalar(-trackWidth/2));
      leftPillar.position.y = mesh.position.y + pillarHeight/2;
      leftPillar.quaternion.copy(segment.orientation);
      this.scene.add(leftPillar);
      this.trackMeshes.push(leftPillar);
      
      // Right pillar
      const rightPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      rightPillar.position.copy(mesh.position)
        .add(right.clone().multiplyScalar(trackWidth/2));
      rightPillar.position.y = mesh.position.y + pillarHeight/2;
      rightPillar.quaternion.copy(segment.orientation);
      this.scene.add(rightPillar);
      this.trackMeshes.push(rightPillar);
      
      // Banner
      const bannerGeometry = new THREE.BoxGeometry(
        trackWidth + pillarWidth, 2, 0.5);
      const bannerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00
      });
      const banner = new THREE.Mesh(bannerGeometry, bannerMaterial);
      banner.position.copy(mesh.position);
      banner.position.y = mesh.position.y + pillarHeight;
      banner.quaternion.copy(segment.orientation);
      this.scene.add(banner);
      this.trackMeshes.push(banner);
    }
    
    const planeNormal = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(segment.orientation);
    
    return {
      position: mesh.position.clone(),
      normal: planeNormal
    };
  }

  calculateSpawnPosition(segment) {
    const spawnPos = segment.center.clone();
    spawnPos.y += this.TRACK_THICKNESS + 1.1;
    return spawnPos;
  }

  generateRainbowColors() {
    const colors = [];
    for (let i = 0; i < this.segments.length; i++) {
      const hue = (i / this.segments.length) * 0.65;
      const color = new THREE.Color();
      color.setHSL(hue, 1.0, 0.5);
      colors.push(color);
    }
    return colors;
  }

  getCachedGeometry(type, width = this.DEFAULT_WIDTH) {
    const key = `${type}_${width}`;
    if (!this.geometryCache.has(key)) {
      let geometry;
      switch (type) {
        case 'box':
          geometry = new THREE.BoxGeometry(
            width, this.TRACK_THICKNESS, this.SEGMENT_LENGTH);
          break;
        case 'wall':
          geometry = new THREE.BoxGeometry(
            this.WALL_THICKNESS, this.WALL_HEIGHT, this.SEGMENT_LENGTH);
          break;
      }
      this.geometryCache.set(key, geometry);
    }
    return this.geometryCache.get(key);
  }

  /**
   * Update animations
   */
  updateShaderUniforms(deltaTime, camera, resolution) {
    const currentTime = performance.now() * 0.001;
    
    this.trackMeshes.forEach(object => {
      // Animate powerups
      if (object.userData.isAnimatedPowerup) {
        if (!object.userData.originalY) {
          object.userData.originalY = object.position.y;
        }
        object.position.y = object.userData.originalY + 
          Math.sin(currentTime * 3.0) * 0.3;
        object.rotation.y = currentTime * 2.0;
      }
      
      // Animate boost pads
      if (object.userData.isBoostPad) {
        const pulse = Math.sin(currentTime * 4.0) * 0.3 + 0.7;
        if (object.children[1]) {
          object.children[1].material.opacity = pulse * 0.9;
        }
      }
    });
  }

  clearTrack() {
    // Remove meshes
    this.trackMeshes.forEach(mesh => {
      this.scene.remove(mesh);
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) {
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
    
    this.segments = [];
    this.instancedWalls = null;
    this.wallInstanceCount = 0;
  }

  dispose() {
    this.clearTrack();
    if (this.checkeredTexture) this.checkeredTexture.dispose();
    if (this.trackTexture) this.trackTexture.dispose();
    this.geometryCache.forEach(geo => geo.dispose());
    this.geometryCache.clear();
  }
}
```

## Ball Physics System - Ball.js

```javascript
/**
 * Ball - The racing sphere with physics and controls
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Ball {
  constructor(physicsWorld, scene) {
    this.physicsWorld = physicsWorld;
    this.scene = scene;
    
    // Physics properties
    this.body = null;
    this.radius = 1.0;
    this.mass = 5;
    
    // Visual properties
    this.mesh = null;
    this.material = null;
    
    // Gameplay properties
    this.spawnPosition = new CANNON.Vec3(0, 5, 0);
    this.isGroundedFlag = false;
    this.lastJumpTime = 0;
    this.currentLevel = 1;
    this.trackMinY = -200; // Will be set by track
    
    // Boost properties
    this.lastBoostTime = 0;
    this.isBoostActive = false;
    this.boostDuration = 3; // seconds
    this.boostStartTime = 0;
    
    // Callbacks
    this.onFallOff = null;
    
    // Constants - these define the feel of the game
    this.JUMP_VELOCITY = 8;       // Jump power
    this.JUMP_COOLDOWN = 0.3;     // Time between jumps
    this.ACCELERATION = 30;       // Base acceleration
    this.MAX_SPEED = 999;         // No limit
    this.BOOST_COOLDOWN = 8;      // Boost cooldown
    this.BOOST_MULTIPLIER = 4.0;  // Speed multiplier
    this.BOOST_ACCELERATION = 80; // Boost acceleration
  }

  init() {
    this.createPhysicsBody();
    this.createVisualMesh();
    this.setupContactListeners();
  }

  createPhysicsBody() {
    const shape = new CANNON.Sphere(this.radius);
    this.body = new CANNON.Body({ 
      mass: this.mass,
      material: this.physicsWorld.getMaterial('ball')
    });
    
    this.body.addShape(shape);
    this.body.position.copy(this.spawnPosition);
    this.body.linearDamping = 0.1; // Low damping for momentum
    
    this.physicsWorld.addBody(this.body);
  }

  createVisualMesh() {
    const geometry = new THREE.SphereGeometry(this.radius, 64, 64);
    
    // Holographic shader for cool visual effect
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
    
    const fragmentShader = `
      uniform float time;
      uniform vec3 color;
      uniform float speed;
      uniform bool isBoost;
      
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      
      void main() {
        // Fresnel effect for rim lighting
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = 1.0 - dot(viewDir, vNormal);
        fresnel = pow(fresnel, 2.0);
        
        // Animated energy lines
        float lines = sin(vWorldPosition.y * 20.0 + time * 3.0) * 0.5 + 0.5;
        lines *= sin(vWorldPosition.x * 15.0 - time * 2.0) * 0.5 + 0.5;
        lines = pow(lines, 3.0);
        
        // Speed-based color
        vec3 baseColor = color;
        if (isBoost) {
          baseColor = vec3(0.0, 1.0, 1.0); // Cyan boost
        } else {
          baseColor = mix(vec3(0.4, 0.6, 1.0), vec3(1.0, 0.3, 0.3), 
            clamp(speed / 100.0, 0.0, 1.0));
        }
        
        // Holographic effect
        vec3 holoColor = baseColor * (0.5 + 0.5 * sin(time * 2.0));
        
        // Combine effects
        vec3 finalColor = mix(baseColor * 0.3, holoColor, fresnel);
        finalColor += lines * baseColor * 0.5;
        finalColor += pow(fresnel, 3.0) * vec3(1.0) * 0.5;
        
        // Rim lighting
        float rim = pow(fresnel, 4.0);
        finalColor += rim * baseColor * 2.0;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x4488ff) },
        speed: { value: 0 },
        isBoost: { value: false }
      }
    });
    
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    
    // Store velocity for camera
    this.mesh.userData.velocity = new THREE.Vector3();
    
    this.scene.add(this.mesh);
  }

  setupContactListeners() {
    // Listen for collisions with special elements
    this.body.addEventListener('collide', (event) => {
      const contactBody = event.body;
      if (!contactBody.userData) return;
      
      // Bounce pad - vertical boost
      if (contactBody.userData.isBouncePad) {
        const bounceForce = 25;
        this.body.velocity.y = Math.max(this.body.velocity.y, bounceForce);
        console.log('Hit bounce pad!');
      }
      
      // Speed pad - forward boost
      else if (contactBody.userData.isSpeedPad) {
        const currentVel = new CANNON.Vec3(
          this.body.velocity.x,
          this.body.velocity.y,
          this.body.velocity.z
        );
        const speed = currentVel.length();
        
        if (speed > 0.1) {
          currentVel.normalize();
          const boostedSpeed = Math.max(speed * 1.5, 40);
          currentVel.scale(boostedSpeed, currentVel);
          this.body.velocity.set(
            currentVel.x,
            currentVel.y,
            currentVel.z
          );
        } else {
          this.body.velocity.z += 40;
        }
        console.log('Hit speed pad!');
      }
      
      // Boost powerup - reset cooldown
      else if (contactBody.userData.isBoostPowerup && 
               !contactBody.userData.collected) {
        contactBody.userData.collected = true;
        
        // Hide powerup
        if (contactBody.userData.meshes) {
          contactBody.userData.meshes.forEach(mesh => {
            mesh.visible = false;
          });
        }
        
        // Reset boost cooldown
        this.lastBoostTime = 0;
        
        // Free boost if not active
        if (!this.isBoostActive) {
          this.startBoost();
        }
        
        console.log('Collected boost powerup!');
      }
    });
  }

  /**
   * Ground detection using raycast
   */
  isGrounded() {
    const from = new CANNON.Vec3(
      this.body.position.x, 
      this.body.position.y, 
      this.body.position.z
    );
    const to = new CANNON.Vec3(
      this.body.position.x, 
      this.body.position.y - (this.radius + 1.2), 
      this.body.position.z
    );
    const rayResult = new CANNON.RaycastResult();
    
    this.physicsWorld.world.raycastClosest(from, to, {}, rayResult);
    
    // Check for valid ground hit
    const hasValidHit = rayResult.hasHit && 
                       rayResult.body && 
                       rayResult.body.mass === 0 &&
                       rayResult.distance <= (this.radius + 1.0);
    
    // Also check low vertical velocity
    const hasLowVerticalVelocity = Math.abs(this.body.velocity.y) < 2.0;
    
    this.isGroundedFlag = hasValidHit || 
      (hasLowVerticalVelocity && rayResult.hasHit && 
       rayResult.distance <= (this.radius + 0.8));
    
    return this.isGroundedFlag;
  }

  update() {
    // Sync visual with physics
    this.mesh.position.copy(this.body.position);
    this.mesh.quaternion.copy(this.body.quaternion);
    
    // Update velocity for camera
    this.mesh.userData.velocity.set(
      this.body.velocity.x,
      this.body.velocity.y,
      this.body.velocity.z
    );
    
    // Update shader
    if (this.material.uniforms) {
      this.material.uniforms.time.value = performance.now() * 0.001;
      this.material.uniforms.speed.value = this.getSpeed();
      this.material.uniforms.isBoost.value = this.isBoostActive;
    }
    
    // Check boost duration
    const nowSec = performance.now() / 1000;
    if (this.isBoostActive && 
        (nowSec - this.boostStartTime > this.boostDuration)) {
      this.endBoost();
    }
    
    // Check if fallen off track
    const fallThreshold = this.trackMinY - 50;
    if (this.body.position.y < fallThreshold) {
      console.log('Ball fell off track!');
      this.reset();
      if (this.onFallOff) {
        this.onFallOff();
      }
    }
  }

  setPosition(position) {
    this.spawnPosition.copy(position);
    this.body.position.copy(position);
    this.body.velocity.set(0, 0, 0);
    this.body.angularVelocity.set(0, 0, 0);
    this.mesh.position.copy(position);
  }
  
  setTrackBounds(minY) {
    this.trackMinY = minY;
    console.log(`Track bounds set - fall threshold: ${minY - 50}`);
  }

  reset() {
    console.log('Ball reset to spawn position');
    this.setPosition(this.spawnPosition);
    this.lastBoostTime = 0;
    this.isBoostActive = false;
    this.endBoost();
  }

  getPosition() {
    return this.body.position.clone();
  }

  getSpeed() {
    return this.body.velocity.length();
  }
  
  startBoost() {
    const nowSec = performance.now() / 1000;
    if (!this.isBoostActive && 
        (nowSec - this.lastBoostTime > this.BOOST_COOLDOWN)) {
      this.isBoostActive = true;
      this.boostStartTime = nowSec;
      this.lastBoostTime = nowSec;
      
      // Apply immediate speed boost
      const currentVelocity = new CANNON.Vec3(
        this.body.velocity.x,
        this.body.velocity.y,
        this.body.velocity.z
      );
      const speed = currentVelocity.length();
      
      if (speed > 0.1) {
        currentVelocity.normalize();
        currentVelocity.scale(speed * this.BOOST_MULTIPLIER, currentVelocity);
        this.body.velocity.set(
          currentVelocity.x,
          currentVelocity.y,
          currentVelocity.z
        );
      } else {
        // Stationary boost
        this.body.velocity.set(0, 0, 50);
      }
      
      console.log('Boost activated!');
      return true;
    }
    return false;
  }
  
  endBoost() {
    this.isBoostActive = false;
    console.log('Boost ended');
  }
  
  getBoostCooldownRemaining() {
    const nowSec = performance.now() / 1000;
    const timeSinceBoost = nowSec - this.lastBoostTime;
    return Math.max(0, this.BOOST_COOLDOWN - timeSinceBoost);
  }

  dispose() {
    if (this.body) {
      this.physicsWorld.removeBody(this.body);
    }
    
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.material.dispose();
    }
  }
}
```

## Physics World System - PhysicsWorld.js

```javascript
/**
 * PhysicsWorld - Cannon.js physics world setup
 */

import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  constructor() {
    this.world = null;
    this.materials = new Map();
    this.init();
  }

  init() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0); // Earth gravity
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 5; // Balance performance/stability
    this.world.defaultContactMaterial.friction = 0.3;
    
    // Cannon.js settings for stable physics
    this.world.solver.tolerance = 0.1;
    this.world.quatNormalizeSkip = 0;
    this.world.quatNormalizeFast = false;
    
    this.setupMaterials();
  }

  setupMaterials() {
    // Track material
    const trackMaterial = new CANNON.Material('trackMaterial');
    this.materials.set('track', trackMaterial);
    
    // Ball material
    const ballMaterial = new CANNON.Material('ballMaterial');
    this.materials.set('ball', ballMaterial);
    
    // Ball-track interaction
    const trackBallContact = new CANNON.ContactMaterial(
      trackMaterial, 
      ballMaterial, 
      {
        friction: 0.3,     // Some grip
        restitution: 0.0   // No bounce
      }
    );
    this.world.addContactMaterial(trackBallContact);
  }

  getMaterial(name) {
    return this.materials.get(name);
  }

  step(deltaTime = 1/60) {
    // Fixed timestep for deterministic physics
    const fixedTimeStep = 1/60;
    const maxSubSteps = 3;
    this.world.step(fixedTimeStep, deltaTime, maxSubSteps);
  }

  addBody(body) {
    this.world.addBody(body);
  }

  removeBody(body) {
    this.world.removeBody(body);
  }

  dispose() {
    while (this.world.bodies.length > 0) {
      this.world.removeBody(this.world.bodies[0]);
    }
    this.materials.clear();
    this.world = null;
  }
}
```

## Input Manager System - InputManager.js

```javascript
/**
 * InputManager - Handles keyboard and mobile controls
 */

export class InputManager {
  constructor() {
    this.state = {
      left: false,
      right: false,
      up: false,
      down: false,
      jumpRequested: false,
      boostRequested: false
    };
    
    this.listeners = new Map();
    this.joystick = null;
    this.isMobile = this.detectMobile();
    
    this.init();
  }
  
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent) || 
      (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
      ('ontouchstart' in window);
  }

  init() {
    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
      
      // Prevent default for game keys
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        .includes(e.code)) {
        e.preventDefault();
      }
    });
    
    window.addEventListener('keyup', (e) => {
      this.handleKeyUp(e);
    });
  }
  
  initMobileControls() {
    if (!this.isMobile) return;
    
    const mobileControls = document.getElementById('mobileControls');
    if (mobileControls) {
      mobileControls.classList.remove('hidden');
      mobileControls.classList.add('show');
    }
    
    // Initialize joystick with nipplejs
    const joystickZone = document.getElementById('joystickZone');
    if (joystickZone && window.nipplejs) {
      this.joystick = nipplejs.create({
        zone: joystickZone,
        mode: 'static',
        position: { left: '50%', top: '50%' },
        color: 'cyan',
        size: 120,
        restOpacity: 0.75,
        fadeTime: 250
      });
      
      this.joystick.on('move', (evt, data) => {
        const force = Math.min(data.force, 1);
        const angle = data.angle.radian;
        
        // Convert to directional states
        const threshold = 0.3;
        const x = Math.cos(angle) * force;
        const y = Math.sin(angle) * force;
        
        this.state.right = x > threshold;
        this.state.left = x < -threshold;
        this.state.up = y > threshold;
        this.state.down = y < -threshold;
      });
      
      this.joystick.on('end', () => {
        this.state.left = false;
        this.state.right = false;
        this.state.up = false;
        this.state.down = false;
      });
    }
    
    // Jump button
    const jumpButton = document.getElementById('jumpButton');
    if (jumpButton) {
      jumpButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.state.jumpRequested = true;
      });
    }
    
    // Boost button
    const boostButton = document.getElementById('boostButton');
    if (boostButton) {
      boostButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.state.boostRequested = true;
      });
    }
  }

  handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowLeft': 
      case 'KeyA': 
        this.state.left = true; 
        break;
      case 'ArrowRight': 
      case 'KeyD': 
        this.state.right = true; 
        break;
      case 'ArrowUp': 
      case 'KeyW': 
        this.state.up = true; 
        break;
      case 'ArrowDown': 
      case 'KeyS': 
        this.state.down = true; 
        break;
      case 'Space': 
        this.state.jumpRequested = true; 
        break;
      case 'ShiftLeft': 
      case 'ShiftRight': 
        this.state.boostRequested = true; 
        break;
      
      // Single-press actions
      case 'KeyR': 
        this.emit('restart'); 
        break;
      case 'Digit1': 
        this.emit('level', 1); 
        break;
      case 'Digit2': 
        this.emit('level', 2); 
        break;
      // ... more levels
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'ArrowLeft': 
      case 'KeyA': 
        this.state.left = false; 
        break;
      case 'ArrowRight': 
      case 'KeyD': 
        this.state.right = false; 
        break;
      case 'ArrowUp': 
      case 'KeyW': 
        this.state.up = false; 
        break;
      case 'ArrowDown': 
      case 'KeyS': 
        this.state.down = false; 
        break;
      // Note: jump/boost requests are consumed, not reset on keyup
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  emit(event, ...args) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(...args));
    }
  }

  dispose() {
    this.listeners.clear();
    if (this.joystick) {
      this.joystick.destroy();
      this.joystick = null;
    }
  }
}
```

## Track Generation System Explained

The track generation system is the core innovation of Velocity Sphere. It allows complex 3D tracks to be defined with simple parameters:

### Basic Track Segment
```javascript
addSegment({
  yawDelta: Math.PI / 40,    // Turn 4.5 degrees
  pitchDelta: Math.PI / 60,  // Climb 3 degrees
  rollDelta: Math.PI / 20    // Bank 9 degrees
});
```

### Track Features

1. **Straight Sections**
```javascript
for (let i = 0; i < 20; i++) {
  addSegment({ 
    isStartLine: (i === 0),
    isFinishLine: (i === 19)
  });
}
```

2. **Curves and Banking**
```javascript
// Banked turn
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: Math.PI / 40 }); // Bank in
}
for (let i = 0; i < 30; i++) {
  addSegment({ yawDelta: Math.PI / 30 }); // Turn
}
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: -Math.PI / 40 }); // Bank out
}
```

3. **Hills and Jumps**
```javascript
// Hill climb
for (let i = 0; i < 15; i++) {
  const phase = i < 7 ? 1 : -1;
  addSegment({ pitchDelta: phase * Math.PI / 60 });
}

// Jump with gap
for (let i = 0; i < 10; i++) {
  addSegment({ pitchDelta: Math.PI / 30 }); // Ramp up
}
for (let i = 0; i < 4; i++) {
  addSegment({ isGap: true }); // Gap
}
for (let i = 0; i < 10; i++) {
  addSegment({ pitchDelta: -Math.PI / 30 }); // Landing
}
```

4. **Multiple Lanes**
```javascript
// Split path
for (let i = 0; i < 30; i++) {
  addSegment({
    lanes: [
      { offset: -10, width: 7 },  // Left path
      { offset: 0, width: 8 },    // Center path
      { offset: 10, width: 7 }    // Right path
    ]
  });
}
```

5. **Special Elements**
```javascript
// Boost zones
addSegment({ isBoost: true });

// Power-ups
addSegment({ isBoostPowerup: true });

// Bounce pads
addSegment({ isBouncePad: true });
```

## Example Track Definitions

### Level 1 - Sunrise (Beginner)
```javascript
export default {
  name: "Sunrise",
  description: "Gentle curves for learning",
  difficulty: 1,
  
  generateTrack(addSegment) {
    // Starting straight
    for (let i = 0; i < 20; i++) {
      addSegment({ isStartLine: (i === 0) });
    }
    
    // Gentle left curve (45 degrees)
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: -Math.PI / 80 });
    }
    
    // Small hill with single boost pad at the base of climb
    for (let i = 0; i < 15; i++) {
      const phase = i < 7 ? 1 : -1;
      addSegment({ 
        pitchDelta: phase * Math.PI / 180,
        // Only one boost pad at start of climb, on right side (avoidable)
        lanes: (i === 0) ? [
          { offset: 3, width: 4, isBoost: true },
          { offset: -3, width: 4 }
        ] : [{ offset: 0, width: 10 }]
      });
    }
    
    // Gentle right curve
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: Math.PI / 80 });
    }
    
    // Finish
    for (let i = 0; i < 20; i++) {
      addSegment({ isFinishLine: (i === 19) });
    }
  }
};
```

### Level 2 - Neon Grid (Tech Theme)
```javascript
export default {
  name: "Neon Grid",
  description: "Navigate digital pathways",
  difficulty: 2,
  
  generateTrack(addSegment) {
    // Start
    for (let i = 0; i < 40; i++) {
      addSegment({ isStartLine: (i === 0) });
    }
    
    // Banked left turn
    const bankAngle = -Math.PI / 6;
    for (let i = 0; i < 30; i++) {
      let rollDelta = 0;
      if (i < 10) rollDelta = bankAngle / 10;
      else if (i > 20) rollDelta = -bankAngle / 10;
      
      addSegment({ 
        yawDelta: -Math.PI / 60,
        rollDelta 
      });
    }
    
    // Big jump with boost pad before it (center, half width)
    for (let i = 0; i < 10; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 60,
        // Single boost pad at base of ramp, center position
        lanes: (i === 0) ? [
          { offset: 0, width: 5, isBoost: true }
        ] : [{ offset: 0, width: 10 }]
      });
    }
    for (let i = 0; i < 4; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 10; i++) {
      addSegment({ pitchDelta: -Math.PI / 60 });
    }
    
    // Split lanes with boost powerup on ONE lane only
    for (let i = 0; i < 30; i++) {
      addSegment({
        lanes: [
          { offset: -6, width: 4 },  // Narrow left
          { offset: 6, width: 7 }    // Wide right
        ],
        // Single powerup at midpoint on right lane only
        isBoostPowerup: (i === 15 && Math.random() > 0.5)
      });
    }
    
    // Finish
    for (let i = 0; i < 30; i++) {
      addSegment({ isFinishLine: (i === 29) });
    }
  }
};
```

### Level 10 - Apex (Ultimate Challenge)
```javascript
export default {
  name: "Apex",
  description: "The pinnacle of racing mastery",
  difficulty: 5,
  
  generateTrack(addSegment) {
    // Opening
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Immediate split with different challenges
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 8 },
          { offset: 10 * factor, width: 8 }
        ]
      });
    }
    
    // Left: jumps, Right: turns
    for (let i = 0; i < 30; i++) {
      if (i % 10 < 4) {
        // Jump on left
        addSegment({
          lanes: [
            { offset: -10, width: 8 },
            { offset: 10, width: 8 }
          ],
          pitchDelta: Math.PI / 30
        });
      } else if (i % 10 < 6) {
        // Gap on left, turn on right
        addSegment({
          lanes: [
            { offset: -10, width: 8, isGap: true },
            { offset: 10, width: 8 }
          ],
          yawDelta: Math.PI / 40
        });
      } else {
        // Landing on left
        addSegment({
          lanes: [
            { offset: -10, width: 8 },
            { offset: 10, width: 8 }
          ],
          pitchDelta: -Math.PI / 30,
          yawDelta: Math.PI / 40
        });
      }
    }
    
    // Extreme banked hairpin
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 40 });
    }
    for (let i = 0; i < 40; i++) {
      addSegment({ 
        yawDelta: Math.PI / 20,
        lanes: [{ offset: 0, width: 13 }]
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 40 });
    }
    
    // Technical climb with strategic boost placement
    for (let i = 0; i < 40; i++) {
      if (i % 8 < 3) {
        addSegment({
          lanes: [{ offset: 0, width: 5 }],  // Narrow
          pitchDelta: Math.PI / 80
        });
      } else {
        addSegment({
          pitchDelta: Math.PI / 80,
          // Only add boost pad every 16 segments on the side
          lanes: (i % 16 === 8) ? [
            { offset: -3, width: 4, isBoost: true },
            { offset: 3, width: 4 }
          ] : [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // The Big Drop
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 200 * (i + 1) 
      });
    }
    for (let i = 0; i < 25; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 40  // 45° descent
      });
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 200 * (8 - i) 
      });
    }
    
    // Recovery chicane
    for (let i = 0; i < 6; i++) {
      addSegment({ yawDelta: -Math.PI / 30 });
    }
    for (let i = 0; i < 12; i++) {
      addSegment({ yawDelta: Math.PI / 30 });
    }
    for (let i = 0; i < 6; i++) {
      addSegment({ yawDelta: -Math.PI / 30 });
    }
    
    // Final jump with turn
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 30,
        yawDelta: -Math.PI / 200
      });
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 30,
        yawDelta: -Math.PI / 200
      });
    }
    
    // Victory straight
    for (let i = 0; i < 30; i++) {
      addSegment({
        isFinishLine: (i === 29),
        lanes: [{ offset: 0, width: 16 }]
      });
    }
  }
};
```

### Level 20 - Elemental Nexus (Circuit 2 Finale)
```javascript
export default {
  name: "Elemental Nexus",
  description: "Master all elements in the ultimate test",
  difficulty: 6,
  
  generateTrack(addSegment) {
    // Grand entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Fire & Ice split
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -12 * factor, width: 8 }, // Fire
          { offset: 12 * factor, width: 8 }   // Ice
        ]
      });
    }
    
    // Parallel challenges with single powerup
    for (let i = 0; i < 40; i++) {
      if (i < 20) {
        // Fire: curves, Ice: straights
        addSegment({
          lanes: [
            { offset: -12, width: 8 },
            { offset: 12, width: 8 }
          ],
          yawDelta: i % 4 < 2 ? Math.PI / 50 : -Math.PI / 50,
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120,
          // Single powerup on fire path only
          isBoostPowerup: (i === 10)
        });
      } else {
        // Converge
        const factor = 1 - ((i - 20) / 20);
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 8 },
            { offset: 12 * factor, width: 8 }
          ],
          pitchDelta: -Math.PI / 100
        });
      }
    }
    
    // Wind serpentine
    const windSections = [
      { angle: Math.PI / 2, segments: 25 },
      { angle: -Math.PI / 1.8, segments: 30 },
      { angle: Math.PI / 2.2, segments: 22 }
    ];
    
    for (const section of windSections) {
      // Bank in
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (section.angle > 0 ? 1 : -1) * Math.PI / 40
        });
      }
      
      // Flowing turn
      for (let i = 0; i < section.segments; i++) {
        const progress = i / section.segments;
        addSegment({
          yawDelta: section.angle / section.segments,
          pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 150,
          rollDelta: Math.sin(progress * Math.PI) * Math.PI / 60 * 
                     (section.angle > 0 ? 1 : -1)
        });
      }
      
      // Bank out
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (section.angle > 0 ? -1 : 1) * Math.PI / 40
        });
      }
    }
    
    // Earth ascent - switchbacks with strategic boost
    for (let switchback = 0; switchback < 4; switchback++) {
      // Climb with boost pad at start of each switchback
      for (let i = 0; i < 15; i++) {
        addSegment({
          pitchDelta: Math.PI / 90,
          // Single boost pad at start of climb, left side
          lanes: (i === 0 && switchback % 2 === 0) ? [
            { offset: -2, width: 4, isBoost: true },
            { offset: 2, width: 4 }
          ] : [{ offset: 0, width: 8 }]
        });
      }
      
      // Hairpin
      const turnDir = switchback % 2 ? 1 : -1;
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: turnDir * Math.PI / 12,
          rollDelta: turnDir * Math.PI / 30,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // Lightning sprint
    for (let i = 0; i < 50; i++) {
      const zigzag = Math.floor(i / 5) % 2 ? 1 : -1;
      addSegment({
        yawDelta: zigzag * Math.PI / 60,
        pitchDelta: -Math.PI / 200,
        rollDelta: zigzag * Math.PI / 80
      });
    }
    
    // Void drop
    for (let i = 0; i < 30; i++) {
      const spiralProgress = i / 30;
      addSegment({
        yawDelta: Math.PI / 40,
        pitchDelta: -Math.PI / 35 - (spiralProgress * Math.PI / 100),
        rollDelta: Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Final harmony
    for (let i = 0; i < 40; i++) {
      const phase = i / 40;
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 50,
        pitchDelta: Math.cos(i * 0.15) * Math.PI / 100,
        rollDelta: Math.sin(i * 0.2) * Math.PI / 120
      });
    }
    
    // Victory runway with single boost pad
    for (let i = 0; i < 20; i++) {
      addSegment({
        // Single boost pad in center, half width
        lanes: (i === 12) ? [
          { offset: 0, width: 7, isBoost: true }
        ] : [{ offset: 0, width: 15 }],
        isFinishLine: (i === 19)
      });
    }
  }
};
```

### Level 30 - Ultimate Circuit (Performance Optimized)
```javascript
export default {
  name: "Ultimate Circuit",
  description: "The final test of speed and skill",
  difficulty: 5,
  
  generateTrack(addSegment) {
    // Opening - 15 segments
    for (let i = 0; i < 15; i++) {
      addSegment({
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Rising spiral - 25 segments with single powerup
    for (let i = 0; i < 25; i++) {
      let banking = 0;
      if (i < 2) banking = Math.PI / 10;
      else if (i > 22) banking = -Math.PI / 10;
      
      addSegment({
        yawDelta: Math.PI / 30,
        pitchDelta: Math.PI / 125,
        rollDelta: banking,
        // Single powerup halfway through spiral
        isBoostPowerup: (i === 12)
      });
    }
    
    // High speed straight - 15 segments with boost strip
    for (let i = 0; i < 15; i++) {
      addSegment({
        // Boost strip on right side only, avoidable
        lanes: (i >= 5 && i <= 10) ? [
          { offset: -3, width: 5 },
          { offset: 3, width: 5, isBoost: true }
        ] : [{ offset: 0, width: 14 }]
      });
    }
    
    // S-curves - 30 segments (optimized from 60)
    for (let curve = 0; curve < 2; curve++) {
      const direction = curve === 0 ? 1 : -1;
      
      // Bank in
      addSegment({ rollDelta: direction * Math.PI / 6 });
      
      // Turn
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: direction * Math.PI / 24,
          lanes: [{ offset: 0, width: 13 }]
        });
      }
      
      // Bank out
      addSegment({ rollDelta: -direction * Math.PI / 6 });
      addSegment({});
    }
    
    // Technical chicane - 18 segments
    const chicanePattern = [-1, 1];
    
    for (const dir of chicanePattern) {
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: dir * Math.PI / 32,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      addSegment({
        isBoostPowerup: (dir === 1)
      });
    }
    
    // Elevation descent - 20 segments
    addSegment({ rollDelta: Math.PI / 8 });
    
    for (let i = 0; i < 18; i++) {
      addSegment({
        yawDelta: Math.PI / 54,
        pitchDelta: -Math.PI / 100,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    addSegment({ rollDelta: -Math.PI / 8 });
    
    // Power section - 20 segments with single powerup
    for (let i = 0; i < 20; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 13 }],
        // Single powerup only
        isBoostPowerup: (i === 15)
      });
    }
    
    // Jump section - 15 segments
    for (let i = 0; i < 8; i++) {
      addSegment({
        pitchDelta: i > 5 ? Math.PI / 60 : 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    for (let i = 0; i < 4; i++) {
      addSegment({ isGap: true });
    }
    
    for (let i = 0; i < 3; i++) {
      addSegment({
        pitchDelta: i < 2 ? -Math.PI / 50 : 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Single hairpin - 20 segments
    for (let i = 0; i < 3; i++) {
      addSegment({});
    }
    
    addSegment({ rollDelta: Math.PI / 8 });
    
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: Math.PI / 12,
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    addSegment({ rollDelta: -Math.PI / 8 });
    
    for (let i = 0; i < 3; i++) {
      addSegment({
        isBoostPowerup: (i === 1)
      });
    }
    
    // Flowing final - 25 segments
    for (let i = 0; i < 25; i++) {
      const flowPattern = Math.sin(i * 0.16);
      
      addSegment({
        yawDelta: flowPattern * Math.PI / 60,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Final challenge - 20 segments
    addSegment({ rollDelta: Math.PI / 10 });
    
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: Math.PI / 36,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    addSegment({ rollDelta: -Math.PI / 10 });
    
    // Sprint to finish - 6 segments
    for (let i = 0; i < 6; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 16 }],
        isFinishLine: (i === 5)
      });
    }
  }
};
```

### Level 50 - Escape Velocity (Circuit 5 Finale)
```javascript
export default {
  name: "Escape Velocity",
  description: "Break free from the underground",
  difficulty: 6,
  
  generateTrack(addSegment) {
    // Deep underground start
    for (let i = 0; i < 20; i++) {
      addSegment({
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Initial climb - building momentum
    for (let i = 0; i < 30; i++) {
      addSegment({
        pitchDelta: Math.PI / 180,
        // Single boost pad at base of climb, center
        lanes: (i === 0) ? [
          { offset: 0, width: 6, isBoost: true }
        ] : [{ offset: 0, width: 12 }],
        // Single powerup partway up
        isBoostPowerup: (i === 10)
      });
    }
    
    // Laser grid ascent
    for (let i = 0; i < 40; i++) {
      const laserPhase = i % 10;
      let laneConfig;
      
      if (laserPhase < 3) {
        laneConfig = [{ offset: -5, width: 8 }];
      } else if (laserPhase < 6) {
        laneConfig = [{ offset: 5, width: 8 }];
      } else {
        // Boost pad on one side only during merge
        laneConfig = (laserPhase === 8) ? [
          { offset: -2.5, width: 5 },
          { offset: 2.5, width: 5, isBoost: true }
        ] : [{ offset: 0, width: 10 }];
      }
      
      addSegment({
        pitchDelta: Math.PI / 150,
        lanes: laneConfig
      });
    }
    
    // Spiral launch tube
    const spiralSegments = 60;
    for (let i = 0; i < spiralSegments; i++) {
      const spiralProgress = i / spiralSegments;
      const spiralTurn = Math.PI * 3 / spiralSegments;
      
      addSegment({
        yawDelta: spiralTurn,
        pitchDelta: Math.PI / 200,
        rollDelta: Math.sin(spiralProgress * Math.PI * 3) * Math.PI / 80,
        // Reduced boost frequency - only 2 pads in the spiral
        lanes: (i === 20 || i === 40) ? [
          { offset: 0, width: 5, isBoost: true }
        ] : [{ offset: 0, width: 10 }]
      });
    }
    
    // Power core bypass
    for (let i = 0; i < 35; i++) {
      const energyWeave = Math.sin(i * 0.3) * Math.PI / 60;
      const energyPulse = 11 + Math.sin(i * 0.4) * 3;
      
      addSegment({
        yawDelta: energyWeave,
        lanes: [{ offset: 0, width: energyPulse }],
        isBoostPowerup: (i === 17)
      });
    }
    
    // Maintenance shaft rush
    const shaftPattern = [
      { angle: Math.PI / 3, climb: Math.PI / 140, segs: 15 },
      { angle: -Math.PI / 2, climb: Math.PI / 160, segs: 20 },
      { angle: Math.PI / 4, climb: Math.PI / 140, segs: 15 }
    ];
    
    for (let sectionIdx = 0; sectionIdx < shaftPattern.length; sectionIdx++) {
      const section = shaftPattern[sectionIdx];
      
      // Bank
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.angle > 0 ? 1 : -1) * Math.PI / 40,
          pitchDelta: section.climb,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Turn with single boost pad per section
      for (let i = 0; i < section.segs; i++) {
        addSegment({
          yawDelta: section.angle / section.segs,
          pitchDelta: section.climb,
          // One boost pad at start of each section, alternating sides
          lanes: (i === 0 && sectionIdx % 2 === 0) ? [
            { offset: -2.5, width: 4, isBoost: true },
            { offset: 2.5, width: 4 }
          ] : [{ offset: 0, width: 9 }]
        });
      }
      
      // Bank out
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.angle > 0 ? -1 : 1) * Math.PI / 40,
          pitchDelta: section.climb,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
    }
    
    // Data stream superhighway - long straight with strategic boosts
    for (let i = 0; i < 50; i++) {
      addSegment({
        pitchDelta: Math.PI / 250,
        // Boost strips every 10 segments, alternating sides
        lanes: (i % 10 === 0) ? [
          { offset: i % 20 === 0 ? -4 : 4, width: 6, isBoost: true },
          { offset: i % 20 === 0 ? 4 : -4, width: 6 }
        ] : [{ offset: 0, width: 14 }]
      });
    }
    
    // Final cavern
    for (let i = 0; i < 40; i++) {
      if (i < 30) {
        const splitPhase = i % 10;
        let laneConfig;
        
        if (splitPhase < 5) {
          laneConfig = [
            { offset: -10, width: 7 },
            { offset: 0, width: 8 },
            { offset: 10, width: 7 }
          ];
        } else {
          laneConfig = [{ offset: 0, width: 12 }];
        }
        
        addSegment({
          pitchDelta: Math.PI / 200,
          lanes: laneConfig
        });
      } else {
        // Narrowing exit
        const exitWidth = 12 - (i - 30) * 0.3;
        addSegment({
          pitchDelta: Math.PI / 180,
          lanes: [{ offset: 0, width: exitWidth }]
        });
      }
    }
    
    // Surface breakthrough
    for (let i = 0; i < 30; i++) {
      addSegment({
        pitchDelta: (i < 10) ? Math.PI / 300 : 0,
        lanes: [{ offset: 0, width: 16 }],
        isBoost: (i >= 10 && i <= 25),
        isFinishLine: (i === 29)
      });
    }
  }
};
```

## Game Loop and Player Control

### Main Game Loop (from Game.js)
```javascript
handlePlayerInput() {
  const input = this.inputManager.state;
  const ballBody = this.ball.body;
  const accel = this.ball.isBoostActive ? 
    this.ball.BOOST_ACCELERATION : this.ball.ACCELERATION;

  // Calculate camera-relative movement
  const camForward = new THREE.Vector3();
  this.camera.camera.getWorldDirection(camForward);
  camForward.y = 0;
  camForward.normalize();
  const camRight = new THREE.Vector3()
    .crossVectors(camForward, new THREE.Vector3(0, 1, 0))
    .normalize().negate();
  
  // Apply forces
  const force = new CANNON.Vec3(0, 0, 0);
  if (input.up) {
    force.x += camForward.x * accel;
    force.z += camForward.z * accel;
  }
  if (input.down) {
    force.x -= camForward.x * accel;
    force.z -= camForward.z * accel;
  }
  if (input.left) {
    force.x += camRight.x * accel;
    force.z += camRight.z * accel;
  }
  if (input.right) {
    force.x -= camRight.x * accel;
    force.z -= camRight.z * accel;
  }
  
  ballBody.applyForce(force);

  // Handle jump
  const nowSec = performance.now() / 1000;
  if (input.jumpRequested && this.ball.isGrounded() && 
      (nowSec - this.ball.lastJumpTime > this.ball.JUMP_COOLDOWN)) {
    ballBody.velocity.y += this.ball.JUMP_VELOCITY;
    this.ball.lastJumpTime = nowSec;
    input.jumpRequested = false;
  }
  
  // Handle boost
  if (input.boostRequested) {
    if (this.ball.startBoost()) {
      this.hud.showBoostActivated();
    }
    input.boostRequested = false;
  }
}
```

## Performance Optimizations

### 1. Geometry Merging
- Track segments merged into single meshes
- Reduces draw calls from 100s to <10
- Maintains vertex colors for visual variety

### 2. Instanced Rendering
- All walls rendered as InstancedMesh
- Single draw call for 1000s of walls
- Dynamic instance matrix updates

### 3. Geometry Caching
- Common geometries cached and reused
- Reduces memory usage
- Speeds up track generation

### 4. Level of Detail
- Complex tracks simplified for performance
- Circuit 3 optimized from 440 to 200 segments
- Maintains gameplay while improving FPS

## Conclusion

This document provides everything needed to recreate Velocity Sphere:

1. **Complete TrackBuilder system** - The core procedural generation engine
2. **Ball physics implementation** - Player control and physics
3. **Input handling** - Keyboard and mobile controls
4. **Physics world setup** - Cannon.js configuration
5. **Track generation examples** - From simple to complex tracks

The key innovation is the procedural track generation system that creates complex 3D racing tracks from simple segment definitions. By combining rotation angles (yaw, pitch, roll) with special elements (jumps, boosts, splits), diverse and exciting tracks can be created with minimal code.

The game achieves 60+ FPS through aggressive optimization:
- Geometry merging reduces draw calls
- Instanced rendering for repeated elements
- Cached geometries reduce memory usage
- Simplified physics for stable simulation

This architecture allows for easy expansion with new track elements, visual effects, and gameplay mechanics while maintaining high performance across devices.