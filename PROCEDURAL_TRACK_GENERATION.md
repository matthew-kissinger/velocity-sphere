# Procedural Track Generation for Velocity Sphere

## Overview

Velocity Sphere implements a sophisticated procedural track generation system using Three.js and Cannon.js, focusing on segment-based approaches that create dynamic racing surfaces with proper physics, banking, and elevation changes. The system supports multiple difficulty levels and strategic boost placement.

## Velocity Sphere Implementation

### Current System: Segment-Based Generation

Velocity Sphere uses a segment-based approach for precise control over track geometry and physics:

```javascript
// Example level generation
export default {
  name: "Track Name",
  description: "Track description",
  difficulty: 2, // 1=Easy, 2=Medium, 3=Hard, 4=Extreme
  
  generateTrack(addSegment) {
    // Strategic boost zones for climbing
    for (let i = 0; i < 10; i++) {
      addSegment({ 
        isBoost: true,
        pitchDelta: Math.PI / 80 // Gentle climb
      });
    }
    
    // Banking and turns
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.PI / 40,
        rollDelta: Math.PI / 60 // Banking
      });
    }
  }
};
```

### Enhanced Features

- **Improved Boost System**: 4x speed multiplier with enhanced acceleration
- **Strategic Boost Placement**: Automatic boost zones before climbs
- **Difficulty Groupings**: Easy/Medium/Hard/Extreme organization
- **Physics-Aware Design**: Prevents impossible climbing angles
- **Performance Monitoring**: Built-in FPS stats with stats.js

## Legacy Techniques

### 1. Spline-Based Track Generation

Alternative approach using **CatmullRomCurve3** for smooth 3D paths:

```javascript
// Define control points for track layout
const trackPoints = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(50, 0, 30),
  new THREE.Vector3(100, 5, 20),
  new THREE.Vector3(120, 10, -20),
  new THREE.Vector3(80, 15, -50),
  new THREE.Vector3(0, 0, 0) // Close the loop
];

// Create smooth curve through points
const trackCurve = new THREE.CatmullRomCurve3(trackPoints, true); // true = closed loop
trackCurve.curveType = 'centripetal'; // Smoother interpolation
```

### 2. Track Mesh Generation Methods

#### A. TubeGeometry (Simple but Limited)
```javascript
const tubeGeometry = new THREE.TubeGeometry(
  trackCurve,  // path
  200,         // tubularSegments
  5,           // radius (track width/2)
  8,           // radialSegments
  false        // closed
);
```

**Pros**: Easy to implement, smooth curves
**Cons**: Circular cross-section, no banking control

#### B. ExtrudeGeometry (More Control)
```javascript
// Define track cross-section shape
const trackShape = new THREE.Shape();
trackShape.moveTo(-10, 0);    // Left edge
trackShape.lineTo(-10, 0.5);  // Left wall
trackShape.lineTo(10, 0.5);   // Right wall
trackShape.lineTo(10, 0);     // Right edge
trackShape.lineTo(-10, 0);    // Close shape

// Extrude along curve
const extrudeSettings = {
  steps: 200,              // Segments along curve
  bevelEnabled: false,
  extrudePath: trackCurve
};

const trackGeometry = new THREE.ExtrudeGeometry(trackShape, extrudeSettings);
```

#### C. Custom Geometry with Banking (Advanced)
```javascript
function generateTrackGeometry(curve, width, segments) {
  const points = curve.getPoints(segments);
  const frames = curve.computeFrenetFrames(segments, false);
  
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const normals = [];
  const uvs = [];
  
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const tangent = frames.tangents[i];
    const normal = frames.normals[i];
    const binormal = frames.binormals[i];
    
    // Calculate banking angle based on curvature
    const curvature = calculateCurvature(curve, i / segments);
    const bankAngle = Math.atan(curvature * 0.5); // Adjust banking factor
    
    // Rotate binormal for banking
    const bankedBinormal = binormal.clone()
      .applyAxisAngle(tangent, bankAngle);
    
    // Generate track vertices with banking
    const halfWidth = width / 2;
    const left = point.clone().add(bankedBinormal.clone().multiplyScalar(-halfWidth));
    const right = point.clone().add(bankedBinormal.clone().multiplyScalar(halfWidth));
    
    vertices.push(left.x, left.y, left.z);
    vertices.push(right.x, right.y, right.z);
    
    // Add normals pointing up from banked surface
    const up = normal.clone().applyAxisAngle(tangent, bankAngle);
    normals.push(up.x, up.y, up.z);
    normals.push(up.x, up.y, up.z);
    
    // UV coordinates
    uvs.push(0, i / segments);
    uvs.push(1, i / segments);
  }
  
  // Create faces between vertices
  const indices = [];
  for (let i = 0; i < segments - 1; i++) {
    const a = i * 2;
    const b = i * 2 + 1;
    const c = (i + 1) * 2;
    const d = (i + 1) * 2 + 1;
    
    // Two triangles per segment
    indices.push(a, c, b);
    indices.push(b, c, d);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  
  return geometry;
}
```

