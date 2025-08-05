import{a as o}from"./main-DX4kfyFT.js";const i={name:"crystal-surface",description:"Crystalline surface with refractive highlights and ice-like appearance",author:"Velocity Sphere Team",version:"1.0.0",tags:["crystal","ice","refractive","cold","transparent"],performance:"medium",uniforms:{crystalColor:{value:new o(8965375)},highlightColor:{value:new o(16777215)},refractiveIndex:{value:1.5},roughness:{value:.1},transparency:{value:.8}},vertexShader:`
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
    uniform vec3 crystalColor;
    uniform vec3 highlightColor;
    uniform float refractiveIndex;
    uniform float roughness;
    uniform float transparency;
    uniform vec3 cameraPosition;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDirection = normalize(vViewPosition);
      
      // Fresnel effect for crystal-like appearance
      float fresnel = pow(1.0 - dot(normal, viewDirection), 2.0);
      
      // Add some sparkle with noise
      float sparkle = sin(vWorldPosition.x * 50.0) * sin(vWorldPosition.y * 40.0) * sin(vWorldPosition.z * 60.0);
      sparkle = smoothstep(0.8, 1.0, sparkle);
      
      // Create crystal facets
      vec3 facetNormal = normal;
      float facetNoise = sin(vWorldPosition.x * 20.0) * sin(vWorldPosition.z * 20.0);
      facetNormal += vec3(facetNoise * 0.1, 0.0, facetNoise * 0.1);
      facetNormal = normalize(facetNormal);
      
      // Calculate reflection
      vec3 reflected = reflect(-viewDirection, facetNormal);
      
      // Simple environment color (sky-like)
      vec3 envColor = mix(vec3(0.1, 0.3, 0.8), vec3(0.8, 0.9, 1.0), reflected.y * 0.5 + 0.5);
      
      // Mix crystal color with environment reflection
      vec3 color = mix(crystalColor, envColor, fresnel * 0.7);
      
      // Add highlights and sparkles
      color += highlightColor * sparkle * 0.5;
      color += highlightColor * fresnel * 0.3;
      
      // Add subtle time-based shimmer
      float shimmer = sin(time * 3.0 + vWorldPosition.x + vWorldPosition.z) * 0.1 + 0.9;
      color *= shimmer;
      
      // Apply some lighting
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(normal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, transparency);
    }
  `,transparent:!0};export{i as default};
//# sourceMappingURL=crystal-surface-DtThYrzw.js.map
