/**
 * InputManager - Centralized input handling with event system
 */

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
    
    // Event handlers will use arrow functions to preserve context

    this.init();
  }

  init() {
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
  }
}