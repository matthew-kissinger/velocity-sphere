import{a as e}from"./main-CCa23jzO.js";const i={name:"energy-pulse",description:"Pulsating energy shader with electric discharge effects",author:"Velocity Sphere Team",version:"1.0.0",tags:["energy","pulse","electric","boost","power"],performance:"medium",uniforms:{baseColor:{value:new e(16711935)},pulseColor:{value:new e(65535)},pulseFrequency:{value:3},energyIntensity:{value:1.5},noiseScale:{value:10}},vertexShader:`
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
    uniform vec3 baseColor;
    uniform vec3 pulseColor;
    uniform float pulseFrequency;
    uniform float energyIntensity;
    uniform float noiseScale;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Simple noise function
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
      vec2 uv = vWorldPosition.xz * 0.1;
      
      // Create energy pulse
      float pulse = sin(time * pulseFrequency) * 0.5 + 0.5;
      pulse = pow(pulse, 2.0); // Sharper pulse
      
      // Add noise for energy texture
      float energyNoise = fbm(uv * noiseScale + time * 0.5);
      
      // Create electric arcs
      float arc1 = sin(uv.x * 20.0 + time * 8.0) * sin(uv.y * 15.0 + time * 6.0);
      float arc2 = sin(uv.x * 12.0 - time * 5.0) * sin(uv.y * 18.0 - time * 7.0);
      float arcs = (arc1 + arc2) * 0.3;
      
      // Combine energy effects
      float energy = energyNoise + arcs + pulse;
      energy *= energyIntensity;
      
      // Mix colors based on energy level
      vec3 color = mix(baseColor, pulseColor, energy);
      
      // Add extra intensity for high energy areas
      color += pulseColor * max(0.0, energy - 1.0) * 0.5;
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      // Add glow effect
      color *= (1.0 + pulse * 0.5);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{i as default};
//# sourceMappingURL=energy-pulse-BIK8wrpG.js.map
