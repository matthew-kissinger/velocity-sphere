/**
 * Neon Underground Skybox
 * Sleek dark underground aesthetic with subtle neon accents
 * Perfect for underground racing circuits
 */

export default {
  name: 'neon-underground',
  description: 'Dark underground atmosphere with subtle neon lighting',
  author: 'Velocity Sphere Team',
  version: '1.0.0',
  tags: ['neon', 'underground', 'dark', 'sleek', 'circuit-epsilon'],
  mood: 'cyberpunk',
  
  uniforms: {
    neonIntensity: { value: 0.3 },
    fogDensity: { value: 0.6 },
    glowPulse: { value: 1.0 }
  },
  
  vertexShader: `
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fragmentShader: `
    uniform float time;
    uniform float neonIntensity;
    uniform float fogDensity;
    uniform float glowPulse;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Base colors - very dark with subtle color variation
      vec3 deepBlack = vec3(0.01, 0.01, 0.02);
      vec3 darkBlue = vec3(0.02, 0.03, 0.06);
      vec3 darkPurple = vec3(0.04, 0.02, 0.05);
      
      // Gradient based on height
      vec3 color;
      if (y > 0.1) {
        // Ceiling area - deepest black
        color = deepBlack;
        
        // Very subtle grid pattern on ceiling
        float grid = sin(direction.x * 50.0) * sin(direction.z * 50.0);
        grid = smoothstep(0.98, 1.0, grid);
        color += vec3(0.02, 0.02, 0.03) * grid;
      } else if (y > -0.1) {
        // Mid section - gradient
        float factor = (y + 0.1) / 0.2;
        color = mix(darkPurple, darkBlue, factor);
      } else {
        // Floor area - slightly lighter
        color = darkPurple + vec3(0.01);
        
        // Subtle floor reflection
        float reflection = smoothstep(-1.0, -0.5, y);
        color += vec3(0.01, 0.0, 0.02) * reflection;
      }
      
      // Distant neon light sources
      float neonLights = 0.0;
      
      // Horizontal neon strips
      for (float i = 0.0; i < 3.0; i++) {
        float height = -0.3 + i * 0.3;
        float strip = 1.0 - abs(y - height) * 20.0;
        strip = smoothstep(0.0, 1.0, strip);
        
        // Alternating colors
        vec3 stripColor = (mod(i, 2.0) < 1.0) ? 
          vec3(0.1, 0.4, 0.8) : vec3(0.8, 0.1, 0.4);
        
        // Add pulse
        float pulse = sin(time * glowPulse + i * 2.0) * 0.3 + 0.7;
        color += stripColor * strip * neonIntensity * pulse * 0.5;
      }
      
      // Vertical support pillars with neon
      float pillarPattern = sin(direction.x * 20.0) * sin(direction.z * 20.0);
      pillarPattern = smoothstep(0.95, 1.0, pillarPattern);
      vec3 pillarGlow = vec3(0.0, 0.6, 0.8) * pillarPattern * neonIntensity;
      color += pillarGlow * (1.0 - abs(y)) * 0.3;
      
      // Atmospheric fog
      float fog = noise(direction.xz * 5.0 + time * 0.05);
      fog = smoothstep(0.4, 0.8, fog) * fogDensity;
      color = mix(color, darkBlue * 0.5, fog * 0.2);
      
      // Distant tunnel glow
      float tunnelGlow = 1.0 - length(direction.xz);
      tunnelGlow = pow(tunnelGlow, 4.0);
      color += vec3(0.0, 0.2, 0.4) * tunnelGlow * 0.1;
      
      // Very subtle animated scan lines
      float scanline = sin(direction.y * 100.0 + time * 2.0);
      scanline = smoothstep(0.99, 1.0, scanline);
      color += vec3(0.0, 0.05, 0.08) * scanline * 0.3;
      
      // Ensure visibility but maintain dark aesthetic
      color = max(color, deepBlack);
      color = min(color, vec3(0.2)); // Cap brightness
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};