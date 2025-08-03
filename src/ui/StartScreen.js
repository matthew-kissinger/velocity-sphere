/**
 * StartScreen - Game start screen with level selection
 */

import { StartBackground } from './StartBackground.js';

export class StartScreen {
  constructor() {
    this.element = document.getElementById('startScreen');
    this.onLevelSelect = null;
    this.keyHandler = null;
    this.background = null;
    this.init();
  }

  init() {
    if (!this.element) return;

    // Add click handlers for track buttons (updated for new design)
    const trackButtons = this.element.querySelectorAll('.track-btn');
    trackButtons.forEach(button => {
      button.addEventListener('click', () => {
        const level = parseInt(button.dataset.level);
        if (this.onLevelSelect) {
          this.onLevelSelect(level);
        }
      });

      // Add hover effects
      button.addEventListener('mouseenter', () => {
        this.playHoverSound();
      });
    });

    // Keyboard shortcuts
    this.keyHandler = (e) => {
      if (!this.isVisible()) return;

      // Handle number keys 1-9 and 0 for levels 1-10
      if (e.code.startsWith('Digit')) {
        const digit = parseInt(e.code.replace('Digit', ''));
        if (digit >= 1 && digit <= 9) {
          this.selectLevel(digit);
        } else if (digit === 0) {
          this.selectLevel(10); // 0 key selects level 10
        }
      }
      // Handle Shift + number keys for levels 11-20
      else if (e.shiftKey && e.code.startsWith('Digit')) {
        const digit = parseInt(e.code.replace('Digit', ''));
        if (digit >= 1 && digit <= 9) {
          this.selectLevel(10 + digit); // Shift+1 = level 11, etc.
        } else if (digit === 0) {
          this.selectLevel(20); // Shift+0 = level 20
        }
      }
    };
    document.addEventListener('keydown', this.keyHandler);

    this.addAnimations();
  }

  addAnimations() {
    // Remove slow animations - buttons should be instantly clickable
    const trackButtons = this.element.querySelectorAll('.track-btn');
    trackButtons.forEach((button) => {
      // No animation delay - instant availability
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    });
  }

  selectLevel(level) {
    if (this.onLevelSelect) {
      this.playSelectSound();
      this.onLevelSelect(level);
    }
  }

  show() {
    if (this.element) {
      this.element.style.display = 'flex';
      this.element.classList.add('fade-in');
      
      // Initialize background
      if (!this.background) {
        this.background = new StartBackground();
        // Wait a frame for the canvas to be visible
        requestAnimationFrame(() => {
          this.background.init();
        });
      }
    }
  }

  hide() {
    if (this.element) {
      // Remove keyboard listener when hiding
      if (this.keyHandler) {
        document.removeEventListener('keydown', this.keyHandler);
      }
      
      // Clean up background
      if (this.background) {
        this.background.destroy();
        this.background = null;
      }
      
      this.element.classList.add('fade-out');
      setTimeout(() => {
        this.element.style.display = 'none';
        this.element.classList.remove('fade-in', 'fade-out');
      }, 500);
    }
  }

  isVisible() {
    return this.element && this.element.style.display !== 'none';
  }

  playHoverSound() {
    // Placeholder for hover sound effect
    // Could be implemented with Web Audio API
  }

  playSelectSound() {
    // Placeholder for selection sound effect
    // Could be implemented with Web Audio API
  }
}

// Add animations CSS (minimal, no delays)
const style = document.createElement('style');
style.textContent = `
  .start-screen.fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .start-screen.fade-out {
    animation: fadeOut 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);