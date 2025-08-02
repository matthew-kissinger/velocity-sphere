/**
 * Ocean Depths Skybox
 * Underwater atmosphere with light rays and ocean ambience
 * Pairs with ocean-waves shader for aquatic tracks
 */

export default {
  name: 'ocean-depths',
  description: 'Underwater ocean atmosphere with caustic light',
  author: 'Circuit Beta AI Agent',
  version: '1.0.0',
  tags: ['ocean', 'underwater', 'aquatic', 'blue', 'serene'],
  mood: 'tranquil',
  
  uniforms: {
    surfaceColor: { value: 0.8 },
    depthFade: { value: 0.7 },
    lightRayIntensity: { value: 0.4 }
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
    uniform float surfaceColor;
    uniform float depthFade;
    uniform float lightRayIntensity;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Simple noise for caustic effects
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(mix(hash(i + vec2(0.0, 0.0)), 
                     hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), 
                     hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Ocean depth gradient colors
      vec3 surfaceWater = vec3(0.0, 0.6 * surfaceColor, 0.8 * surfaceColor);
      vec3 midWater = vec3(0.0, 0.3, 0.5);
      vec3 deepWater = vec3(0.0, 0.1, 0.2);
      vec3 abyssWater = vec3(0.0, 0.05, 0.1);
      
      vec3 color;
      if (y > 0.5) {
        // Near surface - lighter blues with sun rays
        float factor = (y - 0.5) / 0.5;
        color = mix(midWater, surfaceWater, factor);
        
        // Add caustic light patterns near surface
        float caustics = noise(direction.xz * 10.0 + time * 0.5);
        caustics = pow(caustics, 2.0);
        color += vec3(0.1, 0.2, 0.3) * caustics * factor * lightRayIntensity;
      } else if (y > 0.0) {
        // Mid water
        float factor = y / 0.5;
        color = mix(deepWater, midWater, factor);
      } else if (y > -0.5) {
        // Deep water
        float factor = (y + 0.5) / 0.5;
        color = mix(abyssWater, deepWater, factor);
      } else {
        // Abyss
        color = abyssWater;
      }
      
      // Add subtle light rays from above
      if (y > -0.3) {
        float rayAngle = dot(direction, vec3(0.0, 1.0, 0.0));
        float rays = pow(max(0.0, rayAngle), 8.0);
        
        // Animate the rays
        rays *= sin(time * 2.0 + direction.x * 5.0) * 0.3 + 0.7;
        rays *= sin(time * 1.5 - direction.z * 4.0) * 0.3 + 0.7;
        
        color += vec3(0.1, 0.15, 0.2) * rays * lightRayIntensity;
      }
      
      // Add particle effect for underwater ambience
      float particles = noise(direction.xy * 50.0 + time * 0.1);
      particles = smoothstep(0.95, 1.0, particles);
      color += vec3(0.05, 0.1, 0.15) * particles;
      
      // Apply depth fade
      color *= depthFade + (1.0 - depthFade) * (y * 0.5 + 0.5);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};