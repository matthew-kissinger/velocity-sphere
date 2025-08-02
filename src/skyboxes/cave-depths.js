/**
 * Cave Depths Skybox
 * Underground cavern atmosphere with crystal glows
 * Pairs with crystal-surface shader for underground tracks
 */

export default {
  name: 'cave-depths',
  description: 'Deep cave atmosphere with bioluminescent crystals',
  author: 'Circuit Beta AI Agent',
  version: '1.0.0',
  tags: ['cave', 'underground', 'crystal', 'dark', 'mysterious'],
  mood: 'mysterious',
  
  uniforms: {
    crystalGlow: { value: 0.6 },
    caveDepth: { value: 0.8 },
    luminescence: { value: 0.5 }
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
    uniform float crystalGlow;
    uniform float caveDepth;
    uniform float luminescence;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Hash for random crystal placement
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float hash3(vec3 p) {
      return fract(sin(dot(p, vec3(127.1, 311.7, 543.21))) * 43758.5453123);
    }
    
    // Voronoi for crystal clusters
    float voronoi(vec3 p) {
      vec3 n = floor(p);
      vec3 f = fract(p);
      
      float minDist = 1.0;
      vec3 minPoint;
      
      for(int z = -1; z <= 1; z++) {
        for(int y = -1; y <= 1; y++) {
          for(int x = -1; x <= 1; x++) {
            vec3 neighbor = vec3(float(x), float(y), float(z));
            vec3 randomPoint = vec3(
              hash3(n + neighbor),
              hash3(n + neighbor + vec3(17.0, 31.0, 47.0)),
              hash3(n + neighbor + vec3(53.0, 67.0, 83.0))
            );
            vec3 diff = neighbor + randomPoint - f;
            float dist = length(diff);
            
            if(dist < minDist) {
              minDist = dist;
              minPoint = randomPoint;
            }
          }
        }
      }
      
      return minDist;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Cave gradient - darker at top (deep underground)
      vec3 deepColor = vec3(0.02, 0.02, 0.03);    // Almost black
      vec3 midColor = vec3(0.05, 0.05, 0.08);     // Dark blue-grey
      vec3 floorColor = vec3(0.08, 0.06, 0.05);   // Cave floor brown
      
      vec3 color;
      if (y > 0.2) {
        // Cave ceiling
        float factor = (y - 0.2) / 0.8;
        color = mix(midColor, deepColor, factor * caveDepth);
        
        // Stalactites shadow
        float stalactites = voronoi(direction * 20.0);
        stalactites = smoothstep(0.1, 0.3, stalactites);
        color *= stalactites;
      } else if (y > -0.2) {
        // Cave mid-section
        float factor = (y + 0.2) / 0.4;
        color = mix(floorColor, midColor, factor);
      } else {
        // Cave floor
        color = floorColor * (1.0 + y * 0.3);
        
        // Stalagmites shadow
        float stalagmites = voronoi(direction * 15.0);
        stalagmites = smoothstep(0.1, 0.2, stalagmites);
        color *= stalagmites * 0.8 + 0.2;
      }
      
      // Crystal clusters with bioluminescence
      vec3 crystalPos = direction * 10.0;
      float crystals = voronoi(crystalPos);
      crystals = 1.0 - smoothstep(0.0, 0.1, crystals);
      
      // Different crystal colors
      float crystalType = hash3(floor(crystalPos * 2.0));
      vec3 crystalColor;
      if (crystalType < 0.33) {
        crystalColor = vec3(0.3, 0.8, 1.0);  // Cyan crystals
      } else if (crystalType < 0.66) {
        crystalColor = vec3(0.8, 0.3, 1.0);  // Purple crystals
      } else {
        crystalColor = vec3(0.3, 1.0, 0.5);  // Green crystals
      }
      
      // Pulsing glow effect
      float pulse = sin(time * 2.0 + crystalType * 10.0) * 0.3 + 0.7;
      crystalColor *= pulse * crystalGlow;
      
      // Add crystal glow to base color
      color += crystalColor * crystals * luminescence;
      
      // Ambient cave glow from crystals
      float ambientGlow = 0.0;
      for(int i = 0; i < 3; i++) {
        vec3 offset = vec3(
          sin(float(i) * 2.1) * 5.0,
          cos(float(i) * 1.7) * 3.0,
          sin(float(i) * 3.3) * 4.0
        );
        float glow = 1.0 - length(direction - normalize(offset)) * 0.5;
        glow = max(0.0, glow);
        ambientGlow += glow * 0.1;
      }
      color += crystalColor * ambientGlow * 0.3;
      
      // Underground fog/mist
      float mist = hash(direction.xy * 10.0 + time * 0.1);
      mist = smoothstep(0.7, 1.0, mist) * 0.1;
      color += vec3(0.05, 0.05, 0.08) * mist;
      
      // Depth fade for atmosphere
      color *= 1.0 - caveDepth * 0.3;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};