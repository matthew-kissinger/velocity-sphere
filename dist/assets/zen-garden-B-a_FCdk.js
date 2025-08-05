const o={name:"zen-garden",description:"Raked sand patterns with gentle flow",author:"Velocity Sphere Team",version:"1.0.0",tags:["zen","sand","peaceful","circuit-tranquil"],performance:"good",uniforms:{sandColor1:{value:[.95,.92,.88]},sandColor2:{value:[.88,.85,.8]},rakeWidth:{value:.15},rakeDepth:{value:.3},flowSpeed:{value:.1},patternScale:{value:.05}},vertexShader:`
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
    uniform vec3 sandColor1;
    uniform vec3 sandColor2;
    uniform float rakeWidth;
    uniform float rakeDepth;
    uniform float flowSpeed;
    uniform float patternScale;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    void main() {
      // Create flowing rake patterns
      float pattern = sin((vWorldPosition.x + vWorldPosition.z * 0.5) * patternScale + time * flowSpeed);
      pattern += sin((vWorldPosition.x * 0.7 - vWorldPosition.z) * patternScale * 1.3 + time * flowSpeed * 0.7) * 0.5;
      pattern = smoothstep(-rakeWidth, rakeWidth, pattern);
      
      // Add subtle sand texture
      float sand = random(vWorldPosition.xz * 0.1);
      sand = mix(0.9, 1.1, sand);
      
      // Blend between sand colors based on pattern
      vec3 color = mix(sandColor2, sandColor1, pattern);
      color *= sand;
      
      // Soft lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 2.0, 0.5))) * 0.4 + 0.6;
      color *= lighting;
      
      // Add depth to rakes
      float rakeShading = 1.0 - (1.0 - pattern) * rakeDepth;
      color *= rakeShading;
      
      // Subtle ambient occlusion in rakes
      color *= mix(0.85, 1.0, pattern);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=zen-garden-B-a_FCdk.js.map
