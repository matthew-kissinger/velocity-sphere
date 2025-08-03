import{a as i}from"./main-Bb_eCFll.js";const o={name:"tech-grid",description:"Futuristic grid pattern with neon highlights and data streams",author:"Velocity Sphere Team",version:"1.0.0",tags:["tech","grid","cyberpunk","neon","futuristic"],performance:"good",uniforms:{gridScale:{value:20},gridColor:{value:new i(65535)},backgroundColor:{value:new i(4386)},pulseSpeed:{value:2},lineWidth:{value:.1}},vertexShader:`
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
    uniform float gridScale;
    uniform vec3 gridColor;
    uniform vec3 backgroundColor;
    uniform float pulseSpeed;
    uniform float lineWidth;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float grid(vec2 uv, float scale) {
      vec2 grid = abs(fract(uv * scale) - 0.5) / fwidth(uv * scale);
      float line = min(grid.x, grid.y);
      return 1.0 - min(line, 1.0);
    }
    
    void main() {
      // Create grid coordinates from world position
      vec2 gridUV = vWorldPosition.xz * 0.1;
      
      // Create main grid
      float mainGrid = grid(gridUV, gridScale);
      
      // Create secondary grid for detail
      float detailGrid = grid(gridUV, gridScale * 4.0) * 0.3;
      
      // Animate grid intensity
      float pulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      
      // Add data stream effect
      float stream1 = sin(gridUV.x * 10.0 - time * 5.0) * 0.5 + 0.5;
      float stream2 = sin(gridUV.y * 8.0 - time * 3.0) * 0.5 + 0.5;
      float streams = (stream1 + stream2) * 0.2;
      
      // Combine grid elements
      float gridIntensity = mainGrid + detailGrid + streams;
      gridIntensity *= (0.7 + pulse * 0.3);
      
      // Mix colors
      vec3 color = mix(backgroundColor, gridColor, gridIntensity);
      
      // Add lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add glow effect on grid lines
      color += gridColor * gridIntensity * 0.3;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=tech-grid-zQ3rrrt2.js.map
