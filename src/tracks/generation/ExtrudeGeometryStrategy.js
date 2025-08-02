/**
 * ExtrudeGeometryStrategy - Track generation using ExtrudeGeometry for complex cross-sections
 * 
 * Creates racing tracks by extruding a 2D shape along a 3D path.
 * Features:
 * - Custom track cross-sections (tunnels, bridges, etc.)
 * - Built-in walls and barriers as part of the extrusion
 * - Support for complex track features
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { TrackGenerationStrategy } from './TrackGenerationStrategies.js';

export class ExtrudeGeometryStrategy extends TrackGenerationStrategy {
  constructor(trackBuilder) {
    super(trackBuilder);
    this.defaultConfig = {
      steps: 200,
      bevelEnabled: false,
      closed: true,
      crossSection: null,
      generatePhysics: true,
      segmentLength: 6,
      physicsSimplification: 0.5 // Reduce physics mesh complexity
    };
  }

  generate(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    if (!config.path) {
      throw new Error('ExtrudeGeometryStrategy requires a path (THREE.Curve)');
    }

    console.log('🏗️ Generating extruded track...');

    // Create or use provided cross-section shape
    const shape = finalConfig.crossSection || this.createDefaultCrossSection(finalConfig);
    
    // Generate track data
    const trackData = {
      meshes: [],
      bodies: [],
      startPosition: null,
      finishPosition: null,
      bounds: { minY: Infinity, maxY: -Infinity }
    };

    // Generate extruded track
    const { mesh, geometry } = this.generateExtrudedTrack(shape, config.path, finalConfig);
    trackData.meshes.push(mesh);
    this.scene.add(mesh);

    // Generate decorative elements
    if (finalConfig.generateDecorations) {
      const decorations = this.generateDecorations(config.path, finalConfig);
      trackData.meshes.push(...decorations);
      decorations.forEach(deco => this.scene.add(deco));
    }

    // Generate physics
    if (finalConfig.generatePhysics) {
      const bodies = this.generatePhysicsFromGeometry(geometry, config.path, finalConfig);
      trackData.bodies = bodies;
      bodies.forEach(body => this.physicsWorld.addBody(body));
    }

    // Calculate bounds and positions
    this.calculateTrackBounds(config.path, trackData);

    console.log(`✅ Extruded track generated with ${finalConfig.steps} steps`);
    
    return trackData;
  }

  createDefaultCrossSection(config) {
    const shape = new THREE.Shape();
    const width = config.width || 10;
    const wallHeight = config.wallHeight || 1.5;
    const wallThickness = config.wallThickness || 0.5;
    const trackThickness = config.trackThickness || 0.6;
    
    // Create a U-shaped track cross-section with built-in walls
    // Start from bottom-left
    shape.moveTo(-width/2 - wallThickness, 0);
    
    // Left wall - outer
    shape.lineTo(-width/2 - wallThickness, wallHeight);
    
    // Left wall - top
    shape.lineTo(-width/2, wallHeight);
    
    // Left wall - inner
    shape.lineTo(-width/2, trackThickness);
    
    // Track surface - left edge
    shape.lineTo(-width/2 + wallThickness, trackThickness);
    
    // Optional: Add track grooves or details
    if (config.addGrooves) {
      const grooveWidth = 0.2;
      const grooveDepth = 0.05;
      
      // Left groove
      shape.lineTo(-width/3, trackThickness);
      shape.lineTo(-width/3, trackThickness - grooveDepth);
      shape.lineTo(-width/3 + grooveWidth, trackThickness - grooveDepth);
      shape.lineTo(-width/3 + grooveWidth, trackThickness);
      
      // Center line
      shape.lineTo(-grooveWidth/2, trackThickness);
      shape.lineTo(-grooveWidth/2, trackThickness - grooveDepth);
      shape.lineTo(grooveWidth/2, trackThickness - grooveDepth);
      shape.lineTo(grooveWidth/2, trackThickness);
      
      // Right groove
      shape.lineTo(width/3 - grooveWidth, trackThickness);
      shape.lineTo(width/3 - grooveWidth, trackThickness - grooveDepth);
      shape.lineTo(width/3, trackThickness - grooveDepth);
      shape.lineTo(width/3, trackThickness);
    }
    
    // Track surface - right edge
    shape.lineTo(width/2 - wallThickness, trackThickness);
    
    // Right wall - inner
    shape.lineTo(width/2, trackThickness);
    
    // Right wall - inner up
    shape.lineTo(width/2, wallHeight);
    
    // Right wall - top
    shape.lineTo(width/2 + wallThickness, wallHeight);
    
    // Right wall - outer
    shape.lineTo(width/2 + wallThickness, 0);
    
    // Bottom
    shape.lineTo(-width/2 - wallThickness, 0);
    
    return shape;
  }

  createTunnelCrossSection(config) {
    const shape = new THREE.Shape();
    const width = config.width || 10;
    const height = config.height || 8;
    const thickness = config.thickness || 1;
    
    // Outer tunnel shape (rounded rectangle)
    const outerRadius = height / 2;
    shape.moveTo(-width/2, 0);
    shape.lineTo(-width/2, height - outerRadius);
    shape.quadraticCurveTo(-width/2, height, -width/2 + outerRadius, height);
    shape.lineTo(width/2 - outerRadius, height);
    shape.quadraticCurveTo(width/2, height, width/2, height - outerRadius);
    shape.lineTo(width/2, 0);
    shape.lineTo(-width/2, 0);
    
    // Create hole for inner tunnel
    const holePath = new THREE.Path();
    const innerWidth = width - thickness * 2;
    const innerHeight = height - thickness;
    const innerRadius = innerHeight / 2;
    
    holePath.moveTo(-innerWidth/2, thickness);
    holePath.lineTo(-innerWidth/2, innerHeight - innerRadius);
    holePath.quadraticCurveTo(-innerWidth/2, innerHeight, -innerWidth/2 + innerRadius, innerHeight);
    holePath.lineTo(innerWidth/2 - innerRadius, innerHeight);
    holePath.quadraticCurveTo(innerWidth/2, innerHeight, innerWidth/2, innerHeight - innerRadius);
    holePath.lineTo(innerWidth/2, thickness);
    holePath.lineTo(-innerWidth/2, thickness);
    
    shape.holes.push(holePath);
    
    return shape;
  }

  createBridgeCrossSection(config) {
    const shape = new THREE.Shape();
    const width = config.width || 12;
    const railHeight = config.railHeight || 1.2;
    const railWidth = config.railWidth || 0.3;
    const deckThickness = config.deckThickness || 0.8;
    
    // Bridge deck with side rails
    shape.moveTo(-width/2, 0);
    
    // Left rail
    shape.lineTo(-width/2, railHeight);
    shape.lineTo(-width/2 + railWidth, railHeight);
    shape.lineTo(-width/2 + railWidth, deckThickness);
    
    // Deck surface
    shape.lineTo(width/2 - railWidth, deckThickness);
    
    // Right rail
    shape.lineTo(width/2 - railWidth, railHeight);
    shape.lineTo(width/2, railHeight);
    shape.lineTo(width/2, 0);
    
    // Bottom of deck
    shape.lineTo(-width/2, 0);
    
    return shape;
  }

  generateExtrudedTrack(shape, path, config) {
    // Apply rainbow colors along the path
    const colors = this.generateRainbowColors(config.steps);
    
    // Create extrude settings
    const extrudeSettings = {
      steps: config.steps,
      bevelEnabled: config.bevelEnabled,
      extrudePath: path
    };

    // Create geometry
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    // Add vertex colors
    const colorAttribute = new Float32Array(geometry.attributes.position.count * 3);
    const positions = geometry.attributes.position.array;
    
    // Calculate color for each vertex based on its position along the path
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const z = positions[i * 3 + 2]; // Assuming extrusion along Z
      const t = (z + path.getLength() / 2) / path.getLength(); // Normalize
      const colorIndex = Math.floor(t * colors.length);
      const color = colors[Math.min(colorIndex, colors.length - 1)];
      
      colorAttribute[i * 3] = color.r;
      colorAttribute[i * 3 + 1] = color.g;
      colorAttribute[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('color', new THREE.BufferAttribute(colorAttribute, 3));
    
    // Create material
    const material = this.createTrackMaterial();
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return { mesh, geometry };
  }

  generateDecorations(path, config) {
    const decorations = [];
    
    // Add distance markers
    if (config.addDistanceMarkers) {
      const markerInterval = 50; // Every 50 units
      const pathLength = path.getLength();
      const markerCount = Math.floor(pathLength / markerInterval);
      
      const markerGeometry = new THREE.BoxGeometry(0.5, 3, 0.5);
      const markerMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 0.3
      });
      
      const instancedMarkers = new THREE.InstancedMesh(
        markerGeometry,
        markerMaterial,
        markerCount * 2 // Left and right sides
      );
      
      let instanceIndex = 0;
      
      for (let i = 1; i <= markerCount; i++) {
        const t = (i * markerInterval) / pathLength;
        const point = path.getPoint(t);
        const tangent = path.getTangent(t);
        const normal = new THREE.Vector3(0, 1, 0);
        const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();
        
        // Left marker
        const leftPos = point.clone().add(binormal.clone().multiplyScalar(-7));
        const leftMatrix = new THREE.Matrix4();
        leftMatrix.setPosition(leftPos);
        instancedMarkers.setMatrixAt(instanceIndex++, leftMatrix);
        
        // Right marker
        const rightPos = point.clone().add(binormal.clone().multiplyScalar(7));
        const rightMatrix = new THREE.Matrix4();
        rightMatrix.setPosition(rightPos);
        instancedMarkers.setMatrixAt(instanceIndex++, rightMatrix);
      }
      
      instancedMarkers.instanceMatrix.needsUpdate = true;
      decorations.push(instancedMarkers);
    }
    
    // Add track lights for tunnels
    if (config.crossSectionType === 'tunnel' && config.addLights) {
      const lightInterval = 20;
      const pathLength = path.getLength();
      const lightCount = Math.floor(pathLength / lightInterval);
      
      const lightGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const lightMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        emissive: 0xffff00
      });
      
      const instancedLights = new THREE.InstancedMesh(
        lightGeometry,
        lightMaterial,
        lightCount
      );
      
      for (let i = 0; i < lightCount; i++) {
        const t = (i * lightInterval) / pathLength;
        const point = path.getPoint(t);
        point.y += config.height - 1; // Position near tunnel ceiling
        
        const matrix = new THREE.Matrix4();
        matrix.setPosition(point);
        instancedLights.setMatrixAt(i, matrix);
      }
      
      instancedLights.instanceMatrix.needsUpdate = true;
      decorations.push(instancedLights);
    }
    
    return decorations;
  }

  generatePhysicsFromGeometry(geometry, path, config) {
    const bodies = [];
    
    // Simplified physics: Create box segments along the path
    const segmentCount = Math.ceil(path.getLength() / config.segmentLength);
    
    for (let i = 0; i < segmentCount; i++) {
      const t1 = i / segmentCount;
      const t2 = Math.min((i + 1) / segmentCount, 1);
      
      const p1 = path.getPoint(t1);
      const p2 = path.getPoint(t2);
      const center = p1.clone().add(p2).multiplyScalar(0.5);
      const length = p1.distanceTo(p2);
      
      const tangent = path.getTangent((t1 + t2) / 2);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        tangent
      );
      
      // Create box shape
      const shape = new CANNON.Box(new CANNON.Vec3(
        (config.width || 10) / 2,
        config.trackThickness || 0.6,
        length / 2
      ));
      
      const body = new CANNON.Body({
        mass: 0,
        shape: shape,
        position: new CANNON.Vec3(center.x, center.y, center.z),
        quaternion: new CANNON.Quaternion(
          quaternion.x,
          quaternion.y,
          quaternion.z,
          quaternion.w
        ),
        material: this.trackBuilder.materials.track
      });
      
      bodies.push(body);
    }
    
    console.log(`⚙️ Created ${bodies.length} physics bodies for extruded track`);
    return bodies;
  }

  calculateTrackBounds(path, trackData) {
    const points = path.getPoints(100);
    let minY = Infinity;
    let maxY = -Infinity;

    points.forEach(point => {
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    });

    trackData.bounds.minY = minY;
    trackData.bounds.maxY = maxY;

    // Set start/finish positions
    trackData.startPosition = path.getPoint(0).clone();
    trackData.startPosition.y += 2;
    
    trackData.finishPosition = path.getPoint(0.95).clone(); // Near the end for closed tracks
  }
}