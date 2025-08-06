/**
 * Aurora Zen Shader
 * Gentle, flowing northern lights effect
 * Peaceful and meditative aurora patterns
 */

export default {
  name: 'aurora-zen',
  description: 'Gentle flowing aurora borealis for zen racing',
  author: 'Velocity Sphere Team',
  version: '1.0.0',
  tags: ['aurora', 'zen', 'peaceful', 'circuit-tranquil'],
  performance: 'good',
  
  uniforms: {
    auroraColor1: { value: [0.1, 0.8, 0.6] },
    auroraColor2: { value: [0.3, 0.5, 0.9] },
    auroraColor3: { value: [0.6, 0.3, 0.8] },
    baseColor: { value: [0.05, 0.05, 0.1] },
    flowSpeed: { value: 0.2 },
    waveScale: { value: 0.03 },
    intensity: { value: 0.7 }
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
    uniform vec3 auroraColor1;
    uniform vec3 auroraColor2;
    uniform vec3 auroraColor3;
    uniform vec3 baseColor;
    uniform float flowSpeed;
    uniform float waveScale;
    uniform float intensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float noise(vec2 p) {
      return sin(p.x) * sin(p.y);
    }
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    vec3 aurora(vec2 p, float t) {
      // Create flowing aurora bands
      float wave1 = sin(p.x * waveScale + t * flowSpeed) * 0.5;
      float wave2 = sin(p.x * waveScale * 1.5 + t * flowSpeed * 0.7) * 0.3;
      float wave3 = sin(p.x * waveScale * 0.8 + t * flowSpeed * 1.2) * 0.4;
      
      float aurora = wave1 + wave2 + wave3;
      aurora += fbm(p * waveScale * 2.0 + vec2(t * flowSpeed, 0.0)) * 0.5;
      aurora = smoothstep(-1.0, 1.0, aurora);
      
      // Create color bands
      vec3 color = baseColor;
      float band1 = smoothstep(0.0, 0.4, aurora);
      float band2 = smoothstep(0.3, 0.7, aurora);
      float band3 = smoothstep(0.6, 1.0, aurora);
      
      color = mix(color, auroraColor1, band1 * intensity);
      color = mix(color, auroraColor2, band2 * intensity * 0.8);
      color = mix(color, auroraColor3, band3 * intensity * 0.6);
      
      return color;
    }
    
    void main() {
      // Get aurora effect
      vec3 color = aurora(vWorldPosition.xz, time);
      
      // Add subtle pulsing
      float pulse = sin(time * 0.5) * 0.1 + 1.0;
      color *= pulse;
      
      // Add ground reflection
      float reflection = 1.0 - abs(vNormal.y);
      reflection = pow(reflection, 3.0);
      color += aurora(vWorldPosition.xz * 1.2, time * 0.8) * reflection * 0.3;
      
      // Soft edge glow
      float edgeGlow = length(vWorldPosition.xz) * 0.01;
      edgeGlow = 1.0 - smoothstep(0.0, 1.0, edgeGlow);
      color += (auroraColor1 + auroraColor2) * 0.5 * edgeGlow * 0.2;
      
      // Gentle lighting
      float lighting = dot(vNormal, normalize(vec3(0.0, 1.0, 0.0))) * 0.3 + 0.7;
      color *= lighting;
      
      // Add stars in dark areas
      float stars = step(0.998, random(vWorldPosition.xz * 0.1));
      color += vec3(stars) * (1.0 - aurora(vWorldPosition.xz, time).r);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};