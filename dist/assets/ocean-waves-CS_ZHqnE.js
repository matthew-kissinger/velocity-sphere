import{a as e}from"./main-Cs0LCGsf.js";const a={name:"ocean-waves",description:"Dynamic ocean waves with flowing water and foam",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["ocean","water","waves","aquatic","flowing"],performance:"good",uniforms:{deepColor:{value:new e(13158)},shallowColor:{value:new e(39372)},foamColor:{value:new e(13434879)},waveSpeed:{value:.8},waveFrequency:{value:2},waveAmplitude:{value:.3}},vertexShader:`
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
    uniform vec3 deepColor;
    uniform vec3 shallowColor;
    uniform vec3 foamColor;
    uniform float waveSpeed;
    uniform float waveFrequency;
    uniform float waveAmplitude;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Simple noise function
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
      
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec2 uv = vWorldPosition.xz * 0.05;
      
      // Create flowing water effect
      vec2 flow1 = uv + vec2(time * waveSpeed * 0.3, time * waveSpeed * 0.1);
      vec2 flow2 = uv + vec2(-time * waveSpeed * 0.2, time * waveSpeed * 0.15);
      
      // Generate wave patterns
      float wave1 = sin(flow1.x * waveFrequency + flow1.y * waveFrequency * 0.5) * waveAmplitude;
      float wave2 = sin(flow2.x * waveFrequency * 1.5 - flow2.y * waveFrequency * 0.7) * waveAmplitude * 0.7;
      float wavePattern = wave1 + wave2;
      
      // Add noise for more organic look
      float noisePattern = fbm(flow1 * 3.0) * 0.3;
      wavePattern += noisePattern;
      
      // Create foam on wave peaks
      float foam = smoothstep(0.7, 0.9, wavePattern);
      foam += smoothstep(0.5, 0.6, fbm(flow1 * 8.0)) * 0.3;
      
      // Depth-based color mixing
      float depth = fbm(uv * 2.0) * 0.5 + 0.5;
      vec3 waterColor = mix(deepColor, shallowColor, depth + wavePattern * 0.3);
      
      // Add foam to final color
      vec3 color = mix(waterColor, foamColor, foam * 0.6);
      
      // Add subtle animation to brightness
      float pulse = sin(time * 2.0 + wavePattern * 5.0) * 0.1 + 0.9;
      color *= pulse;
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add some specular highlights for water shine
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(vNormal, halfwayDir), 0.0), 32.0);
      color += vec3(0.2, 0.3, 0.4) * spec * 0.5;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{a as default};
//# sourceMappingURL=ocean-waves-CS_ZHqnE.js.map
