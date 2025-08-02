/**
 * Forest Canopy Skybox
 * Forest atmosphere with dappled sunlight through leaves
 * High contrast with forest-floor shader for better visibility
 */

export default {
  name: 'forest-canopy',
  description: 'Forest canopy with sunlight filtering through leaves',
  author: 'Circuit Beta Upgrade Team',
  version: '1.0.0',
  tags: ['forest', 'nature', 'green', 'organic', 'canopy'],
  mood: 'natural',
  
  uniforms: {
    sunlightColor: { value: 0.9 },
    leafDensity: { value: 0.6 },
    windSpeed: { value: 0.3 }
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
    uniform float sunlightColor;
    uniform float leafDensity;
    uniform float windSpeed;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise for leaf patterns
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }
    
    float leafPattern(vec2 p, float t) {
      // Animate leaves with wind
      p += vec2(sin(t * windSpeed) * 0.1, cos(t * windSpeed * 0.7) * 0.05);
      
      float n = 0.0;
      float amplitude = 1.0;
      
      // Multiple octaves for realistic leaf coverage
      for (int i = 0; i < 4; i++) {
        n += noise(p * (2.0 + float(i))) * amplitude;
        amplitude *= 0.5;
        p *= 2.1;
      }
      
      return n;
    }
    
    void main() {
      vec3 direction = normalize(vPosition);
      float height = direction.y;
      
      // Sky gradient - much brighter and greener
      vec3 skyColorTop = vec3(0.7, 0.9, 1.0);
      vec3 skyColorMid = vec3(0.6, 0.85, 0.7);
      vec3 skyColorLow = vec3(0.5, 0.7, 0.6);
      
      vec3 skyGradient = mix(skyColorLow, skyColorMid, smoothstep(-0.5, 0.0, height));
      skyGradient = mix(skyGradient, skyColorTop, smoothstep(0.0, 1.0, height));
      
      // Canopy layer (upper hemisphere)
      if (height > -0.2) {
        vec2 canopyCoord = direction.xz / (1.0 + height * 0.5);
        float leaves = leafPattern(canopyCoord * 5.0, time);
        
        // Leaf colors - much brighter and more vibrant green
        vec3 leafColorDark = vec3(0.2, 0.5, 0.1);
        vec3 leafColorLight = vec3(0.4, 0.8, 0.2);
        vec3 leafColor = mix(leafColorDark, leafColorLight, leaves);
        
        // Mix with sky based on density
        float canopyDensity = smoothstep(-0.2, 0.3, height) * leafDensity;
        skyGradient = mix(skyGradient, leafColor, canopyDensity * smoothstep(0.3, 0.7, leaves));
        
        // Sunlight filtering through
        float sunlight = 1.0 - canopyDensity * 0.7;
        vec3 sunColor = vec3(1.0, 0.95, 0.8) * sunlightColor;
        
        // Dappled light effect
        float dappled = noise(canopyCoord * 20.0 + time * 0.1);
        sunlight *= mix(0.5, 1.0, dappled);
        
        skyGradient = mix(skyGradient, skyGradient + sunColor * 0.5, sunlight);
      }
      
      // Ground fog for lower hemisphere - lighter and greener
      if (height < 0.0) {
        float fogAmount = smoothstep(0.0, -0.5, height);
        vec3 fogColor = vec3(0.7, 0.8, 0.75);
        skyGradient = mix(skyGradient, fogColor, fogAmount * 0.3);
      }
      
      // Add atmospheric perspective
      float distance = length(vWorldPosition.xz);
      vec3 atmosphereColor = vec3(0.7, 0.75, 0.8);
      skyGradient = mix(skyGradient, atmosphereColor, smoothstep(50.0, 200.0, distance) * 0.3);
      
      gl_FragColor = vec4(skyGradient, 1.0);
    }
  `
};