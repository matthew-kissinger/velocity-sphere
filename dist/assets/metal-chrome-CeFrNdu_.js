import{a as o}from"./main-DLG0nLvK.js";const e={name:"metal-chrome",description:"Polished chrome surface with metallic reflections",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["metal","chrome","industrial","reflective","factory"],performance:"medium",uniforms:{baseMetalColor:{value:new o(8947848)},highlightColor:{value:new o(16777215)},rustColor:{value:new o(9127187)},reflectivity:{value:.9},roughness:{value:.2},rustAmount:{value:.1}},vertexShader:`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 baseMetalColor;
    uniform vec3 highlightColor;
    uniform vec3 rustColor;
    uniform float reflectivity;
    uniform float roughness;
    uniform float rustAmount;
    uniform vec3 cameraPosition;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    // Hash for procedural patterns
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
    
    // Voronoi for surface imperfections
    float voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      
      for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
          vec2 neighbor = vec2(float(x), float(y));
          vec2 point = vec2(hash(n + neighbor), hash(n + neighbor + vec2(17.0, 31.0)));
          vec2 diff = neighbor + point - f;
          float dist = length(diff);
          minDist = min(minDist, dist);
        }
      }
      
      return minDist;
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
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Metal base with subtle variations
      vec3 metalColor = baseMetalColor;
      
      // Add brushed metal texture
      float brushed = sin(uv.x * 200.0) * 0.02 + sin(uv.y * 200.0) * 0.02;
      brushed += sin(uv.x * 500.0 + uv.y * 500.0) * 0.01;
      metalColor += vec3(brushed);
      
      // Surface imperfections and scratches
      float scratches = 1.0 - smoothstep(0.0, 0.02, voronoi(uv * 50.0));
      scratches *= 0.3;
      metalColor *= 1.0 - scratches * 0.5;
      
      // Rust patches
      float rust = fbm(uv * 10.0);
      rust = smoothstep(0.5, 0.7, rust);
      rust *= rustAmount;
      
      // Rust spreads from edges and low areas
      float edgeFactor = 1.0 - abs(vNormal.y);
      rust *= 1.0 + edgeFactor * 2.0;
      rust = clamp(rust, 0.0, 1.0);
      
      // Mix in rust color
      metalColor = mix(metalColor, rustColor, rust);
      
      // Calculate reflections
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      // Anisotropic highlights for brushed metal look
      float NdotH = dot(vNormal, halfwayDir);
      float anisotropic = pow(NdotH, 128.0 / (1.0 + roughness * 5.0));
      
      // Multiple light sources for industrial feel
      vec3 lightDir2 = normalize(vec3(-0.5, 0.5, -1.0));
      vec3 halfwayDir2 = normalize(lightDir2 + viewDir);
      float NdotH2 = dot(vNormal, halfwayDir2);
      float anisotropic2 = pow(max(NdotH2, 0.0), 64.0 / (1.0 + roughness * 5.0));
      
      // Combine highlights
      vec3 specular = highlightColor * (anisotropic + anisotropic2 * 0.5) * reflectivity;
      specular *= 1.0 - rust; // Rust doesn't reflect
      
      // Environment reflection simulation
      float fresnel = pow(1.0 - dot(viewDir, vNormal), 2.0);
      vec3 envReflection = mix(baseMetalColor * 1.2, highlightColor * 0.8, fresnel);
      envReflection *= reflectivity * 0.3 * (1.0 - rust);
      
      // Combine all components
      vec3 finalColor = metalColor + specular + envReflection;
      
      // Industrial lighting
      float lighting = dot(vNormal, lightDir) * 0.5 + 0.5;
      finalColor *= lighting;
      
      // Add subtle time-based shimmer for polished areas
      float shimmer = sin(time * 2.0 + fbm(uv * 2.0) * 5.0) * 0.02 + 0.98;
      finalColor *= shimmer * (1.0 - rust * 0.5);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=metal-chrome-CeFrNdu_.js.map
