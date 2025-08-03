import{a as e}from"./main-Dd-xMgWp.js";const i={name:"sand-dunes",description:"Desert sand surface with dune patterns and heat effects",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["sand","desert","dunes","heat","sandy"],performance:"good",uniforms:{sandColor:{value:new e(16032864)},shadowColor:{value:new e(13468991)},highlightColor:{value:new e(16766720)},heatSpeed:{value:.5},duneScale:{value:3},shimmerIntensity:{value:.3}},vertexShader:`
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
    uniform vec3 sandColor;
    uniform vec3 shadowColor;
    uniform vec3 highlightColor;
    uniform float heatSpeed;
    uniform float duneScale;
    uniform float shimmerIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Noise functions for sand texture
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
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Create dune patterns
      float dunes = fbm(uv * duneScale) * 0.5 + 0.5;
      dunes = pow(dunes, 1.5); // Make dunes more pronounced
      
      // Add finer sand texture
      float sandTexture = fbm(uv * 20.0) * 0.3;
      
      // Create ripples on sand surface
      float ripples = sin(uv.x * 30.0 + uv.y * 10.0) * 0.05;
      ripples += sin(uv.x * 50.0 - uv.y * 20.0) * 0.03;
      
      // Combine patterns
      float pattern = dunes + sandTexture + ripples;
      
      // Mix colors based on pattern
      vec3 color = mix(shadowColor, sandColor, pattern);
      
      // Add highlights on dune peaks
      float highlights = smoothstep(0.7, 0.9, dunes);
      color = mix(color, highlightColor, highlights * 0.3);
      
      // Heat shimmer effect
      float shimmer = sin(time * heatSpeed * 10.0 + pattern * 20.0) * shimmerIntensity;
      shimmer *= (1.0 - vNormal.y) * 0.5; // More shimmer on slopes
      color += vec3(shimmer * 0.1, shimmer * 0.05, 0.0);
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 0.5))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add subtle sparkle effect (like sun on sand crystals)
      float sparkle = pow(noise(uv * 100.0 + time * 0.1), 8.0);
      color += vec3(0.2, 0.15, 0.1) * sparkle;
      
      // Heat haze distortion at distance
      float distanceFactor = length(vWorldPosition.xz) * 0.01;
      color += vec3(0.1, 0.05, 0.0) * sin(distanceFactor + time * heatSpeed) * shimmerIntensity * 0.5;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{i as default};
//# sourceMappingURL=sand-dunes-D3JPZGrM.js.map
