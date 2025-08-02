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
    // Create flowing sphere with custom shader
    const geometry = new THREE.SphereGeometry(15, 64, 32);

    // Custom shader material with flowing patterns
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.3 }
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

    // Add floating particles
    this.createParticles();
    
    // Add wireframe structure
    this.createWireframe();
  }

  createParticles() {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * 25 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Soft colors
      const hue = Math.random();
      const color = new THREE.Color().setHSL(hue * 0.2 + 0.5, 0.7, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particles);
  }

  createWireframe() {
    // Create subtle wireframe structure
    const wireGeometry = new THREE.IcosahedronGeometry(20, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x333366,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });

    this.wireframe = new THREE.Mesh(wireGeometry, wireMaterial);
    this.scene.add(this.wireframe);
  }

  setupCamera() {
    this.camera.position.set(0, 0, 25);
    this.camera.lookAt(0, 0, 0);
  }

  startAnimation() {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      const time = performance.now() * 0.001;

      // Update shader time uniform
      if (this.sphere && this.sphere.material.uniforms) {
        this.sphere.material.uniforms.time.value = time;
      }

      // Rotate the sphere slowly
      if (this.sphere) {
        this.sphere.rotation.y += 0.002;
        this.sphere.rotation.x += 0.001;
      }

      // Rotate particles in opposite direction
      if (this.particles) {
        this.particles.rotation.y -= 0.001;
        this.particles.rotation.x += 0.0005;
      }

      // Rotate wireframe
      if (this.wireframe) {
        this.wireframe.rotation.y += 0.0008;
        this.wireframe.rotation.z -= 0.0003;
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