### 3. Track Features Generation

#### Width Variations
```javascript
function getTrackWidth(t, baseWidth) {
  // Narrow in tight corners, wider on straights
  const curvature = calculateCurvatureAtT(curve, t);
  const widthMultiplier = 1 - (curvature * 0.3); // Reduce width by up to 30%
  return baseWidth * Math.max(0.7, widthMultiplier);
}
```

#### Elevation Profiles
```javascript
// Add elevation changes to control points
function addElevation(points, elevationProfile) {
  return points.map((point, i) => {
    const t = i / (points.length - 1);
    const elevation = elevationProfile(t);
    return new THREE.Vector3(point.x, elevation, point.z);
  });
}

// Example elevation profile
function rollingHills(t) {
  return Math.sin(t * Math.PI * 4) * 20 + Math.cos(t * Math.PI * 2) * 10;
}
```

## Performance Optimization

### 1. LOD (Level of Detail)
```javascript
// Create multiple LODs for track segments
const lod = new THREE.LOD();

// High detail for close segments
const highDetail = generateTrackGeometry(curve, width, 200);
lod.addLevel(new THREE.Mesh(highDetail, material), 0);

// Medium detail
const mediumDetail = generateTrackGeometry(curve, width, 100);
lod.addLevel(new THREE.Mesh(mediumDetail, material), 50);

// Low detail for distant segments
const lowDetail = generateTrackGeometry(curve, width, 50);
lod.addLevel(new THREE.Mesh(lowDetail, material), 100);
```

### 2. Geometry Instancing for Decorations
```javascript
// Instance barriers, signs, etc along track
const barrierGeometry = new THREE.BoxGeometry(1, 2, 0.5);
const barrierMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const barrierMesh = new THREE.InstancedMesh(barrierGeometry, barrierMaterial, 100);

// Place barriers along track edges
for (let i = 0; i < 100; i++) {
  const t = i / 100;
  const point = curve.getPoint(t);
  const tangent = curve.getTangent(t);
  const normal = new THREE.Vector3(0, 1, 0);
  const binormal = new THREE.Vector3().crossVectors(tangent, normal);
  
  const matrix = new THREE.Matrix4();
  const position = point.clone().add(binormal.multiplyScalar(trackWidth / 2 + 1));
  matrix.setPosition(position);
  
  barrierMesh.setMatrixAt(i, matrix);
}
```

## Physics Collision Generation

### Using Cannon-es
```javascript
// Generate physics collision shape from track points
function generatePhysicsTrack(curve, width, segments) {
  const points = curve.getPoints(segments);
  const bodies = [];
  
  for (let i = 0; i < points.length - 1; i++) {
    const start = points[i];
    const end = points[i + 1];
    const center = new CANNON.Vec3(
      (start.x + end.x) / 2,
      (start.y + end.y) / 2,
      (start.z + end.z) / 2
    );
    
    const direction = end.clone().sub(start);
    const length = direction.length();
    
    // Create box shape for segment
    const shape = new CANNON.Box(new CANNON.Vec3(width / 2, 0.5, length / 2));
    const body = new CANNON.Body({
      mass: 0, // Static
      shape: shape,
      position: center
    });
    
    // Orient to match track direction
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction.normalize());
    body.quaternion.copy(quaternion);
    
    bodies.push(body);
  }
  
  return bodies;
}
```

## Modern Examples & Techniques (2024-2025)

### 1. Procedural Track Layouts
Recent implementations use:
- **Voronoi diagrams** for interesting track shapes
- **Perlin noise** for organic curves
- **L-systems** for branching track networks

### 2. Real-time Track Editing
```javascript
// Allow runtime modification of control points
class EditableTrack {
  constructor(points) {
    this.controlPoints = points;
    this.curve = new THREE.CatmullRomCurve3(points);
    this.mesh = null;
  }
  
  updatePoint(index, newPosition) {
    this.controlPoints[index].copy(newPosition);
    this.curve = new THREE.CatmullRomCurve3(this.controlPoints);
    this.regenerateMesh();
  }
  
  regenerateMesh() {
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = generateTrackGeometry(this.curve, 20, 100);
    }
  }
}
```

## Best Practices

1. **Use CatmullRomCurve3** for smooth, natural track layouts
2. **Implement proper banking** based on track curvature
3. **Vary track width** for more interesting gameplay
4. **Generate LODs** for performance on long tracks
5. **Use instancing** for repeated elements (barriers, signs)
6. **Separate visual and physics meshes** for optimization
7. **Consider using ExtrudeGeometry** for complex track cross-sections

## References

- Three.js Documentation: [CatmullRomCurve3](https://threejs.org/docs/#api/en/extras/curves/CatmullRomCurve3)
- Three.js Documentation: [ExtrudeGeometry](https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry)
- GitHub: [YannThorimbert/RacingTrackGenerator](https://github.com/YannThorimbert/RacingTrackGenerator)
- Medium: [Create a Simple Racing Game With Threejs](https://byte-explorer.medium.com/create-a-simple-racing-game-with-threejs-472edcd14e85)