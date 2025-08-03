const o={name:"rainbow-flow",description:"Classic rainbow track with flowing color transitions",author:"Velocity Sphere Team",version:"1.0.0",tags:["rainbow","flow","classic","circuit-alpha"],performance:"good",uniforms:{colorSpeed:{value:1},flowSpeed:{value:.5},intensity:{value:1},saturation:{value:.8}},vertexShader:`
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
    uniform float colorSpeed;
    uniform float flowSpeed;
    uniform float intensity;
    uniform float saturation;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
    
    void main() {
      // Create flowing rainbow based on world position and time
      float hue = fract((vWorldPosition.x + vWorldPosition.z) * 0.05 + time * flowSpeed);
      hue = fract(hue + time * colorSpeed * 0.1);
      
      // Add some noise for visual interest
      float noise = sin(vWorldPosition.x * 0.1) * sin(vWorldPosition.z * 0.1) * 0.1;
      hue += noise;
      
      // Convert HSV to RGB
      vec3 color = hsv2rgb(vec3(hue, saturation, intensity));
      
      // Add some lighting based on normal
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add subtle glow effect
      float glow = 1.0 + sin(time * 2.0 + hue * 6.28) * 0.1;
      color *= glow;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=rainbow-flow-CsUtk9Bs.js.map
