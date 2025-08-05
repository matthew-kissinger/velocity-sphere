/**
 * Aurora Rails Shader
 * Glowing rails for visibility on dark aurora backgrounds
 */

export default {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fragmentShader: `
    uniform float time;
    uniform vec3 baseColor;
    
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    
    void main() {
      // Base glowing color for rails
      vec3 glowColor = vec3(0.8, 0.9, 1.0); // Light blue-white glow
      
      // Edge glow effect based on view angle
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float edgeFactor = 1.0 - abs(dot(viewDir, vNormal));
      float glow = pow(edgeFactor, 1.5);
      
      // Pulsing effect
      float pulse = sin(time * 2.0) * 0.2 + 0.8;
      
      // Energy flow along rails
      float flowPattern = sin(vUv.x * 10.0 - time * 3.0) * 0.5 + 0.5;
      flowPattern = smoothstep(0.3, 0.7, flowPattern);
      
      // Combine effects
      vec3 finalColor = glowColor * (0.6 + glow * 0.4) * pulse;
      finalColor += vec3(0.3, 0.5, 0.8) * flowPattern * 0.3;
      
      // Ensure rails are always visible
      float minBrightness = 0.4;
      finalColor = max(finalColor, vec3(minBrightness));
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
  
  uniforms: {
    time: { value: 0 },
    baseColor: { value: [0.7, 0.8, 0.9] }
  }
};