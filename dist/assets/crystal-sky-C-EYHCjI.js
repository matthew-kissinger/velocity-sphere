import{a as o}from"./main-BICzC1QX.js";const t={name:"crystal-sky",description:"Crystalline ice atmosphere with refractive highlights",author:"Velocity Sphere Team",version:"1.0.0",tags:["crystal","ice","cold","refractive"],mood:"cold",uniforms:{iceColor:{value:new o(8965375)},crystalColor:{value:new o(13434879)},sparkleIntensity:{value:1},refractionStrength:{value:.5}},vertexShader:`
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
    uniform vec3 iceColor;
    uniform vec3 crystalColor;
    uniform float sparkleIntensity;
    uniform float refractionStrength;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise function
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 54.321))) * 43758.5453);
    }
    
    // Voronoi pattern for crystal facets
    float voronoi(vec3 p) {
      vec3 b = floor(p);
      vec3 f = fract(p);
      
      float res = 8.0;
      for(int k = -1; k <= 1; k++) {
        for(int j = -1; j <= 1; j++) {
          for(int i = -1; i <= 1; i++) {
            vec3 g = vec3(float(i), float(j), float(k));
            vec3 r = g + noise(b + g) - f;
            float d = length(r);
            res = min(res, d);
          }
        }
      }
      return res;
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Base ice atmosphere gradient
      vec3 skyTop = vec3(0.7, 0.85, 1.0);     // Light ice blue
      vec3 skyHorizon = vec3(0.85, 0.9, 0.95); // Almost white
      vec3 skyBottom = vec3(0.6, 0.8, 0.9);   // Deeper ice blue
      
      vec3 color;
      if (y > 0.0) {
        // Upper sky
        color = mix(skyHorizon, skyTop, y);
      } else {
        // Lower sky
        color = mix(skyBottom, skyHorizon, (y + 1.0));
      }
      
      // Add crystal formations
      float crystalPattern = voronoi(direction * 5.0);
      crystalPattern = 1.0 - smoothstep(0.0, 0.3, crystalPattern);
      
      // Create crystalline facets
      float facetNoise = noise(direction * 20.0 + time * 0.1);
      float facets = sin(direction.x * 30.0 + facetNoise) * sin(direction.y * 25.0 + facetNoise) * sin(direction.z * 35.0 + facetNoise);
      facets = smoothstep(0.7, 1.0, facets);
      
      // Apply crystal effects
      vec3 crystalEffect = crystalColor * (crystalPattern * 0.3 + facets * 0.2);
      color = mix(color, color + crystalEffect, 0.6);
      
      // Add ice sparkles
      float sparkleNoise = noise(direction * 100.0 + time * 0.5);
      float sparkles = smoothstep(0.95, 1.0, sparkleNoise);
      
      // Twinkling effect
      float twinkle = sin(time * 8.0 + sparkleNoise * 100.0) * 0.5 + 0.5;
      sparkles *= twinkle;
      
      // Add sparkles
      color += vec3(1.0) * sparkles * sparkleIntensity * 0.3;
      
      // Add refractive shimmer
      float refraction = sin(direction.x * 15.0 + time * 0.8) * cos(direction.z * 12.0 + time * 0.6) * sin(direction.y * 10.0 + time * 0.4);
      refraction = refraction * 0.5 + 0.5;
      refraction *= refractionStrength;
      
      // Apply refraction as color shift
      color.r += refraction * 0.05;
      color.b += refraction * 0.03;
      
      // Add atmospheric particles
      float particles = noise(direction * 80.0 + time * 0.2);
      particles = smoothstep(0.9, 1.0, particles);
      color += iceColor * particles * 0.1;
      
      // Add subtle breathing effect
      float breathe = sin(time * 0.7) * 0.05 + 0.95;
      color *= breathe;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{t as default};
//# sourceMappingURL=crystal-sky-C-EYHCjI.js.map
