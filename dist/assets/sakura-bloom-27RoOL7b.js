const o={name:"sakura-bloom",description:"Cherry blossom petals flowing across the track",author:"Velocity Sphere Team",version:"1.0.0",tags:["sakura","cherry-blossom","peaceful","circuit-tranquil"],performance:"good",uniforms:{petalColor1:{value:[1,.85,.9]},petalColor2:{value:[.95,.75,.85]},baseColor:{value:[.3,.25,.3]},petalDensity:{value:3},windSpeed:{value:.3},petalSize:{value:.8}},vertexShader:`
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
    uniform vec3 petalColor1;
    uniform vec3 petalColor2;
    uniform vec3 baseColor;
    uniform float petalDensity;
    uniform float windSpeed;
    uniform float petalSize;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float petal(vec2 p, float size) {
      // Create petal shape
      float d = length(p);
      float petal = 1.0 - smoothstep(0.0, size, d);
      petal *= 1.0 - smoothstep(0.0, size * 0.3, abs(p.x));
      return petal;
    }
    
    void main() {
      vec3 color = baseColor;
      
      // Create flowing petals
      for (float i = 0.0; i < 3.0; i++) {
        vec2 offset = vec2(
          sin(time * windSpeed + i * 2.1) * 0.3,
          cos(time * windSpeed * 0.7 + i * 1.7) * 0.2
        );
        
        vec2 petalPos = fract(vWorldPosition.xz * petalDensity + offset + vec2(i * 0.33));
        petalPos = petalPos * 2.0 - 1.0;
        
        float petalMask = petal(petalPos, petalSize);
        
        if (petalMask > 0.1) {
          vec3 petalCol = mix(petalColor2, petalColor1, random(vec2(i, floor(time + i))));
          color = mix(color, petalCol, petalMask * 0.8);
        }
      }
      
      // Add subtle wind streaks
      float streaks = sin(vWorldPosition.x * 10.0 - time * 2.0) * 0.5 + 0.5;
      streaks *= sin(vWorldPosition.z * 8.0 - time * 1.5) * 0.5 + 0.5;
      color = mix(color, petalColor2 * 0.5, streaks * 0.1);
      
      // Soft lighting
      float lighting = dot(vNormal, normalize(vec3(0.5, 1.0, 0.3))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add subtle shimmer
      float shimmer = sin(time * 4.0 + vWorldPosition.x * 20.0) * 0.02 + 1.0;
      color *= shimmer;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=sakura-bloom-27RoOL7b.js.map
