/**
 * Neon Tubes Shader
 * Dark aesthetic with subtle neon tube lighting
 * Sleek underground tunnel appearance
 */

export default {
  name: 'neon-tubes',
  uniforms: {
    tubeColor1: { value: [0.1, 0.4, 0.8] },  // Deep blue
    tubeColor2: { value: [0.8, 0.1, 0.4] },  // Deep magenta
    glowColor: { value: [0.2, 0.6, 1.0] },   // Cyan glow
    baseColor: { value: [0.02, 0.02, 0.05] }, // Almost black
    ringSpacing: { value: 8.0 },
    glowIntensity: { value: 0.6 },
    pulseSpeed: { value: 1.5 }
  },
  
  vertexShader: `
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
  `,
  
  fragmentShader: `
    uniform float time;
    uniform vec3 tubeColor1;
    uniform vec3 tubeColor2;
    uniform vec3 glowColor;
    uniform vec3 baseColor;
    uniform float ringSpacing;
    uniform float glowIntensity;
    uniform float pulseSpeed;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      // Dark base
      vec3 color = baseColor;
      
      // Create neon ring pattern along Z axis
      float ringPattern = fract(vWorldPosition.z / ringSpacing + time * 0.2);
      float ring = smoothstep(0.4, 0.5, ringPattern) * smoothstep(0.6, 0.5, ringPattern);
      
      // Pulse effect
      float pulse = sin(time * pulseSpeed) * 0.3 + 0.7;
      
      // Mix tube colors based on position
      float colorMix = sin(vWorldPosition.z * 0.1 + time * 0.5) * 0.5 + 0.5;
      vec3 tubeColor = mix(tubeColor1, tubeColor2, colorMix);
      
      // Add subtle neon rings
      color += tubeColor * ring * pulse * glowIntensity;
      
      // Edge glow for tube effect
      float edgeGlow = pow(abs(vUv.x - 0.5) * 2.0, 2.0);
      color += glowColor * edgeGlow * 0.2 * pulse;
      
      // Subtle center line
      float centerLine = 1.0 - abs(vUv.x - 0.5) * 8.0;
      centerLine = smoothstep(0.0, 1.0, centerLine);
      color += tubeColor * centerLine * 0.1;
      
      // Traveling light effect
      float travelLight = sin(vWorldPosition.z * 0.5 - time * 3.0);
      travelLight = smoothstep(0.8, 1.0, travelLight);
      color += glowColor * travelLight * 0.3;
      
      // Very subtle surface detail
      float detail = sin(vWorldPosition.x * 10.0) * sin(vWorldPosition.z * 10.0);
      detail = smoothstep(0.9, 1.0, detail) * 0.05;
      color += vec3(detail);
      
      // Maintain dark aesthetic with subtle lighting
      float lighting = dot(vNormal, normalize(vec3(0.0, 1.0, 0.5))) * 0.2 + 0.8;
      color *= lighting;
      
      // Ensure it stays dark but visible
      color = clamp(color, vec3(0.0), vec3(0.8));
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};