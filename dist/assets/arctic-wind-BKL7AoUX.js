const o={name:"arctic-wind",description:"Bright arctic sky with wind-blown snow and ice crystals",author:"Circuit Beta Upgrade Team",version:"1.0.0",tags:["arctic","ice","snow","bright","wind"],mood:"crisp",uniforms:{snowIntensity:{value:.7},windStrength:{value:.5},crystalSparkle:{value:.8}},vertexShader:`
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
    uniform float snowIntensity;
    uniform float windStrength;
    uniform float crystalSparkle;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Hash functions for randomness
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    vec3 hash3(vec3 p) {
      vec3 h = vec3(
        dot(p, vec3(127.1, 311.7, 74.7)),
        dot(p, vec3(269.5, 183.3, 246.1)),
        dot(p, vec3(113.5, 271.9, 124.6))
      );
      return fract(sin(h) * 43758.5453123);
    }
    
    // Simple noise for wind patterns
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(
        mix(hash2(i + vec2(0.0, 0.0)), hash2(i + vec2(1.0, 0.0)), u.x),
        mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }
    
    // Blowing snow particles
    float snowParticles(vec3 pos, float t) {
      // Wind movement
      pos.x += t * windStrength * 2.0;
      pos.z += sin(t * 0.3) * windStrength;
      
      vec3 id = floor(pos * 10.0);
      vec3 f = fract(pos * 10.0);
      vec3 rnd = hash3(id);
      
      // Particle position within cell
      vec3 particlePos = rnd;
      particlePos.x += sin(t * 2.0 + rnd.y * 6.28) * 0.1;
      particlePos.y += cos(t * 1.5 + rnd.z * 6.28) * 0.1;
      
      float dist = length(f - particlePos);
      float particle = smoothstep(0.1, 0.0, dist);
      
      return particle * snowIntensity;
    }
    
    void main() {
      vec3 direction = normalize(vPosition);
      float height = direction.y;
      
      // Bright arctic sky gradient
      vec3 skyTop = vec3(0.85, 0.9, 0.95);
      vec3 skyHorizon = vec3(0.9, 0.92, 0.95);
      vec3 skyBottom = vec3(0.8, 0.82, 0.85);
      
      // Sky color based on height
      vec3 skyColor = mix(skyBottom, skyHorizon, smoothstep(-1.0, 0.0, height));
      skyColor = mix(skyColor, skyTop, smoothstep(0.0, 1.0, height));
      
      // Sun glow for brightness
      vec3 sunDir = normalize(vec3(0.3, 0.4, 0.5));
      float sunDot = dot(direction, sunDir);
      float sunGlow = pow(max(sunDot, 0.0), 50.0);
      vec3 sunColor = vec3(1.0, 0.98, 0.95);
      skyColor += sunColor * sunGlow * 0.5;
      
      // Arctic haze/mist
      float mist = noise(direction.xz * 3.0 + time * 0.1) * 0.3;
      vec3 mistColor = vec3(0.95, 0.97, 1.0);
      skyColor = mix(skyColor, mistColor, mist * smoothstep(0.2, -0.2, height));
      
      // Blowing snow effect
      float snow = 0.0;
      for (int i = 0; i < 3; i++) {
        float layerSpeed = 1.0 + float(i) * 0.5;
        vec3 snowPos = vWorldPosition * (0.5 + float(i) * 0.3);
        snow += snowParticles(snowPos, time * layerSpeed) * (1.0 / float(i + 1));
      }
      skyColor = mix(skyColor, vec3(1.0), snow * 0.8);
      
      // Ice crystal sparkles
      vec2 sparkleCoord = direction.xy * 50.0;
      float sparkleNoise = hash2(floor(sparkleCoord));
      float sparkle = 0.0;
      
      if (sparkleNoise > 0.95) {
        float sparklePhase = fract(time * 2.0 + sparkleNoise * 10.0);
        sparkle = sin(sparklePhase * 3.14159) * crystalSparkle;
      }
      
      skyColor += vec3(1.0) * sparkle * 0.3;
      
      // Ground reflection
      if (height < -0.3) {
        float groundBlend = smoothstep(-0.3, -1.0, height);
        vec3 iceColor = vec3(0.88, 0.92, 0.96);
        skyColor = mix(skyColor, iceColor, groundBlend * 0.5);
      }
      
      // Ensure high brightness for visibility
      skyColor = max(skyColor, vec3(0.7));
      
      gl_FragColor = vec4(skyColor, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=arctic-wind-BKL7AoUX.js.map
