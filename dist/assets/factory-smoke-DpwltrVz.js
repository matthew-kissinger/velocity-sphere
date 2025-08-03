const o={name:"factory-smoke",description:"Industrial skybox with factory smoke and metallic atmosphere",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["factory","industrial","smoke","metal","urban"],mood:"industrial",uniforms:{smokeIntensity:{value:.7},pollutionLevel:{value:.5},lightPollution:{value:.8}},vertexShader:`
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
    uniform float smokeIntensity;
    uniform float pollutionLevel;
    uniform float lightPollution;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise functions for smoke
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
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for(int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Industrial sky gradient
      vec3 topColor = vec3(0.3, 0.3, 0.35); // Grey-blue polluted sky
      vec3 midColor = vec3(0.4, 0.35, 0.3);  // Brown-grey haze
      vec3 horizonColor = vec3(0.5, 0.4, 0.3); // Industrial orange
      vec3 groundColor = vec3(0.2, 0.15, 0.1); // Dark industrial ground
      
      vec3 color;
      if (y > 0.3) {
        // Upper atmosphere
        float factor = (y - 0.3) / 0.7;
        color = mix(midColor, topColor, factor);
      } else if (y > 0.0) {
        // Mid sky with heavy pollution
        float factor = y / 0.3;
        color = mix(horizonColor, midColor, factor);
      } else if (y > -0.2) {
        // Horizon with smoke stacks
        float factor = (y + 0.2) / 0.2;
        color = mix(groundColor, horizonColor, factor);
        
        // Add smoke stack silhouettes
        float stacks = step(0.95, noise(vec2(direction.x * 10.0, 0.0)));
        stacks *= (1.0 - abs(y) * 5.0); // Only at horizon
        color *= 1.0 - stacks * 0.7;
      } else {
        // Ground
        color = groundColor;
      }
      
      // Add smoke plumes
      vec2 smokeUV = direction.xz * 2.0 + vec2(time * 0.1, -time * 0.3);
      float smoke = fbm(smokeUV);
      smoke = smoothstep(0.3, 0.7, smoke);
      
      // Vertical smoke rise
      float verticalSmoke = fbm(vec2(direction.x * 5.0, y * 2.0 - time * 0.5));
      verticalSmoke *= smoothstep(-0.2, 0.5, y) * smoothstep(1.0, 0.5, y);
      smoke += verticalSmoke * 0.5;
      
      // Apply smoke with transparency based on intensity
      vec3 smokeColor = vec3(0.4, 0.35, 0.3);
      color = mix(color, smokeColor, smoke * smokeIntensity * 0.7);
      
      // Industrial light sources (factory lights)
      if (y < 0.0 && y > -0.3) {
        float lights = noise(direction.xz * 20.0);
        lights = smoothstep(0.8, 0.9, lights);
        vec3 lightColor = vec3(1.0, 0.8, 0.4); // Warm factory lights
        color += lightColor * lights * lightPollution * 0.5;
      }
      
      // Add atmospheric haze
      float haze = 1.0 - exp(-pollutionLevel * 2.0 * (1.0 - abs(y)));
      vec3 hazeColor = vec3(0.5, 0.45, 0.4);
      color = mix(color, hazeColor, haze * 0.3);
      
      // Time of day variation (always somewhat dark/polluted)
      float dayNight = sin(time * 0.1) * 0.1 + 0.7;
      color *= dayNight;
      
      // Add subtle particle effect (ash/soot)
      float particles = noise(direction.xy * 100.0 + time * 0.5);
      particles = smoothstep(0.95, 1.0, particles);
      color -= vec3(0.1) * particles;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=factory-smoke-DpwltrVz.js.map
