/**
 * Camera - Camera system with smooth following and orbit controls
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Camera {
  constructor(domElement) {
    this.camera = null;
    this.controls = null;
    this.target = null;
    this.domElement = domElement;
    
    // Camera follow settings
    this.followDistance = 25;
    this.followHeight = 12;
    this.followSmoothing = 0.1;
    this.lookAhead = 5;
    
    // Camera modes
    this.isPointerLocked = false;
    
    this.init();
    this.setupPointerLock();
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(
      75, // FOV
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    
    // Position camera behind and above the ball, facing forward
    this.camera.position.set(0, 20, -30);
    
    // Initialize orbit controls
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.controls.enableDamping = false; // Disable damping to prevent drift
    this.controls.enablePan = false;
    this.controls.minDistance = 15;
    this.controls.maxDistance = 50;
    this.controls.maxPolarAngle = Math.PI * 0.9; // Allow looking from above
    this.controls.minPolarAngle = 0.1; // Prevent gimbal lock
    this.controls.autoRotate = false; // Ensure auto-rotation is off
    this.controls.autoRotateSpeed = 0;
  }

  setTarget(targetMesh) {
    this.target = targetMesh;
    if (this.controls) {
      this.controls.target.copy(targetMesh.position);
    }
  }

  update() {
    if (this.target) {
      // Store the relative offset before moving the target
      const offset = this.camera.position.clone().sub(this.controls.target);
      
      // Update the orbit controls target to the ball position
      this.controls.target.copy(this.target.position);
      
      // Maintain the same relative offset to preserve orbital position
      this.camera.position.copy(this.target.position).add(offset);
    }
    
    this.controls.update();
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  getWorldDirection() {
    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);
    return direction;
  }

  getWorldPosition() {
    return this.camera.position.clone();
  }
  
  setupPointerLock() {
    // Click to lock pointer
    this.domElement.addEventListener('click', () => {
      if (!this.isPointerLocked) {
        this.domElement.requestPointerLock();
      }
    });
    
    // Pointer lock change events
    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.domElement;
      
      // Show/hide cursor
      document.body.style.cursor = this.isPointerLocked ? 'none' : 'auto';
      
      // Enable/disable orbit controls based on pointer lock
      if (this.controls) {
        this.controls.enabled = !this.isPointerLocked;
      }
    });
    
    // Mouse movement when pointer is locked
    document.addEventListener('mousemove', (event) => {
      if (this.isPointerLocked && this.controls) {
        // Manually update camera rotation
        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;
        
        // Update azimuth angle
        const spherical = new THREE.Spherical();
        spherical.setFromVector3(this.camera.position.clone().sub(this.controls.target));
        spherical.theta -= movementX * 0.002;
        spherical.phi += movementY * 0.002;
        
        // Clamp phi to prevent flipping
        spherical.phi = Math.max(0.1, Math.min(Math.PI * 0.45, spherical.phi));
        
        // Apply new position
        const offset = new THREE.Vector3();
        offset.setFromSpherical(spherical);
        this.camera.position.copy(this.controls.target).add(offset);
        this.camera.lookAt(this.controls.target);
      }
    });
    
    // ESC to exit pointer lock
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isPointerLocked) {
        document.exitPointerLock();
      }
    });
  }
  
}