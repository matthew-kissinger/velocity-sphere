import{a as o}from"./main-DLG0nLvK.js";const e={name:"forest-floor",description:"Forest floor with moss, leaves, and natural textures",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["forest","nature","organic","moss","leaves"],performance:"good",uniforms:{mossColor:{value:new o(4881457)},dirtColor:{value:new o(8021072)},leafColor:{value:new o(13148003)},growthSpeed:{value:.3},mossAmount:{value:.5},naturalVariation:{value:.3}},vertexShader:`
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
    uniform vec3 mossColor;
    uniform vec3 dirtColor;
    uniform vec3 leafColor;
    uniform float growthSpeed;
    uniform float mossAmount;
    uniform float naturalVariation;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Voronoi noise for organic patterns
    vec2 hash2(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)),
               dot(p, vec2(269.5, 183.3)));
      return fract(sin(p) * 43758.5453);
    }
    
    float voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      
      for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
          vec2 neighbor = vec2(float(x), float(y));
          vec2 point = hash2(n + neighbor);
          vec2 diff = neighbor + point - f;
          float dist = length(diff);
          minDist = min(minDist, dist);
        }
      }
      
      return minDist;
    }
    
    // Simple noise
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
      
      for(int i = 0; i < 6; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec2 uv = vWorldPosition.xz * 0.15;
      
      // Create base dirt texture
      float dirtPattern = fbm(uv * 5.0) * 0.5 + 0.5;
      
      // Add moss patches using voronoi
      float mossPatch = 1.0 - voronoi(uv * 3.0 + time * growthSpeed * 0.1);
      mossPatch = smoothstep(0.3, 0.7, mossPatch);
      mossPatch *= mossAmount;
      
      // Add smaller moss details
      float mossDetail = fbm(uv * 20.0);
      mossPatch *= 0.7 + mossDetail * 0.3;
      
      // Create leaf scatter pattern
      float leaves = voronoi(uv * 8.0);
      leaves = smoothstep(0.1, 0.2, leaves);
      float leafPattern = 1.0 - leaves;
      leafPattern *= noise(uv * 50.0 + time * 0.1) > 0.7 ? 1.0 : 0.0;
      
      // Mix base colors
      vec3 groundColor = mix(dirtColor, mossColor, mossPatch);
      
      // Add leaves on top
      groundColor = mix(groundColor, leafColor, leafPattern * 0.4);
      
      // Add natural variation
      float variation = fbm(uv * 2.0) * naturalVariation;
      groundColor *= 1.0 - variation * 0.3;
      
      // Add subtle root/twig patterns
      float roots = 1.0 - smoothstep(0.0, 0.1, voronoi(uv * 15.0));
      roots *= noise(uv * 100.0);
      groundColor *= 1.0 - roots * 0.2;
      
      // Apply lighting with forest ambiance - brighter overall
      vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
      float lighting = dot(vNormal, lightDir) * 0.2 + 0.9; // Increased ambient light
      groundColor *= lighting;
      
      // Add dappled sunlight effect - more prominent
      float sunlight = noise(uv * 2.0 + time * growthSpeed * 0.5);
      sunlight = smoothstep(0.6, 0.8, sunlight);
      groundColor += vec3(0.3, 0.25, 0.1) * sunlight * 0.4; // Brighter sunlight patches
      
      // Subtle color variation over time (seasons)
      float seasonal = sin(time * growthSpeed * 0.2) * 0.1 + 0.9;
      groundColor *= seasonal;
      
      gl_FragColor = vec4(groundColor, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=forest-floor-VhCgMpgW.js.map
