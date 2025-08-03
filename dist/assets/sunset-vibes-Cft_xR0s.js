const o={name:"sunset-vibes",description:"Bright sunset colors with flowing energy",author:"Velocity Sphere Team",version:"1.0.0",tags:["sunset","colorful","energetic","default"],mood:"energetic",uniforms:{colorIntensity:{value:1.2},flowSpeed:{value:.5},waveAmplitude:{value:.3}},vertexShader:`
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
    uniform float colorIntensity;
    uniform float flowSpeed;
    uniform float waveAmplitude;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Bright sunset gradient
      vec3 topColor = vec3(0.05, 0.0, 0.15);      // Deep purple/black
      vec3 midColor = vec3(0.15, 0.05, 0.25);     // Purple
      vec3 horizonColor = vec3(0.4, 0.15, 0.35);  // Pink/purple
      vec3 bottomColor = vec3(0.2, 0.1, 0.3);     // Darker purple
      
      vec3 color;
      if (y > 0.3) {
        // Upper sky - top to mid transition
        float factor = (y - 0.3) / 0.7;
        color = mix(midColor, topColor, factor);
      } else if (y > -0.1) {
        // Mid sky - horizon glow
        float factor = (y + 0.1) / 0.4;
        color = mix(horizonColor, midColor, factor);
        
        // Add horizontal bands for more visual interest
        float bandPattern = sin(y * 20.0 + time * flowSpeed) * 0.1;
        color += vec3(bandPattern * 0.05, bandPattern * 0.02, bandPattern * 0.08);
      } else {
        // Lower sky 
        float factor = (y + 1.0) / 0.9;
        color = mix(bottomColor, horizonColor, factor);
      }
      
      // Add flowing energy effects
      float noise1 = sin(direction.x * 3.0 + time * flowSpeed * 2.0) * waveAmplitude;
      float noise2 = cos(direction.z * 2.5 + time * flowSpeed * 1.5) * waveAmplitude;
      
      // Apply energy waves
      color += vec3(noise1 * 0.02, noise2 * 0.03, (noise1 + noise2) * 0.025);
      
      // Add subtle shimmer
      float shimmer = sin(time * 3.0 + direction.x + direction.z) * 0.05 + 0.95;
      color *= shimmer;
      
      // Apply color intensity
      color *= colorIntensity;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=sunset-vibes-Cft_xR0s.js.map
