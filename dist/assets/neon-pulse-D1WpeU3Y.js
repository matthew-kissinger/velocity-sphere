import{a as o}from"./main-BICzC1QX.js";const i={name:"neon-pulse",description:"Pulsing neon surface with electric edge glow",author:"Circuit Epsilon AI Agent",version:"1.0.0",tags:["neon","cyberpunk","underground","glow","pulse"],performance:"good",uniforms:{pulseSpeed:{value:2},neonColor1:{value:new o(65535)},neonColor2:{value:new o(16711935)},baseColor:{value:new o(657930)},edgeGlow:{value:2},pulseIntensity:{value:.8}},vertexShader:`
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
    uniform float pulseSpeed;
    uniform vec3 neonColor1;
    uniform vec3 neonColor2;
    uniform vec3 baseColor;
    uniform float edgeGlow;
    uniform float pulseIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewDirection;
    
    void main() {
      // Edge detection for neon glow
      float edge = 1.0 - abs(dot(vViewDirection, vNormal));
      edge = pow(edge, 1.5) * edgeGlow;
      
      // Pulsing pattern
      float pulse1 = sin(vWorldPosition.x * 0.5 + time * pulseSpeed) * 0.5 + 0.5;
      float pulse2 = sin(vWorldPosition.z * 0.5 - time * pulseSpeed * 0.7) * 0.5 + 0.5;
      float combinedPulse = pulse1 * pulse2;
      
      // Electric flow along track
      float flow = sin(vWorldPosition.x * 2.0 - time * 4.0) * 0.5 + 0.5;
      flow *= sin(vWorldPosition.z * 1.5 - time * 3.0) * 0.5 + 0.5;
      flow = pow(flow, 2.0);
      
      // Mix neon colors based on position and time
      float colorMix = sin(vWorldPosition.x * 0.1 + vWorldPosition.z * 0.1 + time) * 0.5 + 0.5;
      vec3 neonColor = mix(neonColor1, neonColor2, colorMix);
      
      // Base surface color
      vec3 surfaceColor = mix(baseColor, neonColor * 0.3, combinedPulse * pulseIntensity);
      
      // Add edge glow
      vec3 edgeColor = neonColor * edge;
      
      // Add electric flow highlights
      vec3 flowColor = neonColor * flow * 0.4;
      
      // Combine all effects
      vec3 finalColor = surfaceColor + edgeColor + flowColor;
      
      // Add subtle grid pattern
      float grid = sin(vUv.x * 50.0) * sin(vUv.y * 50.0);
      grid = smoothstep(0.9, 1.0, grid) * 0.1;
      finalColor += neonColor * grid;
      
      // Ensure minimum brightness for visibility
      finalColor = max(finalColor, baseColor * 0.2);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};export{i as default};
//# sourceMappingURL=neon-pulse-D1WpeU3Y.js.map
