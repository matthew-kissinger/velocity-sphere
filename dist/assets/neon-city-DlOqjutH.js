import{a as o}from"./main-CwcjnyxM.js";const e={name:"neon-city",description:"Cyberpunk city atmosphere with neon lights",author:"Velocity Sphere Team",version:"1.0.0",tags:["cyberpunk","neon","city","futuristic"],mood:"futuristic",uniforms:{neonColor1:{value:new o(65535)},neonColor2:{value:new o(16711935)},cityHeight:{value:.2},fogDensity:{value:.3}},vertexShader:`
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 neonColor1;
    uniform vec3 neonColor2;
    uniform float cityHeight;
    uniform float fogDensity;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Fractional Brownian Motion
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Base dark city atmosphere
      vec3 baseColor = vec3(0.02, 0.01, 0.05);
      
      // Sky gradient
      vec3 skyTop = vec3(0.05, 0.02, 0.15);
      vec3 skyHorizon = vec3(0.15, 0.05, 0.25);
      
      vec3 color;
      if (y > cityHeight) {
        // Sky above city
        float factor = (y - cityHeight) / (1.0 - cityHeight);
        color = mix(skyHorizon, skyTop, factor);
      } else {
        // City/fog level
        color = baseColor;
        
        // Add city fog with neon tint
        float fogFactor = 1.0 - (y + 1.0) / (1.0 + cityHeight);
        fogFactor = pow(fogFactor, 2.0);
        
        vec3 fogColor = mix(neonColor1, neonColor2, sin(time * 0.5) * 0.5 + 0.5) * 0.1;
        color = mix(color, fogColor, fogFactor * fogDensity);
      }
      
      // Add neon light streaks in sky
      float streakNoise = fbm(vec2(direction.x * 10.0, direction.z * 8.0));
      if (y > cityHeight) {
        float streaks = sin(direction.x * 20.0 + time) * sin(direction.z * 15.0 + time * 0.7);
        streaks = max(0.0, streaks);
        streaks *= streakNoise;
        
        vec3 streakColor = mix(neonColor1, neonColor2, sin(time * 2.0) * 0.5 + 0.5);
        color += streakColor * streaks * 0.05;
      }
      
      // Add pulsing neon atmosphere
      float pulse = sin(time * 3.0) * 0.02 + 0.98;
      color *= pulse;
      
      // Add data stream effects
      float dataStream = sin(direction.x * 50.0 - time * 10.0) * sin(direction.z * 30.0 - time * 7.0);
      dataStream = smoothstep(0.8, 1.0, dataStream);
      color += neonColor1 * dataStream * 0.02;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=neon-city-DlOqjutH.js.map
