const o={name:"desert-heat",description:"Hot desert sky with intense sun and heat haze",author:"Circuit Beta AI Agent",version:"1.0.0",tags:["desert","hot","sandy","sun","arid"],mood:"intense",uniforms:{sunIntensity:{value:1.5},heatHaze:{value:.6},dustDensity:{value:.3}},vertexShader:`
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
    uniform float sunIntensity;
    uniform float heatHaze;
    uniform float dustDensity;
    
    varying vec3 vWorldPosition;
    varying vec3 vPosition;
    
    // Noise for dust and haze
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(mix(hash(i + vec2(0.0, 0.0)), 
                     hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), 
                     hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    
    void main() {
      vec3 direction = normalize(vWorldPosition);
      float y = direction.y;
      
      // Desert sky gradient
      vec3 zenithColor = vec3(0.4, 0.6, 0.9); // Pale blue at top
      vec3 horizonColor = vec3(0.9, 0.7, 0.5); // Sandy orange at horizon
      vec3 groundColor = vec3(0.8, 0.6, 0.4); // Desert floor reflection
      
      vec3 color;
      if (y > 0.1) {
        // Sky gradient
        float factor = pow((y - 0.1) / 0.9, 0.5);
        color = mix(horizonColor, zenithColor, factor);
      } else if (y > -0.1) {
        // Horizon band with heat distortion
        float factor = (y + 0.1) / 0.2;
        color = mix(groundColor, horizonColor, factor);
        
        // Add heat shimmer at horizon
        float shimmer = sin(direction.x * 20.0 + time * 3.0) * heatHaze;
        shimmer += cos(direction.z * 15.0 - time * 2.5) * heatHaze * 0.5;
        color += vec3(0.2, 0.1, 0.0) * shimmer * (1.0 - abs(y) * 10.0);
      } else {
        // Ground reflection
        color = groundColor * (0.8 + y * 0.4);
      }
      
      // Sun disk and glare
      vec3 sunDir = normalize(vec3(0.3, 0.7, 0.2));
      float sunDot = dot(direction, sunDir);
      
      // Bright sun core
      if (sunDot > 0.995) {
        color = vec3(1.0, 0.95, 0.8) * sunIntensity;
      } 
      // Sun glow
      else if (sunDot > 0.9) {
        float glowFactor = pow((sunDot - 0.9) / 0.095, 2.0);
        vec3 sunGlow = vec3(1.0, 0.9, 0.6) * sunIntensity;
        color = mix(color, sunGlow, glowFactor);
      }
      // Extended sun halo
      else if (sunDot > 0.7) {
        float haloFactor = pow((sunDot - 0.7) / 0.2, 3.0);
        color += vec3(0.3, 0.2, 0.1) * haloFactor * sunIntensity * 0.5;
      }
      
      // Atmospheric dust
      float dust = noise(direction.xy * 10.0 + time * 0.1);
      dust = smoothstep(0.7, 1.0, dust) * dustDensity;
      color = mix(color, vec3(0.8, 0.7, 0.5), dust * 0.3);
      
      // Heat-induced color shift
      float heatDistortion = sin(time * 1.5 + direction.x * 5.0) * 0.05;
      color.r += heatDistortion * heatHaze;
      color.g -= heatDistortion * heatHaze * 0.5;
      
      // Overall brightness adjustment for desert intensity
      color *= 1.1;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `};export{o as default};
//# sourceMappingURL=desert-heat-Bi9MF77R.js.map
