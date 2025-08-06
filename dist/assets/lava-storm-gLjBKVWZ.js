import{a as o}from"./main-BYuQSTlm.js";const i={name:"lava-storm",description:"Volcanic atmosphere with ash clouds and lava glow",author:"Velocity Sphere Team",version:"1.0.0",tags:["lava","volcanic","intense","fire"],mood:"intense",uniforms:{lavaColor:{value:new o(16729088)},ashColor:{value:new o(3351057)},emberColor:{value:new o(16746496)},stormIntensity:{value:1.2},cloudSpeed:{value:.8}},vertexShader:`
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
    uniform vec3 lavaColor;
    uniform vec3 ashColor;
    uniform vec3 emberColor;
    uniform float stormIntensity;
    uniform float cloudSpeed;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise functions
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 54.321))) * 43758.5453);
    }
    
    float smoothNoise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec3(1.0, 0.0, 0.0));
      float c = noise(i + vec3(0.0, 1.0, 0.0));
      float d = noise(i + vec3(1.0, 1.0, 0.0));
      float e = noise(i + vec3(0.0, 0.0, 1.0));
      float f_val = noise(i + vec3(1.0, 0.0, 1.0));
      float g = noise(i + vec3(0.0, 1.0, 1.0));
      float h = noise(i + vec3(1.0, 1.0, 1.0));
      
      float x1 = mix(a, b, f.x);
      float x2 = mix(c, d, f.x);
      float x3 = mix(e, f_val, f.x);
      float x4 = mix(g, h, f.x);
      
      float y1 = mix(x1, x2, f.y);
      float y2 = mix(x3, x4, f.y);
      
      return mix(y1, y2, f.z);
    }
    
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for(int i = 0; i < 6; i++) {
        value += amplitude * smoothNoise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Base volcanic atmosphere
      vec3 baseColor = vec3(0.1, 0.05, 0.02); // Dark volcanic base
      
      // Sky gradient - hot and smoky
      vec3 skyTop = ashColor * 0.8;
      vec3 skyHorizon = mix(lavaColor, ashColor, 0.6);
      vec3 skyBottom = lavaColor * 0.7;
      
      vec3 color;
      if (y > 0.2) {
        // Upper sky - ash clouds
        float factor = (y - 0.2) / 0.8;
        color = mix(skyHorizon, skyTop, factor);
      } else if (y > -0.3) {
        // Horizon - lava glow
        float factor = (y + 0.3) / 0.5;
        color = mix(skyBottom, skyHorizon, factor);
      } else {
        // Lower sky - intense lava glow
        color = skyBottom;
      }
      
      // Add moving ash clouds
      float cloudNoise = fbm(direction * 3.0 + vec3(time * cloudSpeed, time * cloudSpeed * 0.5, 0.0));
      cloudNoise = smoothstep(0.3, 0.8, cloudNoise);
      
      // Heavy ash clouds
      vec3 clouds = ashColor * cloudNoise * 0.7;
      color = mix(color, clouds, cloudNoise * 0.6);
      
      // Add volcanic lightning/electric discharge
      float lightning = noise(direction * 50.0 + time * 10.0);
      lightning = smoothstep(0.98, 1.0, lightning);
      float lightningFlash = sin(time * 20.0 + lightning * 1000.0);
      lightningFlash = max(0.0, lightningFlash);
      color += vec3(1.0, 0.8, 0.4) * lightning * lightningFlash * 0.5;
      
      // Add floating embers
      float emberNoise = noise(direction * 80.0 + time * 2.0);
      float embers = smoothstep(0.92, 1.0, emberNoise);
      
      // Embers drift upward
      float emberDrift = sin(time * 3.0 + emberNoise * 10.0) * 0.5 + 0.5;
      embers *= emberDrift;
      
      color += emberColor * embers * 0.4;
      
      // Add lava glow pulsing
      float lavaGlow = sin(time * 1.5) * 0.1 + 0.9;
      if (y < 0.0) {
        // Stronger glow near horizon
        float glowStrength = 1.0 - (y + 1.0);
        glowStrength = pow(glowStrength, 2.0);
        color += lavaColor * glowStrength * lavaGlow * 0.3;
      }
      
      // Add heat shimmer effect
      float shimmer = sin(direction.x * 20.0 + time * 4.0) * cos(direction.z * 15.0 + time * 3.0);
      shimmer = shimmer * 0.05 + 0.95;
      color *= shimmer;
      
      // Apply storm intensity
      color *= stormIntensity;
      
      // Add volcanic particles
      float particles = fbm(direction * 60.0 + time * cloudSpeed * 2.0);
      particles = smoothstep(0.6, 1.0, particles);
      color += ashColor * particles * 0.2;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{i as default};
//# sourceMappingURL=lava-storm-gLjBKVWZ.js.map
