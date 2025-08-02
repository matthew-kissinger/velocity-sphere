/**
 * Main Game Class - Orchestrates all game systems
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Renderer } from '../rendering/Renderer.js';
import { Camera } from '../rendering/Camera.js';
import { Lighting } from '../rendering/Lighting.js';
import { Skybox } from '../rendering/Skybox.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { Ball } from './Ball.js';
import { TrackBuilder } from '../tracks/TrackBuilder.js';
import { InputManager } from '../input/InputManager.js';
import { HUD } from '../ui/HUD.js';
import { Timer } from './Timer.js';

export class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = null;
    this.camera = null;
    this.lighting = null;
    this.skybox = null;
    this.physicsWorld = null;
    this.ball = null;
    this.trackBuilder = null;
    this.inputManager = null;
    this.hud = null;
    this.timer = null;
    this.completionScreen = null;
    
    this.currentLevel = 2;
    this.isRunning = false;
    this.gameLoop = null;
  }
  
  setCompletionScreen(completionScreen) {
    this.completionScreen = completionScreen;
  }

  async init() {
    console.log('Initializing game systems...');

    // Initialize rendering system
    this.renderer = new Renderer();
    this.scene.background = new THREE.Color(0x000000);

    // Initialize camera
    this.camera = new Camera(this.renderer.domElement);

    // Initialize lighting
    this.lighting = new Lighting();
    this.lighting.addToScene(this.scene);

    // Initialize skybox
    this.skybox = new Skybox();
    await this.skybox.init(this.scene);
    this.skybox.addToScene(this.scene);

    // Initialize physics
    this.physicsWorld = new PhysicsWorld();

    // Initialize ball
    this.ball = new Ball(this.physicsWorld, this.scene);
    this.ball.init();
    
    // Set up ball fall callback
    this.ball.onFallOff = () => {
      console.log('Ball fell off - resetting timer');
      this.timer.reset();
    };

    // Initialize track builder
    this.trackBuilder = new TrackBuilder(this.physicsWorld, this.scene);

    // Initialize input
    this.inputManager = new InputManager();
    this.setupInputHandlers();

    // Initialize UI
    this.hud = new HUD();
    this.timer = new Timer(this.hud, this.completionScreen);

    // Set up camera to follow ball
    this.camera.setTarget(this.ball.mesh);

    console.log('Game systems initialized successfully');
  }

  setupInputHandlers() {
    // Event-based listeners for single-press actions
    this.inputManager.on('restart', () => this.restart());
    this.inputManager.on('level', (level) => this.loadLevel(level));
    
    // Debug: manually trigger timer events
    window.addEventListener('keydown', (e) => {
      if (e.key === 't') {
        console.log('Debug: Manually starting timer');
        this.timer.startRace();
      }
      if (e.key === 'f') {
        console.log('Debug: Manually finishing race');
        this.timer.finishRace();
      }
    });
  }

  async loadLevel(level) {
    console.log(`Loading level ${level}...`);
    
    this.currentLevel = level;
    this.hud.updateLevel(level);

    // Clear existing track
    this.trackBuilder.clearTrack();

    // Load level data and build track
    const levelData = await import(`../tracks/levels/Level${level}.js`);
    
    // Apply skybox if specified in level data
    if (levelData.default.skybox && this.skybox) {
      await this.skybox.setSkybox(levelData.default.skybox, this.scene);
    }
    
    const track = await this.trackBuilder.buildTrack(levelData.default);

    // Position ball at start and set level
    this.ball.setPosition(track.startPosition);
    this.ball.setLevel(level);
    
    // Set track bounds for dynamic fall detection
    if (track.bounds) {
      this.ball.setTrackBounds(track.bounds.minY);
    }
    
    // Reset boost cooldown for new level
    this.ball.lastBoostTime = 0;
    
    // Position camera behind ball facing forward along track
    if (track.startPlane) {
      // Use the track's forward direction (normal of start plane)
      const forward = track.startPlane.normal.clone();
      const cameraOffset = forward.clone().multiplyScalar(-25); // 25 units behind
      cameraOffset.y = 15; // 15 units up
      
      const cameraPos = track.startPosition.clone().add(cameraOffset);
      this.camera.camera.position.copy(cameraPos);
      this.camera.controls.target.copy(track.startPosition);
    }
    
    // Set up timer with track data and current level
    console.log('Setting up timer with track data:', track);
    this.timer.setTrack(track, this.currentLevel);
    
    // Initialize detection AFTER setTrack but BEFORE reset
    this.timer.initializeDetection(this.ball.getPosition());

    console.log(`Level ${level} loaded successfully`);
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.animate();
    console.log('Game started');
  }

  stop() {
    this.isRunning = false;
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop);
      this.gameLoop = null;
    }
    console.log('Game stopped');
  }

  restart() {
    this.ball.reset();
    this.timer.reset();
    this.hud.reset();
  }

  animate() {
    if (!this.isRunning) return;

    this.gameLoop = requestAnimationFrame(() => this.animate());
    
    // Begin FPS monitoring
    this.hud.updateFPS();
    
    // Apply player input as force on the ball BEFORE physics step
    this.handlePlayerInput();
    
    // Step physics world at fixed timestep
    this.physicsWorld.step(1/60);

    // Update ball mesh position
    this.ball.update();

    // Update camera
    this.camera.update();

    // Update timer
    this.timer.update(this.ball.getPosition());

    // Update HUD
    this.hud.update({
      speed: this.ball.getSpeed(),
      position: this.ball.getPosition(),
      isGrounded: this.ball.isGrounded(),
      boostCooldown: this.ball.getBoostCooldownRemaining(),
      isBoostActive: this.ball.isBoostActive
    });
    
    // Update shader uniforms for both skybox and track
    const deltaTime = 1/60; // Fixed timestep
    const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
    
    // Update skybox
    if (this.skybox) {
      this.skybox.update(performance.now(), this.camera.camera, resolution);
    }

    // Update track shaders
    if (this.trackBuilder) {
      this.trackBuilder.updateShaderUniforms(deltaTime, this.camera.camera, resolution);
    }

    // Render scene
    this.renderer.render(this.scene, this.camera.camera);
    
    // End FPS monitoring
    this.hud.endFPS();
  }

  handlePlayerInput() {
    const input = this.inputManager.state;
    const ballBody = this.ball.body;
    // Use boosted acceleration if boost is active
    const accel = this.ball.isBoostActive ? this.ball.BOOST_ACCELERATION : this.ball.ACCELERATION;

    // Apply movement forces
    const camForward = new THREE.Vector3();
    this.camera.camera.getWorldDirection(camForward);
    camForward.y = 0;
    camForward.normalize();
    const camRight = new THREE.Vector3().crossVectors(camForward, new THREE.Vector3(0, 1, 0)).normalize().negate();
    
    const force = new CANNON.Vec3(0, 0, 0);
    if (input.up) {
      force.x += camForward.x * accel;
      force.z += camForward.z * accel;
    }
    if (input.down) {
      force.x -= camForward.x * accel;
      force.z -= camForward.z * accel;
    }
    if (input.left) {
      force.x += camRight.x * accel;
      force.z += camRight.z * accel;
    }
    if (input.right) {
      force.x -= camRight.x * accel;
      force.z -= camRight.z * accel;
    }
    // In cannon-es, applyForce with a point is relative to body center, not world position
    // For forces at center of mass, just pass the force without a point
    ballBody.applyForce(force);

    // Handle jump logic
    const nowSec = performance.now() / 1000;
    if (input.jumpRequested && this.ball.isGrounded() && (nowSec - this.ball.lastJumpTime > this.ball.JUMP_COOLDOWN)) {
      ballBody.velocity.y += this.ball.JUMP_VELOCITY;
      this.ball.lastJumpTime = nowSec;
      input.jumpRequested = false; // Consume the jump request
    }
    
    // Handle boost
    if (input.boostRequested) {
      if (this.ball.startBoost()) {
        this.hud.showBoostActivated();
      }
      input.boostRequested = false; // Consume the boost request
    }
  }

  handleResize() {
    this.camera.handleResize();
    this.renderer.handleResize();
  }

  destroy() {
    // Stop the game loop
    this.stop();
    
    // Clean up event listeners
    if (this.inputManager) {
      this.inputManager.dispose();
    }
    
    // Clean up Three.js resources
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    // Clear the scene
    while(this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    
    // Reset references
    this.ball = null;
    this.trackBuilder = null;
    this.physicsWorld = null;
    this.camera = null;
    this.lighting = null;
    this.skybox = null;
  }

  getScene() {
    return this.scene;
  }

  getPhysicsWorld() {
    return this.physicsWorld.world;
  }
}