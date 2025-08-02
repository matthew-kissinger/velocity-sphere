/**
 * SplineBasedStrategy - Smooth track generation using Three.js splines
 * 
 * Creates racing tracks from control points using CatmullRomCurve3 for smooth interpolation.
 * Features:
 * - Automatic banking based on curvature
 * - Variable track width
 * - Elevation profiles
 * - Optimized geometry generation
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TrackGenerationStrategy } from './TrackGenerationStrategies.js';

export class SplineBasedStrategy extends TrackGenerationStrategy {
  constructor(trackBuilder) {
    super(trackBuilder);
    this.defaultConfig = {
      segments: 200,
      width: 10,
      thickness: 0.6,
      closed: true,
      banking: true,
      bankingFactor: 0.5,
      widthVariation: false,
      widthVariationAmount: 0.3,
      elevationProfile: null,
      wallHeight: 2.0,
      wallThickness: 0.4,
      generateWalls: true,
      generatePhysics: true,
      chunkSize: 20 // For geometry merging
    };
  }

  generate(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    if (!config.controlPoints || config.controlPoints.length < 3) {
      throw new Error('SplineBasedStrategy requires at least 3 control points');
    }

    console.log('🌊 Generating spline-based track...');

    // Create spline from control points
    const curve = new THREE.CatmullRomCurve3(
      config.controlPoints,
      finalConfig.closed,
      'centripetal'
    );

    // Generate track data
    const trackData = {
      meshes: [],
      bodies: [],
      startPosition: null,
      finishPosition: null,
      bounds: { minY: Infinity, maxY: -Infinity }
    };

    // Generate track geometry
    const { mesh, segments } = this.generateTrackMesh(curve, finalConfig);
    trackData.meshes.push(mesh);
    this.scene.add(mesh);

    // Generate walls if enabled
    if (finalConfig.generateWalls) {
      const wallMeshes = this.generateWalls(curve, segments, finalConfig);
      trackData.meshes.push(...wallMeshes);
      wallMeshes.forEach(wall => this.scene.add(wall));
    }

    // Generate physics if enabled
    if (finalConfig.generatePhysics) {
      const bodies = this.generatePhysics(segments, finalConfig);
      trackData.bodies = bodies;
      bodies.forEach(body => this.physicsWorld.addBody(body));
    }

    // Calculate bounds and positions
    this.calculateTrackBounds(segments, trackData);

    console.log(`✅ Spline track generated: ${segments.length} segments`);
    
    return trackData;
  }

  generateTrackMesh(curve, config) {
    const segments = [];
    const geometries = [];
    const colors = this.generateRainbowColors(config.segments);
    
    // Sample points along the curve
    const points = curve.getPoints(config.segments);
    const frames = curve.computeFrenetFrames(config.segments, false);

    // Generate segments
    for (let i = 0; i < config.segments; i++) {
      const segment = this.createSegment(
        i,
        points,
        frames,
        curve,
        config,
        colors[i]
      );
      segments.push(segment);
      
      // Create geometry for this segment
      const geometry = this.createSegmentGeometry(segment, config);
      geometries.push(geometry);
    }

    // Merge geometries for performance
    const mergedGeometry = this.mergeGeometries(geometries, config);
    const material = this.createTrackMaterial();
    const mesh = new THREE.Mesh(mergedGeometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    // Clean up individual geometries
    geometries.forEach(geo => geo.dispose());

    return { mesh, segments };
  }

  createSegment(index, points, frames, curve, config, color) {
    const t = index / config.segments;
    const point = points[index];
    const nextPoint = points[Math.min(index + 1, points.length - 1)];
    
    // Get frame vectors
    const tangent = frames.tangents[index];
    const normal = frames.normals[index];
    const binormal = frames.binormals[index];

    // Calculate track width (with optional variation)
    let width = config.width;
    if (config.widthVariation) {
      const widthMultiplier = 1 + Math.sin(t * Math.PI * 4) * config.widthVariationAmount;
      width *= widthMultiplier;
    }

    // Calculate banking angle based on curvature
    let bankAngle = 0;
    if (config.banking) {
      const curvature = this.calculateCurvature(curve, t);
      bankAngle = Math.atan(curvature * config.bankingFactor);
      bankAngle = Math.max(-Math.PI / 6, Math.min(Math.PI / 6, bankAngle)); // Limit to ±30°
    }

    // Apply elevation profile if provided
    if (config.elevationProfile) {
      const elevation = config.elevationProfile(t);
      point.y += elevation;
    }

    return {
      position: point.clone(),
      nextPosition: nextPoint.clone(),
      tangent: tangent.clone(),
      normal: normal.clone(),
      binormal: binormal.clone(),
      width,
      bankAngle,
      color,
      t
    };
  }

  createSegmentGeometry(segment, config) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const normals = [];
    const colors = [];
    const uvs = [];

    // Calculate segment vectors
    const forward = segment.nextPosition.clone().sub(segment.position);
    const segmentLength = forward.length();
    forward.normalize();

    // Apply banking rotation to binormal
    const bankedBinormal = segment.binormal.clone();
    if (segment.bankAngle !== 0) {
      const bankQuat = new THREE.Quaternion().setFromAxisAngle(segment.tangent, segment.bankAngle);
      bankedBinormal.applyQuaternion(bankQuat);
    }

    // Calculate corner positions
    const halfWidth = segment.width / 2;
    const halfThickness = config.thickness / 2;

    // Define 8 vertices for the track segment box
    const corners = [
      // Bottom face (4 vertices)
      segment.position.clone().add(bankedBinormal.clone().multiplyScalar(-halfWidth))
        .add(segment.normal.clone().multiplyScalar(-halfThickness)),
      segment.position.clone().add(bankedBinormal.clone().multiplyScalar(halfWidth))
        .add(segment.normal.clone().multiplyScalar(-halfThickness)),
      segment.nextPosition.clone().add(bankedBinormal.clone().multiplyScalar(halfWidth))
        .add(segment.normal.clone().multiplyScalar(-halfThickness)),
      segment.nextPosition.clone().add(bankedBinormal.clone().multiplyScalar(-halfWidth))
        .add(segment.normal.clone().multiplyScalar(-halfThickness)),
      
      // Top face (4 vertices)
      segment.position.clone().add(bankedBinormal.clone().multiplyScalar(-halfWidth))
        .add(segment.normal.clone().multiplyScalar(halfThickness)),
      segment.position.clone().add(bankedBinormal.clone().multiplyScalar(halfWidth))
        .add(segment.normal.clone().multiplyScalar(halfThickness)),
      segment.nextPosition.clone().add(bankedBinormal.clone().multiplyScalar(halfWidth))
        .add(segment.normal.clone().multiplyScalar(halfThickness)),
      segment.nextPosition.clone().add(bankedBinormal.clone().multiplyScalar(-halfWidth))
        .add(segment.normal.clone().multiplyScalar(halfThickness))
    ];

    // Define faces (12 triangles for a box)
    const faces = [
      // Bottom
      [0, 2, 1], [0, 3, 2],
      // Top
      [4, 5, 6], [4, 6, 7],
      // Front
      [0, 1, 5], [0, 5, 4],
      // Back
      [3, 7, 6], [3, 6, 2],
      // Left
      [0, 4, 7], [0, 7, 3],
      // Right
      [1, 2, 6], [1, 6, 5]
    ];

    // Build vertex data
    faces.forEach(face => {
      face.forEach(vertexIndex => {
        const vertex = corners[vertexIndex];
        vertices.push(vertex.x, vertex.y, vertex.z);
        
        // Add color
        colors.push(segment.color.r, segment.color.g, segment.color.b);
        
        // Add UV (simple mapping)
        const u = vertexIndex % 2;
        const v = segment.t;
        uvs.push(u, v);
      });
    });

    // Set attributes
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.computeVertexNormals();

    return geometry;
  }

  mergeGeometries(geometries, config) {
    // Merge in chunks for better performance
    const chunks = [];
    for (let i = 0; i < geometries.length; i += config.chunkSize) {
      const chunk = geometries.slice(i, i + config.chunkSize);
                  const merged = BufferGeometryUtils.mergeGeometries(chunk);
      chunks.push(merged);
    }

    // If we have multiple chunks, merge them all
    if (chunks.length > 1) {
      const finalMerged = BufferGeometryUtils.mergeGeometries(chunks);
      chunks.forEach(chunk => chunk.dispose());
      return finalMerged;
    }

    return chunks[0];
  }

  generateWalls(curve, segments, config) {
    const wallMeshes = [];
    
    // Use instanced mesh for walls
    const wallGeometry = new THREE.BoxGeometry(
      config.wallThickness,
      config.wallHeight,
      1 // Will be scaled per instance
    );

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.9,
      metalness: 0.1
    });

    // Calculate total wall instances needed
    const wallCount = segments.length * 2; // Left and right walls
    const instancedWalls = new THREE.InstancedMesh(
      wallGeometry,
      wallMaterial,
      wallCount
    );
    instancedWalls.castShadow = true;
    instancedWalls.receiveShadow = true;

    let instanceIndex = 0;

    segments.forEach((segment, i) => {
      const nextSegment = segments[Math.min(i + 1, segments.length - 1)];
      const segmentLength = segment.position.distanceTo(nextSegment.position);
      
      // Apply banking to binormal for wall placement
      const bankedBinormal = segment.binormal.clone();
      const bankedNormal = segment.normal.clone();
      if (segment.bankAngle !== 0) {
        const bankQuat = new THREE.Quaternion().setFromAxisAngle(segment.tangent, segment.bankAngle);
        bankedBinormal.applyQuaternion(bankQuat);
        bankedNormal.applyQuaternion(bankQuat);
      }

      // Calculate wall positions
      const halfWidth = segment.width / 2;
      const wallOffset = halfWidth + config.wallThickness / 2;
      const wallHeight = config.wallHeight / 2 + config.thickness / 2;

      // Left wall
      const leftPos = segment.position.clone()
        .add(bankedBinormal.clone().multiplyScalar(-wallOffset))
        .add(bankedNormal.clone().multiplyScalar(wallHeight));

      // Right wall
      const rightPos = segment.position.clone()
        .add(bankedBinormal.clone().multiplyScalar(wallOffset))
        .add(bankedNormal.clone().multiplyScalar(wallHeight));

      // Create transformation matrices
      const scale = new THREE.Vector3(1, 1, segmentLength);
      
      // Left wall matrix
      const leftMatrix = new THREE.Matrix4();
      const leftQuat = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        segment.tangent
      );
      leftMatrix.compose(leftPos, leftQuat, scale);
      instancedWalls.setMatrixAt(instanceIndex++, leftMatrix);

      // Right wall matrix
      const rightMatrix = new THREE.Matrix4();
      rightMatrix.compose(rightPos, leftQuat, scale);
      instancedWalls.setMatrixAt(instanceIndex++, rightMatrix);
    });

    instancedWalls.instanceMatrix.needsUpdate = true;
    instancedWalls.count = instanceIndex;

    wallMeshes.push(instancedWalls);
    console.log(`🧱 Created ${instanceIndex} wall instances`);

    return wallMeshes;
  }

  generatePhysics(segments, config) {
    const bodies = [];
    
    // Create compound shapes for better performance
    const compoundShapes = [];
    const compoundPositions = [];
    const compoundQuaternions = [];

    segments.forEach((segment, i) => {
      const nextSegment = segments[Math.min(i + 1, segments.length - 1)];
      const segmentLength = segment.position.distanceTo(nextSegment.position);
      
      // Create box shape for this segment
      const shape = new CANNON.Box(new CANNON.Vec3(
        segment.width / 2,
        config.thickness / 2,
        segmentLength / 2
      ));

      // Calculate position (center between segment and next)
      const center = segment.position.clone().add(nextSegment.position).multiplyScalar(0.5);
      
      // Calculate orientation
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        segment.tangent
      );

      // Apply banking
      if (segment.bankAngle !== 0) {
        const bankQuat = new THREE.Quaternion().setFromAxisAngle(
          segment.tangent,
          segment.bankAngle
        );
        quaternion.multiply(bankQuat);
      }

      compoundShapes.push(shape);
      compoundPositions.push(new CANNON.Vec3(center.x, center.y, center.z));
      compoundQuaternions.push(new CANNON.Quaternion(
        quaternion.x,
        quaternion.y,
        quaternion.z,
        quaternion.w
      ));

      // Create compound body every N segments
      if ((i + 1) % config.chunkSize === 0 || i === segments.length - 1) {
        const body = new CANNON.Body({
          mass: 0,
          material: this.trackBuilder.materials.track
        });

        compoundShapes.forEach((shape, j) => {
          body.addShape(shape, compoundPositions[j], compoundQuaternions[j]);
        });

        bodies.push(body);

        // Reset arrays
        compoundShapes.length = 0;
        compoundPositions.length = 0;
        compoundQuaternions.length = 0;
      }
    });

    console.log(`⚙️ Created ${bodies.length} compound physics bodies`);
    return bodies;
  }

  calculateCurvature(curve, t) {
    const delta = 0.01;
    const t0 = Math.max(0, t - delta);
    const t1 = t;
    const t2 = Math.min(1, t + delta);

    const p0 = curve.getPoint(t0);
    const p1 = curve.getPoint(t1);
    const p2 = curve.getPoint(t2);

    const v1 = p1.clone().sub(p0);
    const v2 = p2.clone().sub(p1);

    const cross = v1.clone().cross(v2);
    const denom = v1.length() * v2.length();

    if (denom === 0) return 0;
    
    return cross.length() / denom;
  }

  calculateTrackBounds(segments, trackData) {
    let minY = Infinity;
    let maxY = -Infinity;

    segments.forEach(segment => {
      minY = Math.min(minY, segment.position.y);
      maxY = Math.max(maxY, segment.position.y);
    });

    trackData.bounds.minY = minY;
    trackData.bounds.maxY = maxY;

    // Set start/finish positions
    if (segments.length > 0) {
      trackData.startPosition = segments[0].position.clone();
      trackData.startPosition.y += 2; // Spawn above track
      
      const lastSegment = segments[segments.length - 1];
      trackData.finishPosition = lastSegment.position.clone();
    }
  }
}