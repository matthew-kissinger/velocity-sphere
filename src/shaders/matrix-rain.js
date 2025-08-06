/**
 * Matrix Rain Shader
 * Digital rain effect inspired by The Matrix
 * Perfect for cyberpunk/digital themed tracks
 */

import * as THREE from 'three';

export default {
  name: 'matrix-rain',
  description: 'Digital rain effect with scrolling characters and green glow',
  author: 'Velocity Sphere Team',
  version: '1.0.0',
  tags: ['matrix', 'digital', 'cyberpunk', 'rain', 'code'],
  performance: 'good',
  
  uniforms: {
    primaryColor: { value: new THREE.Color(0x00ff00) },
    backgroundColor: { value: new THREE.Color(0x000000) },
    rainSpeed: { value: 1.0 }, // Reduced from 2.5 for zen flow
    charDensity: { value: 15.0 },
    brightness: { value: 1.2 }
  },
  
  vertexShader: `
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
  `,
  
  fragmentShader: `
    uniform float time;
    uniform vec3 primaryColor;
    uniform vec3 backgroundColor;
    uniform float rainSpeed;
    uniform float charDensity;
    uniform float brightness;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float character(vec2 uv, float seed) {
      // Create character-like patterns
      vec2 grid = floor(uv * charDensity);
      vec2 cell = fract(uv * charDensity);
      
      float rnd = random(grid + seed);
      
      // Create character shapes
      float char = 0.0;
      if (rnd > 0.5) {
        char = step(0.2, cell.x) * step(cell.x, 0.8) * step(0.1, cell.y) * step(cell.y, 0.9);
      } else {
        char = step(0.1, cell.x) * step(cell.x, 0.9) * step(0.2, cell.y) * step(cell.y, 0.8);
      }
      
      return char;
    }
    
    void main() {
      vec2 uv = vWorldPosition.xz * 0.05;
      
      // Create falling rain columns
      float columns = floor(uv.x * 10.0);
      float columnSeed = random(vec2(columns, 0.0));
      
      // Animate rain falling
      float rainY = uv.y + time * rainSpeed * (0.5 + columnSeed);
      
      // Create multiple layers of rain at different speeds
      float rain1 = character(vec2(uv.x, rainY), time * 0.1);
      float rain2 = character(vec2(uv.x, rainY * 0.7 + 100.0), time * 0.15);
      float rain3 = character(vec2(uv.x, rainY * 1.3 + 200.0), time * 0.08);
      
      // Combine rain layers
      float rain = max(rain1, max(rain2 * 0.7, rain3 * 0.5));
      
      // Add fading effect (brighter at top, darker at bottom)
      float fade = 1.0 - fract(rainY);
      fade = pow(fade, 2.0);
      
      // Create streaming effect
      float stream = sin(rainY * 20.0 - time * 10.0) * 0.5 + 0.5;
      stream = pow(stream, 3.0);
      
      // Combine effects
      float intensity = rain * fade * (0.7 + stream * 0.3) * brightness;
      
      // Color mixing
      vec3 color = mix(backgroundColor, primaryColor, intensity);
      
      // Add glow effect
      color += primaryColor * intensity * 0.3;
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};