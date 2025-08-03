const o={name:"storm-clouds",description:"Dramatic storm clouds with lightning and turbulent skies",author:"Circuit Beta Upgrade Team",version:"1.0.0",tags:["storm","clouds","lightning","dramatic","weather"],mood:"intense",uniforms:{stormIntensity:{value:.8},lightningFrequency:{value:.05},cloudSpeed:{value:.4}},vertexShader:`
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
    uniform float stormIntensity;
    uniform float lightningFrequency;
    uniform float cloudSpeed;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Hash for randomness
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    // Noise functions for clouds
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
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Storm cloud generation
    float stormClouds(vec2 p, float t) {
      // Animate clouds
      p += vec2(t * cloudSpeed * 0.1, t * cloudSpeed * 0.05);
      
      // Multiple layers for depth
      float clouds = 0.0;
      clouds += fbm(p * 2.0) * 0.5;
      clouds += fbm(p * 4.0 + vec2(100.0)) * 0.3;
      clouds += fbm(p * 8.0 + vec2(200.0)) * 0.2;
      
      // Create dramatic cloud shapes
      clouds = pow(clouds, 1.5) * stormIntensity;
      
      return clouds;
    }
    
    void main() {
      vec3 direction = normalize(vPosition);
      float height = direction.y;
      
      // Base sky colors - dark and moody
      vec3 skyTop = vec3(0.15, 0.15, 0.2);
      vec3 skyMid = vec3(0.1, 0.1, 0.15);
      vec3 skyBottom = vec3(0.05, 0.05, 0.1);
      
      // Sky gradient
      vec3 skyColor = mix(skyBottom, skyMid, smoothstep(-1.0, 0.0, height));
      skyColor = mix(skyColor, skyTop, smoothstep(0.0, 1.0, height));
      
      // Storm clouds
      vec2 cloudCoord = direction.xz / (1.0 + abs(height) * 0.5);
      float cloudDensity = stormClouds(cloudCoord * 3.0, time);
      
      // Cloud colors - dark grays and blues
      vec3 cloudColorDark = vec3(0.02, 0.02, 0.03);
      vec3 cloudColorLight = vec3(0.2, 0.22, 0.25);
      vec3 cloudColor = mix(cloudColorLight, cloudColorDark, cloudDensity);
      
      // Mix clouds with sky
      float cloudCoverage = smoothstep(0.2, 0.8, cloudDensity);
      skyColor = mix(skyColor, cloudColor, cloudCoverage);
      
      // Lightning effect
      float lightningTime = floor(time * 3.0);
      float lightningRandom = hash(lightningTime);
      
      if (lightningRandom < lightningFrequency) {
        float lightningPhase = fract(time * 3.0);
        float lightningIntensity = exp(-lightningPhase * 8.0);
        
        // Lightning flash location
        vec2 lightningPos = vec2(
          hash(lightningTime + 0.1) * 2.0 - 1.0,
          hash(lightningTime + 0.2) * 0.5 - 0.25
        );
        
        float distToLightning = length(direction.xz - lightningPos);
        float lightningGlow = exp(-distToLightning * 2.0) * lightningIntensity;
        
        // Flash color - bright blue-white
        vec3 lightningColor = vec3(0.8, 0.85, 1.0);
        skyColor = mix(skyColor, lightningColor, lightningGlow * 0.7);
        
        // Ambient illumination from lightning
        skyColor += lightningColor * lightningIntensity * 0.1;
      }
      
      // Add some blue ambient light for visibility
      vec3 ambientLight = vec3(0.1, 0.15, 0.25);
      skyColor = max(skyColor, ambientLight * (1.0 - cloudCoverage * 0.5));
      
      // Fog at horizon for depth
      float horizonFog = 1.0 - abs(height);
      vec3 fogColor = vec3(0.15, 0.17, 0.2);
      skyColor = mix(skyColor, fogColor, horizonFog * 0.3);
      
      gl_FragColor = vec4(skyColor, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=storm-clouds-6l7kfk3L.js.map
