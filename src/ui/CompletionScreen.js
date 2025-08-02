/**
 * CompletionScreen - Shows when player completes a level
 */

export class CompletionScreen {
  constructor() {
    this.element = document.getElementById('completionScreen');
    this.timeElement = document.getElementById('completionTime');
    this.bestElement = document.getElementById('completionBest');
    this.retryButton = document.getElementById('retryButton');
    this.menuButton = document.getElementById('menuButton');
    
    this.onRetry = null;
    this.onMenu = null;
    this.keyHandler = null;
    
    this.init();
  }

  init() {
    if (!this.element) return;

    // Button click handlers
    if (this.retryButton) {
      this.retryButton.addEventListener('click', () => {
        if (this.onRetry) this.onRetry();
        this.hide();
      });
    }

    if (this.menuButton) {
      this.menuButton.addEventListener('click', () => {
        if (this.onMenu) this.onMenu();
        this.hide();
      });
    }

    // Keyboard shortcuts
    this.keyHandler = (e) => {
      if (!this.isVisible()) return;

      if (e.code === 'KeyR') {
        if (this.onRetry) this.onRetry();
        this.hide();
      } else if (e.code === 'Escape') {
        if (this.onMenu) this.onMenu();
        this.hide();
      }
    };
    document.addEventListener('keydown', this.keyHandler);
  }

  show(raceTime, bestTime, isNewBest = false) {
    if (this.element) {
      this.element.classList.remove('hidden');
      
      // Update time displays
      if (this.timeElement) {
        this.timeElement.textContent = `Time: ${raceTime.toFixed(2)}s`;
      }
      
      if (this.bestElement) {
        this.bestElement.textContent = `Best: ${bestTime ? bestTime.toFixed(2) + 's' : '--'}`;
        if (isNewBest) {
          this.bestElement.classList.add('new-record');
          this.bestElement.textContent = `NEW BEST: ${raceTime.toFixed(2)}s`;
        } else {
          this.bestElement.classList.remove('new-record');
        }
      }
      
      // Focus retry button for easy keyboard navigation
      if (this.retryButton) {
        setTimeout(() => this.retryButton.focus(), 100);
      }
    }
  }

  hide() {
    if (this.element) {
      this.element.classList.add('hidden');
    }
  }

  isVisible() {
    return this.element && !this.element.classList.contains('hidden');
  }

  destroy() {
    if (this.keyHandler) {
      document.removeEventListener('keydown', this.keyHandler);
    }
  }
}