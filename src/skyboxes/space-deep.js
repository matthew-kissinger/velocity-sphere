/**
 * Deep Space Skybox
 * Dark space with twinkling stars and nebula
 * Perfect for mysterious/technical tracks
 */

import * as THREE from 'three';

export default {
  name: 'space-deep',
  description: 'Deep space with stars and distant nebula',
  author: 'Velocity Sphere Team',
  version: '1.0.0',
  tags: ['space', 'stars', 'dark', 'mysterious'],
  mood: 'mysterious',
  
  uniforms: {
    starDensity: { value: 100.0 },
    nebulaColor: { value: new THREE.Color(0x001144) },
    starBrightness: { value: 0.8 }
  },
  
  vertexShader: `
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fragmentShader: `
    uniform float time;
    uniform float starDensity;
    uniform vec3 nebulaColor;
    uniform float starBrightness;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise function for stars
    float random(vec3 pos) {
      return fract(sin(dot(pos, vec3(12.9898, 78.233, 54.321))) * 43758.5453);
    }
    
    // Star field generation
    float stars(vec3 direction) {
      vec3 pos = direction * starDensity;
      vec3 floorPos = floor(pos);
      vec3 fractPos = fract(pos);
      
      float star = 0.0;
      for(int x = -1; x <= 1; x++) {
        for(int y = -1; y <= 1; y++) {
          for(int z = -1; z <= 1; z++) {
            vec3 neighbor = floorPos + vec3(x, y, z);
            float rand = random(neighbor);
            
            if(rand > 0.98) { // Only 2% chance for star
              vec3 starPos = neighbor + vec3(random(neighbor * 2.0), random(neighbor * 3.0), random(neighbor * 4.0));
              float dist = length(pos - starPos);
              
              if(dist < 0.1) {
                float brightness = (0.1 - dist) * 10.0;
                brightness *= (0.5 + 0.5 * sin(time * 2.0 + rand * 100.0)); // Twinkling
                star += brightness * starBrightness;
              }
            }
          }
        }
      }
      return star;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      
      // Base space color - very dark
      vec3 spaceColor = vec3(0.001, 0.002, 0.005);
      
      // Add subtle nebula gradient
      float nebulaNoise = sin(direction.x * 2.0) * cos(direction.y * 3.0) * sin(direction.z * 1.5);
      nebulaNoise = (nebulaNoise + 1.0) * 0.5; // Normalize to 0-1
      vec3 nebula = nebulaColor * nebulaNoise * 0.3;
      
      // Add stars
      float starField = stars(direction);
      
      // Combine
      vec3 color = spaceColor + nebula + vec3(starField);
      
      // Add subtle time-based shimmer to nebula
      float shimmer = sin(time * 0.5 + direction.x + direction.y) * 0.02 + 0.98;
      color *= shimmer;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};