import{a as e}from"./main-DX4kfyFT.js";const t={name:"storm-electric",description:"Electric storm surface with lightning strikes and energy",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["storm","electric","lightning","weather","energy"],performance:"medium",uniforms:{stormColor:{value:new e(1710638)},lightningColor:{value:new e(8900331)},energyColor:{value:new e(4286945)},stormIntensity:{value:.8},lightningFrequency:{value:.3},electricCharge:{value:.6}},vertexShader:`
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
    uniform vec3 stormColor;
    uniform vec3 lightningColor;
    uniform vec3 energyColor;
    uniform float stormIntensity;
    uniform float lightningFrequency;
    uniform float electricCharge;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Random hash
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float hash3(vec3 p) {
      return fract(sin(dot(p, vec3(127.1, 311.7, 543.21))) * 43758.5453123);
    }
    
    // Noise for storm patterns
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(mix(hash(i + vec2(0.0, 0.0)), 
                     hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), 
                     hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for(int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Lightning bolt pattern
    float lightning(vec2 p, float seed) {
      float bolt = 0.0;
      vec2 dir = vec2(0.0, 1.0);
      
      for(int i = 0; i < 8; i++) {
        float offset = hash(vec2(float(i), seed)) - 0.5;
        p.x += offset * 0.1;
        
        float dist = abs(p.x);
        float branch = exp(-dist * 50.0);
        bolt = max(bolt, branch);
        
        p.y -= 0.1;
      }
      
      return bolt;
    }
    
    void main() {
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Storm surface base
      float stormPattern = fbm(uv * 2.0 + time * 0.2) * stormIntensity;
      vec3 baseColor = mix(stormColor, stormColor * 1.5, stormPattern);
      
      // Electric charge buildup areas
      float chargePattern = fbm(uv * 5.0 - time * 0.3);
      chargePattern = smoothstep(0.5, 0.8, chargePattern);
      vec3 chargedAreas = mix(baseColor, energyColor, chargePattern * electricCharge);
      
      // Lightning strikes
      float lightningTime = floor(time * lightningFrequency);
      float lightningPhase = fract(time * lightningFrequency);
      
      vec3 color = chargedAreas;
      
      // Generate multiple lightning bolts
      for(int i = 0; i < 3; i++) {
        float seed = lightningTime + float(i) * 13.7;
        vec2 boltOrigin = vec2(
          hash(vec2(seed, seed * 2.0)) * 2.0 - 1.0,
          hash(vec2(seed * 3.0, seed * 4.0)) * 2.0 - 1.0
        ) * 10.0;
        
        vec2 boltUV = uv - boltOrigin;
        float bolt = lightning(boltUV, seed);
        
        // Lightning flash timing
        float flash = exp(-lightningPhase * 5.0);
        bolt *= flash;
        
        // Add bolt to color
        color += lightningColor * bolt * 2.0;
      }
      
      // Electric arcs between charged areas
      float arcNoise = noise(uv * 20.0 + time * 5.0);
      float arcs = smoothstep(0.9, 0.95, arcNoise) * chargePattern;
      color += energyColor * arcs * 0.5;
      
      // Pulsing energy veins
      float veins = sin(uv.x * 30.0 + time * 3.0) * sin(uv.y * 30.0 - time * 2.0);
      veins = smoothstep(0.5, 0.8, veins) * 0.3;
      color += energyColor * veins * electricCharge;
      
      // Storm turbulence
      float turbulence = fbm(uv * 10.0 + time * 0.5);
      turbulence = pow(turbulence, 2.0);
      color = mix(color, stormColor * 0.5, turbulence * 0.3);
      
      // Apply lighting
      vec3 lightDir = normalize(vec3(0.0, 1.0, 0.0));
      float lighting = dot(vNormal, lightDir) * 0.3 + 0.7;
      color *= lighting;
      
      // Electric glow based on charge
      float glow = chargePattern * sin(time * 10.0) * 0.2 + 0.8;
      color *= glow;
      
      // Add corona discharge effect at edges
      float edge = 1.0 - abs(dot(vNormal, vec3(0.0, 1.0, 0.0)));
      color += energyColor * edge * 0.2 * electricCharge;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{t as default};
//# sourceMappingURL=storm-electric-C2qdGAOz.js.map
