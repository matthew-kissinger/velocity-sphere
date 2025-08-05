/**
 * Bamboo Forest Shader
 * Dappled light filtering through bamboo leaves
 * Creates natural, organic track lighting
 */

export default {
  name: 'bamboo-forest',
  description: 'Dappled sunlight through bamboo creating natural patterns',
  author: 'Velocity Sphere Team',
  version: '1.0.0',
  tags: ['bamboo', 'forest', 'natural', 'circuit-tranquil'],
  performance: 'good',
  
  uniforms: {
    groundColor: { value: [0.25, 0.3, 0.15] },
    sunlitColor: { value: [0.45, 0.5, 0.3] },
    shadowColor: { value: [0.15, 0.2, 0.1] },
    dappleScale: { value: 0.08 },
    windSpeed: { value: 0.2 },
    shadowSoftness: { value: 0.3 }
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
    uniform vec3 groundColor;
    uniform vec3 sunlitColor;
    uniform vec3 shadowColor;
    uniform float dappleScale;
    uniform float windSpeed;
    uniform float shadowSoftness;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float bambooShadow(vec2 p, float t) {
      // Create moving bamboo shadows
      float shadow = 0.0;
      
      // Multiple layers of bamboo
      for (float i = 0.0; i < 3.0; i++) {
        vec2 offset = vec2(sin(t * windSpeed + i * 1.3) * 0.1, 0.0);
        
        // Vertical bamboo stalks
        float stalk = sin((p.x + offset.x) * 30.0 + i * 10.0);
        stalk = smoothstep(0.5, 0.8, abs(stalk));
        
        // Bamboo leaves
        float leaves = noise((p + offset) * dappleScale * 100.0 + vec2(t * windSpeed, 0.0));
        leaves = smoothstep(0.3, 0.7, leaves);
        
        shadow += (1.0 - stalk) * 0.3 + leaves * 0.2;
      }
      
      return clamp(shadow, 0.0, 1.0);
    }
    
    void main() {
      // Base ground color
      vec3 color = groundColor;
      
      // Add natural variation
      float variation = noise(vWorldPosition.xz * 0.05);
      color = mix(color * 0.9, color * 1.1, variation);
      
      // Calculate dappled light
      float shadow = bambooShadow(vWorldPosition.xz * dappleScale, time);
      shadow = smoothstep(0.0, shadowSoftness, shadow);
      
      // Mix between shadow and sunlit areas
      color = mix(sunlitColor, shadowColor, shadow);
      
      // Add subtle moss patches
      float moss = noise(vWorldPosition.xz * 0.02);
      moss = smoothstep(0.6, 0.8, moss);
      vec3 mossColor = vec3(0.2, 0.35, 0.15);
      color = mix(color, mossColor, moss * 0.3);
      
      // Natural lighting
      float lighting = dot(vNormal, normalize(vec3(0.3, 1.0, 0.2))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add gentle ambient occlusion
      float ao = 1.0 - shadow * 0.2;
      color *= ao;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};