/**
 * PhysicsWorld - Cannon.js physics world setup and management
 */

import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  constructor() {
    this.world = null;
    this.materials = new Map();
    this.init();
  }

  init() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0); // Same as original
    this.world.broadphase = new CANNON.NaiveBroadphase(); // Matches original
    this.world.solver.iterations = 5; // Balanced for performance and stability
    this.world.defaultContactMaterial.friction = 0.3; // Restore original friction
    
    // Additional settings to match original Cannon.js 0.6.2 behavior
    this.world.solver.tolerance = 0.1; // Default in old Cannon
    this.world.quatNormalizeSkip = 0; // Normalize quaternions every step
    this.world.quatNormalizeFast = false; // Use accurate normalization
    
    this.setupMaterials();
  }

  setupMaterials() {
    // Track material (matches original)
    const trackMaterial = new CANNON.Material('trackMaterial');
    this.materials.set('track', trackMaterial);
    
    // Ball material (matches original)
    const ballMaterial = new CANNON.Material('ballMaterial');
    this.materials.set('ball', ballMaterial);
    
    // Contact material (matches original settings)
    const trackBallContact = new CANNON.ContactMaterial(trackMaterial, ballMaterial, {
      friction: 0.3,  // Slightly higher friction for better control
      restitution: 0.0
    });
    this.world.addContactMaterial(trackBallContact);
  }

  getMaterial(name) {
    return this.materials.get(name) || this.materials.get('track'); // fallback to track material
  }

  step(deltaTime = 1/60) {
    // Use manual step with fixed timestep for deterministic physics
    // This matches the original Cannon.js 0.6.2 behavior
    const fixedTimeStep = 1/60;
    const maxSubSteps = 3;
    this.world.step(fixedTimeStep, deltaTime, maxSubSteps);
  }

  addBody(body) {
    this.world.addBody(body);
  }

  removeBody(body) {
    this.world.removeBody(body);
  }

  raycast(from, to, options = {}) {
    const result = new CANNON.RaycastResult();
    this.world.raycastClosest(from, to, options, result);
    return result;
  }

  dispose() {
    // Remove all bodies
    while (this.world.bodies.length > 0) {
      this.world.removeBody(this.world.bodies[0]);
    }
    
    // Clear materials
    this.materials.clear();
    this.world = null;
  }
}