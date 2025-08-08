import{a as o}from"./main-HwdFEI3E.js";const e={name:"ice-surface",description:"Icy surface with frost crystals and reflective shine",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["ice","frost","arctic","winter","slippery"],performance:"medium",uniforms:{iceColor:{value:new o(11591910)},deepIceColor:{value:new o(4620980)},frostColor:{value:new o(15794175)},reflectivity:{value:.8},frostAmount:{value:.5},crackIntensity:{value:.3}},vertexShader:`
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
    uniform vec3 iceColor;
    uniform vec3 deepIceColor;
    uniform vec3 frostColor;
    uniform float reflectivity;
    uniform float frostAmount;
    uniform float crackIntensity;
    // cameraPosition is provided by ShaderManager as a global uniform
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Hash for random
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    // Voronoi for ice cracks
    float voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      vec2 minPoint;
      
      for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
          vec2 neighbor = vec2(float(x), float(y));
          vec2 point = vec2(hash(n + neighbor), hash(n + neighbor + vec2(17.0, 53.0)));
          vec2 diff = neighbor + point - f;
          float dist = length(diff);
          
          if(dist < minDist) {
            minDist = dist;
            minPoint = point;
          }
        }
      }
      
      return minDist;
    }
    
    // Fractal noise for frost
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
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Ice depth variation
      float depth = fbm(uv * 2.0) * 0.5 + 0.5;
      vec3 baseIce = mix(deepIceColor, iceColor, depth);
      
      // Ice cracks pattern
      float cracks = voronoi(uv * 5.0);
      cracks = 1.0 - smoothstep(0.0, 0.1, cracks);
      cracks *= crackIntensity;
      
      // Smaller crack details
      float detailCracks = voronoi(uv * 20.0);
      detailCracks = 1.0 - smoothstep(0.0, 0.05, detailCracks);
      cracks += detailCracks * 0.3 * crackIntensity;
      
      // Frost crystalline patterns
      float frost = fbm(uv * 10.0);
      frost = pow(frost, 2.0);
      
      // Star-like frost crystals
      vec2 polarUv = uv * 50.0;
      float angle = atan(polarUv.y, polarUv.x);
      float crystals = sin(angle * 6.0) * 0.5 + 0.5;
      crystals *= sin(angle * 12.0) * 0.5 + 0.5;
      crystals = pow(crystals, 3.0);
      crystals *= noise(uv * 100.0);
      
      frost = mix(frost, crystals, 0.3);
      frost *= frostAmount;
      
      // Mix ice colors
      vec3 color = baseIce;
      color = mix(color, deepIceColor * 0.7, cracks);
      color = mix(color, frostColor, frost * 0.6);
      
      // Calculate reflections
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 lightDir = normalize(vec3(0.3, 1.0, 0.5));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      // Specular highlights (ice shine)
      float spec = pow(max(dot(vNormal, halfwayDir), 0.0), 128.0);
      color += vec3(0.5, 0.7, 0.9) * spec * reflectivity;
      
      // Fresnel effect for edge glow
      float fresnel = pow(1.0 - dot(viewDir, vNormal), 2.0);
      color += iceColor * fresnel * 0.3 * reflectivity;
      
      // Basic lighting
      float lighting = dot(vNormal, lightDir) * 0.3 + 0.7;
      color *= lighting;
      
      // Add subtle shimmer
      float shimmer = sin(time * 3.0 + fbm(uv * 5.0) * 10.0) * 0.05 + 0.95;
      color *= shimmer;
      
      // Blue tint in shadows
      float shadow = 1.0 - lighting;
      color += deepIceColor * shadow * 0.1;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=ice-surface-Dz-trCEL.js.map
