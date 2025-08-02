/**
 * Crystal Cavern Skybox
 * Vibrant underground atmosphere with glowing crystals
 * Bright and colorful cave environment
 */

export default {
  name: 'crystal-cavern',
  description: 'Vibrant crystal cave with bioluminescent glow',
  author: 'Circuit Beta Fix Team',
  version: '1.0.0',
  tags: ['crystal', 'cave', 'vibrant', 'glow', 'underground'],
  mood: 'mystical',
  
  uniforms: {
    crystalGlow: { value: 0.8 },
    colorShift: { value: 0.5 },
    pulseSpeed: { value: 1.0 }
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
    uniform float colorShift;
    uniform float pulseSpeed;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Hash for randomness
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    vec3 hash3(vec2 p) {
      vec3 p3 = vec3(p.xyx) * vec3(443.8975, 397.2973, 491.1871);
      p3 = fract(p3 * 0.1031);
      p3 += dot(p3, p3.yxz + 19.19);
      return fract((p3.xxy + p3.yxx) * p3.zyx);
    }
    
    // Crystal pattern
    float crystalPattern(vec2 p) {
      vec2 id = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      
      // Check neighboring cells for crystal positions
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          vec2 neighbor = vec2(float(x), float(y));
          vec3 rnd = hash3(id + neighbor);
          vec2 crystalPos = neighbor + rnd.xy;
          
          float dist = length(f - crystalPos);
          minDist = min(minDist, dist);
        }
      }
      
      return 1.0 - smoothstep(0.0, 0.3, minDist);
    }
    
    void main() {
      vec3 direction = normalize(vPosition);
      float height = direction.y;
      
      // Base gradient - vibrant purple to blue
      vec3 topColor = vec3(0.4, 0.2, 0.8);
      vec3 midColor = vec3(0.2, 0.4, 0.9);
      vec3 bottomColor = vec3(0.1, 0.6, 0.8);
      
      vec3 baseColor = mix(bottomColor, midColor, smoothstep(-1.0, 0.0, height));
      baseColor = mix(baseColor, topColor, smoothstep(0.0, 1.0, height));
      
      // Crystal clusters
      vec2 sphereCoord = direction.xz / (1.0 + abs(height) * 0.5);
      float crystals = crystalPattern(sphereCoord * 8.0);
      
      // Pulsing glow
      float pulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      float glow = crystals * crystalGlow * (0.7 + pulse * 0.3);
      
      // Crystal colors - vibrant and varied
      vec3 crystalColors[5];
      crystalColors[0] = vec3(1.0, 0.3, 0.5); // Pink
      crystalColors[1] = vec3(0.3, 1.0, 0.8); // Cyan
      crystalColors[2] = vec3(0.8, 0.5, 1.0); // Purple
      crystalColors[3] = vec3(0.5, 1.0, 0.3); // Green
      crystalColors[4] = vec3(1.0, 0.8, 0.3); // Gold
      
      // Pick crystal color based on position
      float colorIndex = hash(floor(sphereCoord * 8.0)) * 5.0;
      int idx = int(colorIndex);
      vec3 crystalColor = crystalColors[0];
      if (idx == 1) crystalColor = crystalColors[1];
      else if (idx == 2) crystalColor = crystalColors[2];
      else if (idx == 3) crystalColor = crystalColors[3];
      else if (idx == 4) crystalColor = crystalColors[4];
      
      // Mix crystal glow with base
      vec3 finalColor = mix(baseColor, crystalColor, glow);
      
      // Add ambient glow to entire cave
      vec3 ambientGlow = vec3(0.3, 0.4, 0.6);
      finalColor += ambientGlow * 0.3;
      
      // Bioluminescent particles
      float particles = 0.0;
      for (int i = 0; i < 3; i++) {
        vec2 pCoord = sphereCoord * (10.0 + float(i) * 5.0) + time * 0.05 * float(i + 1);
        float p = smoothstep(0.98, 1.0, hash(floor(pCoord)));
        particles += p;
      }
      finalColor += vec3(0.5, 0.8, 1.0) * particles * 0.5;
      
      // Ensure brightness
      finalColor = max(finalColor, vec3(0.2, 0.3, 0.4));
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};