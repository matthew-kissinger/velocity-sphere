import{a as o}from"./main-DLG0nLvK.js";const a={name:"aurora-dance",description:"Dancing aurora borealis with magical atmosphere",author:"Velocity Sphere Team",version:"1.0.0",tags:["aurora","magical","lights","mystical"],mood:"magical",uniforms:{auroraColor1:{value:new o(65416)},auroraColor2:{value:new o(35071)},auroraColor3:{value:new o(16729224)},auroraIntensity:{value:1.5},waveSpeed:{value:1}},vertexShader:`
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 auroraColor1;
    uniform vec3 auroraColor2;
    uniform vec3 auroraColor3;
    uniform float auroraIntensity;
    uniform float waveSpeed;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise functions
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for(int i = 0; i < 6; i++) {
        value += amplitude * smoothNoise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Base night sky
      vec3 nightSky = vec3(0.01, 0.02, 0.05);
      vec3 starColor = vec3(0.8, 0.9, 1.0);
      
      // Add stars
      float starNoise = noise(direction.xz * 100.0);
      float stars = smoothstep(0.98, 1.0, starNoise) * 0.5;
      vec3 color = nightSky + starColor * stars;
      
      // Aurora generation - only in upper sky
      if (y > 0.1) {
        // Create flowing aurora patterns
        float wave1 = sin(direction.x * 3.0 + time * waveSpeed) * cos(direction.z * 2.0 + time * waveSpeed * 0.7);
        float wave2 = sin(direction.x * 5.0 + time * waveSpeed * 1.3) * cos(direction.z * 4.0 + time * waveSpeed * 0.9);
        float wave3 = sin(direction.x * 2.0 + time * waveSpeed * 0.6) * cos(direction.z * 3.0 + time * waveSpeed * 1.1);
        
        // Combine waves with noise
        float auroraPattern = (wave1 + wave2 * 0.7 + wave3 * 0.5) / 2.2;
        auroraPattern += fbm(direction.xz * 2.0 + time * 0.2) * 0.3;
        
        // Create height falloff for aurora
        float heightFactor = smoothstep(0.1, 0.8, y) * (1.0 - smoothstep(0.8, 1.0, y));
        
        // Apply aurora effect
        if (auroraPattern > 0.2) {
          float intensity = (auroraPattern - 0.2) * heightFactor * auroraIntensity;
          
          // Mix aurora colors based on pattern and time
          float colorMix1 = sin(time * 0.8 + auroraPattern * 5.0) * 0.5 + 0.5;
          float colorMix2 = cos(time * 1.2 + auroraPattern * 3.0) * 0.5 + 0.5;
          
          vec3 aurora1 = mix(auroraColor1, auroraColor2, colorMix1);
          vec3 aurora2 = mix(auroraColor2, auroraColor3, colorMix2);
          vec3 auroraColor = mix(aurora1, aurora2, sin(time + auroraPattern) * 0.5 + 0.5);
          
          // Add aurora to sky
          color += auroraColor * intensity * 0.3;
          
          // Add glow effect
          color += auroraColor * intensity * 0.1 * (1.0 + sin(time * 2.0) * 0.2);
        }
      }
      
      // Add subtle atmospheric glow near horizon
      if (y < 0.3 && y > -0.2) {
        float horizonGlow = 1.0 - abs(y - 0.05) / 0.35;
        horizonGlow = pow(horizonGlow, 2.0);
        vec3 glowColor = mix(auroraColor1, auroraColor2, sin(time * 0.5) * 0.5 + 0.5);
        color += glowColor * horizonGlow * 0.05;
      }
      
      // Add subtle shimmer
      float shimmer = sin(time * 1.5 + direction.x + direction.z) * 0.03 + 0.97;
      color *= shimmer;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{a as default};
//# sourceMappingURL=aurora-dance-CTogphYt.js.map
