/**
 * StartBackground - Cool Three.js background for start screen
 * Uses custom shaders for flowing energy effects
 */

import * as THREE from 'three';

export class StartBackground {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.sphere = null;
    this.canvas = null;
    this.animationId = null;
  }

  init() {
    this.canvas = document.getElementById('start-background-canvas');
    if (!this.canvas) return;

    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Renderer with WebGL2 for TSL support
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas,
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.createBackground();
    this.setupCamera();
    this.startAnimation();

    // Handle resize
    window.addEventListener('resize', () => this.handleResize());
  }

  createBackground() {
    // Create flowing sphere with custom shader - small size for bouncing
    const geometry = new THREE.SphereGeometry(3, 32, 16);

    // Custom shader material with flowing patterns
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.4 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float opacity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vec3 pos = vPosition * 0.1;
          
          // Flowing energy patterns
          float pattern1 = sin(pos.y * 2.0 + time * 0.5) * 0.5 + 0.5;
          float pattern2 = sin(pos.x * 1.5 + pos.z * 1.2 + time * 0.3) * 0.5 + 0.5;
          float spiral = sin(pos.x * 0.8 + pos.y * 0.6 + pos.z * 1.0 + time * 0.4) * 0.5 + 0.5;
          
          // Color mixing
          vec3 color1 = vec3(0.0, 0.7, 1.0);  // Cyan
          vec3 color2 = vec3(0.5, 0.0, 1.0);  // Purple
          vec3 color3 = vec3(0.0, 1.0, 0.7);  // Teal
          
          vec3 finalColor = mix(
            mix(color1, color2, pattern1),
            color3,
            pattern2 * spiral
          );
          
          // Fade based on normal (edge glow effect)
          float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          finalColor *= fresnel * 0.8 + 0.2;
          
          gl_FragColor = vec4(finalColor, opacity * (pattern1 * pattern2 * 0.6 + 0.4));
        }
      `
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Add enhanced glowing wireframe structure
    this.createGlowingWireframe();
    
    // Initialize bouncing animation properties with slightly faster speed
    const speed = 0.2; // Adjust this to control bounce speed
    this.bounceVelocity = {
      x: (Math.random() - 0.5) * speed + (Math.random() > 0.5 ? speed/2 : -speed/2),
      y: (Math.random() - 0.5) * speed + (Math.random() > 0.5 ? speed/2 : -speed/2),
      z: 0
    };
    
    // Calculate initial bounce boundaries
    this.bounds = { x: 15, y: 10, z: 0 }; // Default values
    // Will be properly calculated after camera is set up
    
    // Group for both sphere and wireframe to move together
    this.bouncingGroup = new THREE.Group();
    this.scene.remove(this.sphere);
    this.scene.remove(this.wireframe);
    this.bouncingGroup.add(this.sphere);
    if (this.wireframe) {
      this.bouncingGroup.add(this.wireframe);
    }
    this.scene.add(this.bouncingGroup);
    
    // Random starting position - will be set after bounds are calculated
    this.bouncingGroup.position.set(0, 0, 0);
    
    // Color array for bounce color changes
    this.colors = [
      new THREE.Color(0x00d9ff), // Cyan
      new THREE.Color(0x00ff88), // Green
      new THREE.Color(0xff00ff), // Magenta
      new THREE.Color(0xffaa00), // Orange
      new THREE.Color(0xff5555), // Red
      new THREE.Color(0x00ffff), // Aqua
    ];
    this.currentColorIndex = 0;
  }

  createEnergyRings() {
    // Create multiple rotating energy rings - smaller size
    const ringGroup = new THREE.Group();
    
    for (let i = 0; i < 3; i++) {
      const radius = 9 + i * 1.5;
      const curve = new THREE.EllipseCurve(
        0, 0,
        radius, radius,
        0, 2 * Math.PI,
        false,
        0
      );
      
      const points = curve.getPoints(100);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // Glowing ring material
      const material = new THREE.LineBasicMaterial({
        color: i === 0 ? 0x00d9ff : i === 1 ? 0x00ff88 : 0xff00ff,
        transparent: true,
        opacity: 0.3 + i * 0.1,
        linewidth: 2
      });
      
      const ring = new THREE.LineLoop(geometry, material);
      
      // Random rotation for each ring
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData = { 
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      };
      
      ringGroup.add(ring);
    }
    
    this.energyRings = ringGroup;
    this.scene.add(this.energyRings);
  }

  createLaserGrid() {
    // Create a grid of laser lines in the background - smaller size
    const gridGroup = new THREE.Group();
    
    // Horizontal lines
    for (let i = -5; i <= 5; i++) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-15, i * 2, -25),
        new THREE.Vector3(15, i * 2, -25)
      ]);
      
      const material = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.1 + Math.abs(i) * 0.02
      });
      
      const line = new THREE.Line(geometry, material);
      gridGroup.add(line);
    }
    
    // Vertical lines
    for (let i = -5; i <= 5; i++) {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i * 3, -10, -25),
        new THREE.Vector3(i * 3, 10, -25)
      ]);
      
      const material = new THREE.LineBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.1 + Math.abs(i) * 0.02
      });
      
      const line = new THREE.Line(geometry, material);
      gridGroup.add(line);
    }
    
    this.laserGrid = gridGroup;
    this.scene.add(this.laserGrid);
  }
  
  createGlowingWireframe() {
    // Create a single clean glowing wireframe - small size for bouncing
    this.wireframeRadius = 4; // Store radius for collision detection
    const geometry = new THREE.IcosahedronGeometry(this.wireframeRadius, 1);
    
    // Use a shader material for better glow effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x00d9ff) }
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec3 vPosition;
        
        void main() {
          float pulse = sin(time * 2.0) * 0.2 + 0.8;
          vec3 glowColor = color * pulse;
          float alpha = 0.7 * pulse;
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      wireframe: true,
      transparent: true
    });
    
    this.wireframe = new THREE.Mesh(geometry, material);
    this.scene.add(this.wireframe);
  }

  setupCamera() {
    this.camera.position.set(0, 0, 30);
    this.camera.lookAt(0, 0, 0);
    
    // Calculate bounds after camera is positioned
    this.calculateBounds();
    
    // Set random starting position within the calculated bounds
    if (this.bouncingGroup && this.bounds) {
      this.bouncingGroup.position.set(
        (Math.random() - 0.5) * this.bounds.x * 1.5,
        (Math.random() - 0.5) * this.bounds.y * 1.5,
        0
      );
    }
  }
  
  calculateBounds() {
    if (!this.camera) return;
    
    // Calculate the visible area at z=0 (where our objects are)
    const cameraZ = this.camera.position.z;
    const vFov = (this.camera.fov * Math.PI) / 180; // Convert to radians
    
    // Calculate visible height at z=0
    const visibleHeight = 2 * Math.tan(vFov / 2) * cameraZ;
    
    // Calculate visible width based on aspect ratio
    const visibleWidth = visibleHeight * this.camera.aspect;
    
    // Set bounds to 90% of visible area to ensure it stays on screen
    // The collision detection will use the wireframe radius for edge detection
    this.bounds = {
      x: (visibleWidth / 2) * 0.9,
      y: (visibleHeight / 2) * 0.9,
      z: 0
    };
    
    console.log('Calculated bounds:', {
      width: this.bounds.x * 2,
      height: this.bounds.y * 2,
      aspect: this.camera.aspect
    });
  }

  startAnimation() {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      const time = performance.now() * 0.001;

      // Update shader time uniform
      if (this.sphere && this.sphere.material.uniforms) {
        this.sphere.material.uniforms.time.value = time;
      }

      // DVD-style bouncing animation
      if (this.bouncingGroup) {
        // Update position
        this.bouncingGroup.position.x += this.bounceVelocity.x;
        this.bouncingGroup.position.y += this.bounceVelocity.y;
        
        // Check boundaries and bounce (accounting for wireframe radius)
        let bounced = false;
        const radius = this.wireframeRadius || 4; // Use wireframe radius for collision
        
        // Check X bounds (subtract radius from boundary)
        if (Math.abs(this.bouncingGroup.position.x) + radius > this.bounds.x) {
          this.bounceVelocity.x *= -1;
          // Position at boundary minus radius
          this.bouncingGroup.position.x = Math.sign(this.bouncingGroup.position.x) * (this.bounds.x - radius);
          bounced = true;
        }
        
        // Check Y bounds (subtract radius from boundary)
        if (Math.abs(this.bouncingGroup.position.y) + radius > this.bounds.y) {
          this.bounceVelocity.y *= -1;
          // Position at boundary minus radius
          this.bouncingGroup.position.y = Math.sign(this.bouncingGroup.position.y) * (this.bounds.y - radius);
          bounced = true;
        }
        
        // Change color on bounce
        if (bounced) {
          this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
          const newColor = this.colors[this.currentColorIndex];
          
          // Update wireframe color
          if (this.wireframe && this.wireframe.material.uniforms) {
            this.wireframe.material.uniforms.color.value = newColor;
          }
        }
        
        // Rotate the objects slowly
        this.bouncingGroup.rotation.y += 0.003;
        this.bouncingGroup.rotation.x += 0.002;
      }
      
      // Update wireframe shader time for pulsing
      if (this.wireframe && this.wireframe.material.uniforms) {
        this.wireframe.material.uniforms.time.value = time;
      }
      
      // Rotate energy rings
      if (this.energyRings) {
        this.energyRings.children.forEach(ring => {
          ring.rotation.x += ring.userData.rotationSpeed.x;
          ring.rotation.y += ring.userData.rotationSpeed.y;
          ring.rotation.z += ring.userData.rotationSpeed.z;
        });
      }
      
      // Animate laser grid
      if (this.laserGrid) {
        // Subtle drift animation
        this.laserGrid.position.z = Math.sin(time * 0.2) * 2 - 25;
        this.laserGrid.rotation.z = Math.sin(time * 0.1) * 0.02;
      }

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  handleResize() {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Recalculate bounds for the new aspect ratio
    this.calculateBounds();
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.renderer) {
      this.renderer.dispose();
    }

    window.removeEventListener('resize', this.handleResize);
  }
}