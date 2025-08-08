import{a as o}from"./main-HwdFEI3E.js";const e={name:"cloud-surface",description:"Bright cloud-like surface with white and light blue tones",author:"Circuit Beta Upgrade Team",version:"1.0.0",tags:["cloud","sky","white","bright","contrast"],performance:"low",uniforms:{cloudColor:{value:new o(16777215)},skyColor:{value:new o(8900331)},shadowColor:{value:new o(11584734)},cloudDensity:{value:2},brightness:{value:.9}},vertexShader:`
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
    uniform vec3 cloudColor;
    uniform vec3 skyColor;
    uniform vec3 shadowColor;
    uniform float cloudDensity;
    uniform float brightness;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Simple noise for cloud texture
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
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 3; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      // Cloud pattern based on position and time
      vec2 cloudPos = vWorldPosition.xz * 0.1 + vec2(time * 0.02, time * 0.01);
      float cloudPattern = fbm(cloudPos * cloudDensity);
      
      // Mix cloud colors based on pattern and normal
      vec3 baseColor = mix(shadowColor, cloudColor, cloudPattern);
      float skyBlend = smoothstep(0.3, 0.7, cloudPattern);
      baseColor = mix(baseColor, skyColor, skyBlend * 0.3);
      
      // Bright diffuse lighting for high visibility
      vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
      float diffuse = max(dot(vNormal, lightDir), 0.0);
      diffuse = mix(0.7, 1.0, diffuse); // Keep minimum brightness high
      
      // Final color with high brightness
      vec3 finalColor = baseColor * diffuse;
      finalColor = mix(finalColor, vec3(1.0), brightness * 0.3);
      
      // Subtle edge glow for better track edge visibility
      float edgeFactor = 1.0 - abs(dot(vNormal, vec3(0.0, 1.0, 0.0)));
      finalColor += skyColor * edgeFactor * 0.2;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};export{e as default};
//# sourceMappingURL=cloud-surface-DvdsEHU_.js.map
