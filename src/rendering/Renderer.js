/**
 * Renderer - Three.js WebGL renderer setup and management
 */

import * as THREE from 'three';

export class Renderer {
  constructor() {
    this.renderer = null;
    this.domElement = null;
    this.init();
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Enable shadows for better visual quality
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Better color management
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    
    // Append to DOM
    this.domElement = this.renderer.domElement;
    document.body.appendChild(this.domElement);
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }

  handleResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  dispose() {
    this.renderer.dispose();
    if (this.domElement && this.domElement.parentNode) {
      this.domElement.parentNode.removeChild(this.domElement);
    }
  }
}