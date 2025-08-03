/**
 * Velocity Sphere - Main Entry Point
 * Professional racing game built with Three.js and Cannon.js
 */

import { Game } from './game/Game.js';
import { StartScreen } from './ui/StartScreen.js';
import { LoadingScreen } from './ui/LoadingScreen.js';
import { CompletionScreen } from './ui/CompletionScreen.js';

class VelocitySphere {
  constructor() {
    this.game = null;
    this.startScreen = new StartScreen();
    this.loadingScreen = new LoadingScreen();
    this.completionScreen = new CompletionScreen();
    this.currentLevel = 1;
    
    this.init();
  }

  async init() {
    // Initialize start screen
    this.startScreen.show();
    this.startScreen.onLevelSelect = (level) => this.startGame(level);
    
    // Initialize completion screen callbacks
    this.completionScreen.onRetry = () => this.retryLevel();
    this.completionScreen.onMenu = () => this.returnToMenu();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      if (this.game) {
        this.game.handleResize();
      }
    });
    
    // Handle ESC key for returning to menu
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.game && this.game.isRunning && !this.completionScreen.isVisible()) {
        this.returnToMenu();
      }
    });

    // Preload assets while on start screen
    await this.preloadAssets();
  }

  async preloadAssets() {
    // This would be where we preload textures, models, etc.
    // For now, we'll just simulate loading
    console.log('Preloading game assets...');
  }

  async startGame(level) {
    try {
      this.currentLevel = level;
      this.startScreen.hide();
      this.loadingScreen.show();

      // Create and initialize the game
      this.game = new Game();
      await this.game.init();
      
      // Pass completion screen to game
      this.game.setCompletionScreen(this.completionScreen);
      
      await this.game.loadLevel(level);

      this.loadingScreen.hide();
      this.game.start();

    } catch (error) {
      console.error('Failed to start game:', error);
      this.loadingScreen.hide();
      this.startScreen.show();
    }
  }
  
  async retryLevel() {
    if (this.game) {
      console.log('Retrying level...');
      
      // Hide completion screen first
      this.completionScreen.hide();
      
      // Reset the game state and resume
      this.game.restart();
      this.game.resume();
      
      console.log('Level retry initiated');
    }
  }
  
  returnToMenu() {
    if (this.game) {
      this.game.stop();
      this.game.destroy();
      this.game = null;
    }
    this.completionScreen.hide();
    this.startScreen.show();
  }
}

// Start the application
window.addEventListener('DOMContentLoaded', () => {
  new VelocitySphere();
});