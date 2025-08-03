/**
 * InputManager - Centralized input handling with event system
 */

import nipplejs from 'nipplejs';

export class InputManager {
  constructor() {
    this.state = {
      left: false,
      right: false,
      up: false,
      down: false,
      jumpRequested: false,
      boostRequested: false
    };
    
    // Still need an event emitter for single-press actions like restart/level-select
    this.listeners = new Map();
    
    // Mobile controls
    this.joystick = null;
    this.isMobile = this.detectMobile();
    
    // Event handlers will use arrow functions to preserve context

    this.init();
  }
  
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || (window.matchMedia && window.matchMedia('(max-width: 768px)').matches)
      || ('ontouchstart' in window);
  }

  init() {
    // Desktop controls
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
      
      // Prevent default for game keys
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
    });
    
    window.addEventListener('keyup', (e) => {
      this.handleKeyUp(e);
    });
    
    // Mobile controls initialization will be called when game starts
  }
  
  initMobileControls() {
    if (!this.isMobile) return;
    
    const mobileControls = document.getElementById('mobileControls');
    if (mobileControls) {
      mobileControls.classList.remove('hidden');
      mobileControls.classList.add('show');
    }
    
    // Initialize joystick
    const joystickZone = document.getElementById('joystickZone');
    if (joystickZone) {
      this.joystick = nipplejs.create({
        zone: joystickZone,
        mode: 'static',
        position: { left: '50%', top: '50%' },
        color: 'cyan',
        size: 120,
        restOpacity: 0.75,
        fadeTime: 250
      });
      
      this.joystick.on('move', (evt, data) => {
        const force = Math.min(data.force, 1);
        const angle = data.angle.radian;
        
        // Convert joystick input to directional states
        const threshold = 0.3;
        
        // Calculate X and Y components
        const x = Math.cos(angle) * force;
        const y = Math.sin(angle) * force;
        
        // Map to game controls (y is inverted in screen space)
        this.state.right = x > threshold;
        this.state.left = x < -threshold;
        this.state.up = y > threshold;
        this.state.down = y < -threshold;
      });
      
      this.joystick.on('end', () => {
        // Reset movement when joystick is released
        this.state.left = false;
        this.state.right = false;
        this.state.up = false;
        this.state.down = false;
      });
    }
    
    // Initialize jump button
    const jumpButton = document.getElementById('jumpButton');
    if (jumpButton) {
      jumpButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.state.jumpRequested = true;
      });
      
      jumpButton.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.state.jumpRequested = true;
      });
    }
    
    // Initialize boost button
    const boostButton = document.getElementById('boostButton');
    if (boostButton) {
      boostButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.state.boostRequested = true;
      });
      
      boostButton.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.state.boostRequested = true;
      });
    }
  }
  
  hideMobileControls() {
    const mobileControls = document.getElementById('mobileControls');
    if (mobileControls) {
      mobileControls.classList.add('hidden');
      mobileControls.classList.remove('show');
    }
    
    if (this.joystick) {
      this.joystick.destroy();
      this.joystick = null;
    }
  }

  handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowLeft': case 'KeyA': this.state.left = true; break;
      case 'ArrowRight': case 'KeyD': this.state.right = true; break;
      case 'ArrowUp': case 'KeyW': this.state.up = true; break;
      case 'ArrowDown': case 'KeyS': this.state.down = true; break;
      case 'Space': this.state.jumpRequested = true; break;
      case 'ShiftLeft': case 'ShiftRight': this.state.boostRequested = true; break;
      
      // Handle single-press actions via events
      case 'KeyR': this.emit('restart'); break;
      case 'Digit1': this.emit('level', 1); break;
      case 'Digit2': this.emit('level', 2); break;
      case 'Digit3': this.emit('level', 3); break;
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'ArrowLeft': case 'KeyA': this.state.left = false; break;
      case 'ArrowRight': case 'KeyD': this.state.right = false; break;
      case 'ArrowUp': case 'KeyW': this.state.up = false; break;
      case 'ArrowDown': case 'KeyS': this.state.down = false; break;
      // Note: jumpRequested is NOT reset on keyup, it's consumed in the game loop.
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  emit(event, ...args) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(...args));
    }
  }

  dispose() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.listeners.clear();
    
    if (this.joystick) {
      this.joystick.destroy();
      this.joystick = null;
    }
  }
}