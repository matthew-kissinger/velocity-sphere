/**
 * Ball - The racing sphere with physics and controls
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Ball {
  constructor(physicsWorld, scene) {
    this.physicsWorld = physicsWorld;
    this.scene = scene;
    
    // Physics properties
    this.body = null;
    this.radius = 1.0;
    this.mass = 5;
    
    // Visual properties
    this.mesh = null;
    this.material = null;
    
    // Gameplay properties
    this.spawnPosition = new CANNON.Vec3(0, 5, 0);
    this.isGroundedFlag = false;
    this.lastJumpTime = 0;
    this.currentLevel = 1;
    this.trackMinY = -200; // Default, will be set by track
    
    // Boost properties
    this.lastBoostTime = 0;
    this.isBoostActive = false;
    this.boostDuration = 3; // seconds (increased duration)
    this.boostStartTime = 0;
    
    // Callbacks
    this.onFallOff = null;
    
    // Constants (match original)
    this.JUMP_VELOCITY = 8;      // vertical velocity applied when jumping (smaller hops to subtly clear gaps)
    this.JUMP_COOLDOWN = 0.3;    // seconds between jumps
    this.ACCELERATION = 30;      // Fixed force value from original
    this.MAX_SPEED = 999;        // no speed limit in original
    this.BOOST_COOLDOWN = 8;     // 8 second cooldown (reduced)
    this.BOOST_MULTIPLIER = 4.0; // 4x speed during boost (increased)
    this.BOOST_ACCELERATION = 80; // Extra acceleration during boost
  }

  init() {
    this.createPhysicsBody();
    this.createVisualMesh();
    this.setupContactListeners();
  }

  createPhysicsBody() {
    const shape = new CANNON.Sphere(this.radius);
    this.body = new CANNON.Body({ 
      mass: this.mass,
      material: this.physicsWorld.getMaterial('ball')
    });
    
    this.body.addShape(shape);
    this.body.position.copy(this.spawnPosition);
    // Lower damping so the ball retains more momentum (matches original)
    this.body.linearDamping = 0.1; // Lower damping so the ball retains more momentum (matches original)
    // Don't set angularDamping - use Cannon's default like the original
    
    this.physicsWorld.addBody(this.body);
  }

  createVisualMesh() {
    const geometry = new THREE.SphereGeometry(this.radius, 64, 64);
    
    // Create a cool holographic shader material
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
    
    const fragmentShader = `
      uniform float time;
      uniform vec3 color;
      uniform float speed;
      uniform bool isBoost;
      
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      void main() {
        // Fresnel effect
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = 1.0 - dot(viewDir, vNormal);
        fresnel = pow(fresnel, 2.0);
        
        // Animated energy lines
        float lines = sin(vWorldPosition.y * 20.0 + time * 3.0) * 0.5 + 0.5;
        lines *= sin(vWorldPosition.x * 15.0 - time * 2.0) * 0.5 + 0.5;
        lines = pow(lines, 3.0);
        
        // Speed-based color shift
        vec3 baseColor = color;
        if (isBoost) {
          baseColor = vec3(0.0, 1.0, 1.0); // Cyan for boost
        } else {
          baseColor = mix(vec3(0.4, 0.6, 1.0), vec3(1.0, 0.3, 0.3), clamp(speed / 100.0, 0.0, 1.0));
        }
        
        // Holographic effect
        vec3 holoColor = baseColor * (0.5 + 0.5 * sin(time * 2.0));
        
        // Combine effects
        vec3 finalColor = mix(baseColor * 0.3, holoColor, fresnel);
        finalColor += lines * baseColor * 0.5;
        finalColor += pow(fresnel, 3.0) * vec3(1.0, 1.0, 1.0) * 0.5;
        
        // Add rim lighting
        float rim = pow(fresnel, 4.0);
        finalColor += rim * baseColor * 2.0;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x4488ff) },
        speed: { value: 0 },
        isBoost: { value: false }
      }
    });
    
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    
    // Store reference to velocity for camera
    this.mesh.userData.velocity = new THREE.Vector3();
    
    this.scene.add(this.mesh);
  }

  setupContactListeners() {
    // Listen for collisions with special track elements
    this.body.addEventListener('collide', (event) => {
      const contactBody = event.body;
      
      if (!contactBody.userData) return;
      
      // Check if we hit a bounce pad
      if (contactBody.userData.isBouncePad) {
        // Apply upward impulse
        const bounceForce = 25; // Adjust this value to control bounce height
        this.body.velocity.y = Math.max(this.body.velocity.y, bounceForce);
        
        console.log('Hit bounce pad! Applying upward force:', bounceForce);
      }
      
      // Check if we hit a speed pad
      else if (contactBody.userData.isSpeedPad) {
        // Apply forward speed boost
        const currentVel = new CANNON.Vec3(
          this.body.velocity.x,
          this.body.velocity.y,
          this.body.velocity.z
        );
        const speed = currentVel.length();
        
        if (speed > 0.1) {
          // Boost in current direction
          currentVel.normalize();
          const boostedSpeed = Math.max(speed * 1.5, 40); // 1.5x speed or minimum 40
          currentVel.scale(boostedSpeed, currentVel);
          this.body.velocity.set(
            currentVel.x,
            currentVel.y,
            currentVel.z
          );
        } else {
          // If stationary, boost forward
          this.body.velocity.z += 40;
        }
        
        console.log('Hit speed pad! Speed boost applied');
      }
      
      // Check if we hit a boost powerup
      else if (contactBody.userData.isBoostPowerup && !contactBody.userData.collected) {
        // Mark as collected
        contactBody.userData.collected = true;
        
        // Hide the powerup meshes
        if (contactBody.userData.meshes) {
          contactBody.userData.meshes.forEach(mesh => {
            mesh.visible = false;
          });
        }
        
        // Reset boost cooldown
        this.lastBoostTime = 0;
        
        // If boost is not active, give a free boost
        if (!this.isBoostActive) {
          this.startBoost();
        }
        
        console.log('Collected boost powerup! Cooldown reset');
      }
    });
  }



  isGrounded() {
    // Determine whether the ball is on the ground by shooting a short ray downward (improved robustness)
    const from = new CANNON.Vec3(this.body.position.x, this.body.position.y, this.body.position.z);
    const to = new CANNON.Vec3(this.body.position.x, this.body.position.y - (this.radius + 1.2), this.body.position.z);
    const rayResult = new CANNON.RaycastResult();
    
    // Cast ray to detect ground
    this.physicsWorld.world.raycastClosest(from, to, {}, rayResult);
    
    // Ground detection: look for static bodies (mass === 0) and reasonable hit distance
    const hasValidHit = rayResult.hasHit && 
                       rayResult.body && 
                       rayResult.body.mass === 0 &&
                       rayResult.distance <= (this.radius + 1.0);
    
    // Also check if we have very low vertical velocity (helps with edge cases)
    const hasLowVerticalVelocity = Math.abs(this.body.velocity.y) < 2.0;
    
    // Improved ground detection: either clear ray hit OR low velocity + close to ground
    this.isGroundedFlag = hasValidHit || (hasLowVerticalVelocity && rayResult.hasHit && rayResult.distance <= (this.radius + 0.8));
    
    return this.isGroundedFlag;
  }

  update() {
    // Sync visual mesh with physics body
    this.mesh.position.copy(this.body.position);
    this.mesh.quaternion.copy(this.body.quaternion);
    
    // Update velocity data for camera
    this.mesh.userData.velocity.set(
      this.body.velocity.x,
      this.body.velocity.y,
      this.body.velocity.z
    );
    
    // Update shader uniforms
    if (this.material.uniforms) {
      this.material.uniforms.time.value = performance.now() * 0.001;
      this.material.uniforms.speed.value = this.getSpeed();
      this.material.uniforms.isBoost.value = this.isBoostActive;
    }
    
    // Check boost duration
    const nowSec = performance.now() / 1000;
    if (this.isBoostActive && (nowSec - this.boostStartTime > this.boostDuration)) {
      this.endBoost();
    }
    
    // Check if fallen off track (reset if too low)
    // Use track-aware threshold with safety margin
    const fallThreshold = this.trackMinY - 50; // 50 units below lowest track point
    if (this.body.position.y < fallThreshold) {
      console.log(`Ball fell off track at y: ${this.body.position.y}, threshold: ${fallThreshold}`);
      this.reset();
      // Emit event so timer can reset too
      if (this.onFallOff) {
        this.onFallOff();
      }
    }
  }

  setPosition(position) {
    this.spawnPosition.copy(position);
    this.body.position.copy(position);
    this.body.velocity.set(0, 0, 0);
    this.body.angularVelocity.set(0, 0, 0);
    this.mesh.position.copy(position);
  }
  
  setLevel(level) {
    this.currentLevel = level;
  }
  
  setTrackBounds(minY) {
    this.trackMinY = minY;
    console.log(`Track bounds set - minimum Y: ${minY}, fall threshold: ${minY - 50}`);
  }

  reset() {
    console.log('Ball reset to spawn position:', this.spawnPosition);
    this.setPosition(this.spawnPosition);
    
    // Reset boost on respawn
    this.lastBoostTime = 0;
    this.isBoostActive = false;
    this.endBoost();
  }

  getPosition() {
    return this.body.position.clone();
  }

  getSpeed() {
    return this.body.velocity.length();
  }
  
  startBoost() {
    const nowSec = performance.now() / 1000;
    if (!this.isBoostActive && (nowSec - this.lastBoostTime > this.BOOST_COOLDOWN)) {
      this.isBoostActive = true;
      this.boostStartTime = nowSec;
      this.lastBoostTime = nowSec;
      
      // Apply immediate forward boost with minimum speed guarantee
      const currentVelocity = new CANNON.Vec3(
        this.body.velocity.x,
        this.body.velocity.y,
        this.body.velocity.z
      );
      const speed = currentVelocity.length();
      
      if (speed > 0.1) {
        // Boost in current direction
        currentVelocity.normalize();
        currentVelocity.scale(speed * this.BOOST_MULTIPLIER, currentVelocity);
        this.body.velocity.set(
          currentVelocity.x,
          currentVelocity.y,
          currentVelocity.z
        );
      } else {
        // If stationary, boost forward relative to camera/world
        const boostForce = 50; // Strong initial boost when stationary
        this.body.velocity.set(0, 0, boostForce);
      }
      
      console.log('Boost activated! Speed multiplied by', this.BOOST_MULTIPLIER);
      return true;
    }
    return false;
  }
  
  endBoost() {
    this.isBoostActive = false;
    console.log('Boost ended');
  }
  
  getBoostCooldownRemaining() {
    const nowSec = performance.now() / 1000;
    const timeSinceBoost = nowSec - this.lastBoostTime;
    return Math.max(0, this.BOOST_COOLDOWN - timeSinceBoost);
  }

  dispose() {
    if (this.body) {
      this.physicsWorld.removeBody(this.body);
    }
    
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.material.dispose();
    }
  }
}