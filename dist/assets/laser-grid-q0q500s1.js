import{a as o}from"./main-HwdFEI3E.js";const e={name:"laser-grid",description:"Bright laser grid with high-tech appearance",author:"Circuit Epsilon AI Agent",version:"1.0.0",tags:["laser","grid","bright","technical","underground"],performance:"excellent",uniforms:{laserColor1:{value:new o(65535)},laserColor2:{value:new o(16776960)},backgroundColor:{value:new o(1297)},gridSize:{value:15},laserWidth:{value:.05},pulseSpeed:{value:3},brightness:{value:2}},vertexShader:`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 laserColor1;
    uniform vec3 laserColor2;
    uniform vec3 backgroundColor;
    uniform float gridSize;
    uniform float laserWidth;
    uniform float pulseSpeed;
    uniform float brightness;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float laserLine(float coord, float width) {
      float line = abs(fract(coord) - 0.5);
      return 1.0 - smoothstep(0.0, width, line);
    }
    
    void main() {
      // Create grid coordinates
      vec2 gridCoord = vWorldPosition.xz / gridSize;
      
      // Create laser lines
      float lineX = laserLine(gridCoord.x, laserWidth);
      float lineZ = laserLine(gridCoord.y, laserWidth);
      
      // Combine lines
      float grid = max(lineX, lineZ);
      
      // Intersection points glow brighter
      float intersection = lineX * lineZ;
      grid += intersection * 0.5;
      
      // Animated pulse along lines
      float pulseX = sin(gridCoord.x * 10.0 - time * pulseSpeed) * 0.5 + 0.5;
      float pulseZ = sin(gridCoord.y * 10.0 - time * pulseSpeed * 0.8) * 0.5 + 0.5;
      float pulse = (pulseX + pulseZ) * 0.5;
      
      // Color variation based on position
      float colorMix = sin(vWorldPosition.x * 0.05 + vWorldPosition.z * 0.05 + time * 0.5) * 0.5 + 0.5;
      vec3 laserColor = mix(laserColor1, laserColor2, colorMix);
      
      // Base color
      vec3 color = backgroundColor;
      
      // Add laser grid
      color += laserColor * grid * brightness * (0.7 + pulse * 0.3);
      
      // Add glow around laser lines
      float glowX = 1.0 - smoothstep(0.0, laserWidth * 4.0, abs(fract(gridCoord.x) - 0.5));
      float glowZ = 1.0 - smoothstep(0.0, laserWidth * 4.0, abs(fract(gridCoord.y) - 0.5));
      float glow = max(glowX, glowZ) * 0.3;
      color += laserColor * glow;
      
      // Add scanning beam effect
      float scanBeam = sin(vWorldPosition.x * 0.5 - time * 5.0);
      scanBeam = smoothstep(0.95, 1.0, scanBeam);
      color += laserColor * scanBeam * 0.5;
      
      // Energy field between grid lines
      float energy = sin(gridCoord.x * 20.0) * sin(gridCoord.y * 20.0);
      energy = smoothstep(0.8, 1.0, energy) * 0.1;
      color += laserColor * energy;
      
      // Ensure high visibility
      color = max(color, backgroundColor * 0.3);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=laser-grid-q0q500s1.js.map
