import{a as o}from"./main-BYuQSTlm.js";const t={name:"cyber-tunnel",description:"Dark tunnel surface with flowing data streams",author:"Circuit Epsilon AI Agent",version:"1.0.0",tags:["cyber","tunnel","data","dark","underground"],performance:"good",uniforms:{dataColor1:{value:new o(65416)},dataColor2:{value:new o(35071)},wallColor:{value:new o(328965)},streamSpeed:{value:3},streamDensity:{value:5},glowIntensity:{value:1.5}},vertexShader:`
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
    uniform vec3 dataColor1;
    uniform vec3 dataColor2;
    uniform vec3 wallColor;
    uniform float streamSpeed;
    uniform float streamDensity;
    uniform float glowIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    
    float dataStream(vec2 pos, float offset) {
      float stream = sin(pos.y * streamDensity - time * streamSpeed + offset);
      stream = smoothstep(0.5, 1.0, stream);
      
      // Add binary data effect
      float binary = step(0.5, hash(floor(pos * 20.0 + vec2(0.0, time * streamSpeed))));
      stream *= 0.7 + binary * 0.3;
      
      return stream;
    }
    
    void main() {
      // Base tunnel wall color
      vec3 color = wallColor;
      
      // Create multiple data streams
      vec2 streamPos = vWorldPosition.xz * 0.1;
      
      // Vertical data streams on walls
      float stream1 = dataStream(streamPos, 0.0);
      float stream2 = dataStream(streamPos + vec2(0.5, 0.0), 3.14);
      float stream3 = dataStream(streamPos + vec2(1.0, 0.0), 6.28);
      
      // Combine streams with different colors
      vec3 dataGlow = vec3(0.0);
      dataGlow += dataColor1 * stream1 * 0.8;
      dataGlow += dataColor2 * stream2 * 0.6;
      dataGlow += mix(dataColor1, dataColor2, 0.5) * stream3 * 0.4;
      
      // Add horizontal scan lines
      float scanline = sin(vWorldPosition.y * 50.0 + time * 2.0);
      scanline = smoothstep(0.8, 1.0, scanline) * 0.3;
      dataGlow += mix(dataColor1, dataColor2, 0.5) * scanline;
      
      // Circuit board pattern
      float circuit = 0.0;
      vec2 circuitUV = vUv * 30.0;
      float circuitH = smoothstep(0.48, 0.5, abs(fract(circuitUV.x) - 0.5));
      float circuitV = smoothstep(0.48, 0.5, abs(fract(circuitUV.y) - 0.5));
      circuit = max(circuitH, circuitV) * 0.2;
      
      // Add circuit pattern with data flow
      vec3 circuitColor = mix(dataColor1, dataColor2, sin(time) * 0.5 + 0.5);
      color += circuitColor * circuit;
      
      // Apply data glow
      color += dataGlow * glowIntensity;
      
      // Depth-based fog for tunnel atmosphere
      float depth = length(vWorldPosition - cameraPosition) * 0.01;
      color = mix(color, wallColor * 0.5, smoothstep(0.0, 1.0, depth));
      
      // Ensure minimum visibility
      color = max(color, wallColor * 0.1);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{t as default};
//# sourceMappingURL=cyber-tunnel-AyK8TJwZ.js.map
