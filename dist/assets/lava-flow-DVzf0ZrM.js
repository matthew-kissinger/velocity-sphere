import{a as o}from"./main-DLG0nLvK.js";const e={name:"lava-flow",description:"Molten lava surface with flowing patterns and heat glow",author:"Velocity Sphere Team",version:"1.0.0",tags:["lava","fire","volcanic","hot","glowing"],performance:"medium",uniforms:{lavaColor:{value:new o(16729088)},crackColor:{value:new o(16776960)},cooledColor:{value:new o(3342336)},flowSpeed:{value:.5},heatIntensity:{value:2},crackSize:{value:.3}},vertexShader:`
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
    uniform vec3 lavaColor;
    uniform vec3 crackColor;
    uniform vec3 cooledColor;
    uniform float flowSpeed;
    uniform float heatIntensity;
    uniform float crackSize;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Noise functions
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      for(int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Create flowing lava pattern
      vec2 flowUV = uv + vec2(time * flowSpeed * 0.3, time * flowSpeed * 0.1);
      float lavaPattern = fbm(flowUV * 3.0);
      
      // Create cracks pattern
      float cracks = fbm(uv * 8.0);
      cracks = smoothstep(crackSize, crackSize + 0.1, cracks);
      
      // Create heat waves
      float heatWave = sin(time * 4.0 + lavaPattern * 10.0) * 0.5 + 0.5;
      heatWave = pow(heatWave, 2.0);
      
      // Mix colors based on patterns
      vec3 baseColor = mix(cooledColor, lavaColor, lavaPattern);
      
      // Add glowing cracks
      vec3 color = mix(baseColor, crackColor, cracks * heatWave);
      
      // Add heat glow
      color += lavaColor * heatWave * heatIntensity * 0.3;
      
      // Add pulsing effect
      float pulse = sin(time * 2.0 + lavaPattern * 5.0) * 0.2 + 0.8;
      color *= pulse;
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add emissive glow for hot areas
      float emission = max(0.0, lavaPattern - 0.3) * heatIntensity;
      color += lavaColor * emission * 0.5;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=lava-flow-DVzf0ZrM.js.map
