const e={name:"water-ripple",description:"Peaceful water surface with gentle ripples",author:"Velocity Sphere Team",version:"1.0.0",tags:["water","ripple","calm","circuit-tranquil"],performance:"good",uniforms:{waterColor:{value:[.2,.5,.7]},foamColor:{value:[.9,.95,1]},rippleScale:{value:.1},rippleSpeed:{value:.5},reflectivity:{value:.6},transparency:{value:.3}},vertexShader:`
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
    uniform vec3 waterColor;
    uniform vec3 foamColor;
    uniform float rippleScale;
    uniform float rippleSpeed;
    uniform float reflectivity;
    uniform float transparency;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    vec3 getNormal(vec2 p) {
      float h1 = sin(p.x * rippleScale + time * rippleSpeed) * 0.1;
      float h2 = sin(p.y * rippleScale * 1.1 + time * rippleSpeed * 0.9) * 0.1;
      float h3 = sin((p.x + p.y) * rippleScale * 0.7 + time * rippleSpeed * 1.1) * 0.05;
      
      float height = h1 + h2 + h3;
      
      vec2 e = vec2(0.01, 0.0);
      vec3 normal = normalize(vec3(
        height - sin((p.x + e.x) * rippleScale + time * rippleSpeed) * 0.1,
        1.0,
        height - sin((p.y + e.x) * rippleScale * 1.1 + time * rippleSpeed * 0.9) * 0.1
      ));
      
      return normal;
    }
    
    void main() {
      // Calculate ripple normals
      vec3 rippleNormal = getNormal(vWorldPosition.xz);
      vec3 normal = normalize(vNormal + rippleNormal * 0.3);
      
      // Basic water color
      vec3 color = waterColor;
      
      // Add depth variation
      float depth = 1.0 - exp(-vWorldPosition.y * 0.1);
      color = mix(color * 0.7, color, depth);
      
      // Fresnel effect
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - dot(viewDir, normal), 2.0);
      
      // Sky reflection (simple gradient)
      vec3 skyColor = mix(vec3(0.8, 0.85, 0.9), vec3(0.4, 0.6, 0.8), normal.y);
      color = mix(color, skyColor, fresnel * reflectivity);
      
      // Add foam on ripple peaks
      float foam = sin(vWorldPosition.x * rippleScale * 2.0 + time * rippleSpeed) 
                 * sin(vWorldPosition.z * rippleScale * 2.0 + time * rippleSpeed * 0.8);
      foam = smoothstep(0.7, 0.9, foam);
      color = mix(color, foamColor, foam * 0.5);
      
      // Caustics effect
      float caustics = sin(vWorldPosition.x * 0.5 + time) * sin(vWorldPosition.z * 0.5 - time * 0.7);
      caustics = smoothstep(0.0, 1.0, caustics) * 0.2;
      color += vec3(caustics) * waterColor;
      
      // Subtle transparency effect
      float alpha = 1.0 - transparency * (1.0 - fresnel);
      
      gl_FragColor = vec4(color, alpha);
    }
  `};export{e as default};
//# sourceMappingURL=water-ripple-DWCwJCEz.js.map
