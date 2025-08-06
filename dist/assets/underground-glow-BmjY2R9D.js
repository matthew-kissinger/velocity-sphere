import{a as o}from"./main-BICzC1QX.js";const i={name:"underground-glow",description:"Glowing rails for enhanced visibility in dark tunnels",author:"Circuit Epsilon AI Agent",version:"1.0.0",tags:["glow","rails","underground","visibility","dark"],performance:"excellent",uniforms:{glowColor1:{value:new o(65450)},glowColor2:{value:new o(16711850)},coreColor:{value:new o(16777215)},surfaceColor:{value:new o(4386)},glowIntensity:{value:2.5},pulseSpeed:{value:2},edgeWidth:{value:.15}},vertexShader:`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDirection = normalize(-mvPosition.xyz);
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 glowColor1;
    uniform vec3 glowColor2;
    uniform vec3 coreColor;
    uniform vec3 surfaceColor;
    uniform float glowIntensity;
    uniform float pulseSpeed;
    uniform float edgeWidth;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    
    void main() {
      // Calculate edge distance for rail glow
      float edgeDistance = min(vUv.x, 1.0 - vUv.x);
      
      // Create glowing rail edges
      float railGlow = 1.0 - smoothstep(0.0, edgeWidth, edgeDistance);
      
      // Pulse effect
      float pulse = sin(vWorldPosition.x * 0.2 + time * pulseSpeed) * 0.3 + 0.7;
      
      // Color mixing based on position
      float colorMix = sin(vWorldPosition.x * 0.1 + vWorldPosition.z * 0.1 + time * 0.5) * 0.5 + 0.5;
      vec3 glowColor = mix(glowColor1, glowColor2, colorMix);
      
      // Core glow (bright center of rails)
      float coreGlow = 1.0 - smoothstep(0.0, edgeWidth * 0.5, edgeDistance);
      
      // Base surface
      vec3 color = surfaceColor;
      
      // Add rail glow
      vec3 railColor = mix(glowColor, coreColor, coreGlow * 0.5);
      color += railColor * railGlow * glowIntensity * pulse;
      
      // Fresnel edge glow for additional visibility
      float fresnel = 1.0 - abs(dot(vViewDirection, vNormal));
      fresnel = pow(fresnel, 2.0);
      color += glowColor * fresnel * 0.3;
      
      // Center line marking
      float centerLine = 1.0 - smoothstep(0.48, 0.52, vUv.x);
      color += glowColor * centerLine * 0.2;
      
      // Energy flow effect along rails
      float flow = sin(vWorldPosition.x * 5.0 - time * 8.0);
      flow = smoothstep(0.5, 1.0, flow) * railGlow;
      color += glowColor * flow * 0.3;
      
      // Direction indicators (arrows)
      float arrow = mod(vWorldPosition.x * 0.5 - time * 2.0, 2.0);
      arrow = smoothstep(0.0, 0.2, arrow) * (1.0 - smoothstep(0.8, 1.0, arrow));
      arrow *= centerLine;
      color += coreColor * arrow * 0.5;
      
      // Ensure minimum visibility
      color = max(color, surfaceColor * 0.2 + glowColor * 0.1);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{i as default};
//# sourceMappingURL=underground-glow-BmjY2R9D.js.map
