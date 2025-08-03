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
    if (!this.element) {
      console.error('CompletionScreen: No element found!');
      return;
    }

    console.log('CompletionScreen init - elements found:', {
      element: !!this.element,
      timeElement: !!this.timeElement,
      bestElement: !!this.bestElement,
      retryButton: !!this.retryButton,
      menuButton: !!this.menuButton
    });

    // Button click handlers
    if (this.retryButton) {
      this.retryButton.addEventListener('click', () => {
        console.log('Retry button clicked');
        if (this.onRetry) this.onRetry();
        this.hide();
      });
    } else {
      console.error('CompletionScreen: Retry button not found!');
    }

    if (this.menuButton) {
      this.menuButton.addEventListener('click', () => {
        console.log('Menu button clicked');
        if (this.onMenu) this.onMenu();
        this.hide();
      });
    } else {
      console.error('CompletionScreen: Menu button not found!');
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
    console.log('CompletionScreen.show called with:', { raceTime, bestTime, isNewBest });
    
    if (!this.element) {
      console.error('CompletionScreen element not found!');
      return;
    }
    
    // Make sure the element exists and is properly styled
    this.element.style.display = 'flex';
    
    // Show the screen with a small delay to ensure styles are applied
    requestAnimationFrame(() => {
      this.element.classList.remove('hidden');
      console.log('CompletionScreen is now visible');
    });
    
    // Format time nicely
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = (seconds % 60).toFixed(2);
      return mins > 0 ? `${mins}:${secs.padStart(5, '0')}` : `${secs}s`;
    };
    
    // Update time display
    if (this.timeElement) {
      this.timeElement.innerHTML = `
        <div class="time-label">YOUR TIME</div>
        <div class="time-value ${isNewBest ? 'new-best-animation' : ''}">${formatTime(raceTime)}</div>
      `;
    }
    
    // Update best time display
    if (this.bestElement) {
      if (isNewBest) {
        this.bestElement.innerHTML = `
          <div class="best-label">🏆 NEW RECORD! 🏆</div>
          <div class="best-value new-record">${formatTime(raceTime)}</div>
        `;
      } else if (bestTime) {
        const difference = raceTime - bestTime;
        const diffStr = difference > 0 ? `+${difference.toFixed(2)}s` : '';
        this.bestElement.innerHTML = `
          <div class="best-label">BEST TIME</div>
          <div class="best-value">${formatTime(bestTime)}</div>
          ${diffStr ? `<div class="time-difference">Difference: ${diffStr}</div>` : ''}
        `;
      } else {
        this.bestElement.innerHTML = `
          <div class="best-label">FIRST COMPLETION!</div>
          <div class="best-value">${formatTime(raceTime)}</div>
        `;
      }
    }
    
    // Add performance rating
    this.addPerformanceRating(raceTime, bestTime);
    
    // Make sure buttons are visible
    const buttonsContainer = document.querySelector('.completion-buttons');
    if (buttonsContainer) {
      buttonsContainer.style.display = 'flex';
      buttonsContainer.style.opacity = '1';
    }
    
    // Focus retry button for easy keyboard navigation
    setTimeout(() => {
      if (this.retryButton) {
        this.retryButton.focus();
      }
    }, 100);
  }
  
  addPerformanceRating(raceTime, bestTime) {
    // Create or update rating element
    let ratingElement = document.getElementById('performanceRating');
    if (!ratingElement) {
      ratingElement = document.createElement('div');
      ratingElement.id = 'performanceRating';
      ratingElement.className = 'performance-rating';
      this.bestElement.parentNode.insertBefore(ratingElement, this.bestElement.nextSibling);
    }
    
    // Calculate rating based on time
    let rating = '';
    let stars = 0;
    
    if (bestTime) {
      const ratio = raceTime / bestTime;
      if (ratio <= 1.0) {
        rating = 'PERFECT!';
        stars = 3;
      } else if (ratio <= 1.1) {
        rating = 'EXCELLENT!';
        stars = 3;
      } else if (ratio <= 1.25) {
        rating = 'GOOD!';
        stars = 2;
      } else if (ratio <= 1.5) {
        rating = 'NICE TRY!';
        stars = 1;
      } else {
        rating = 'COMPLETED!';
        stars = 1;
      }
    } else {
      rating = 'FIRST CLEAR!';
      stars = 2;
    }
    
    const starsHTML = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    ratingElement.innerHTML = `
      <div class="rating-stars">${starsHTML}</div>
      <div class="rating-text">${rating}</div>
    `;
  }

  hide() {
    if (this.element) {
      this.element.classList.add('hidden');
      // Also reset display to ensure it's fully hidden
      setTimeout(() => {
        if (this.element.classList.contains('hidden')) {
          this.element.style.display = 'none';
        }
      }, 300); // Wait for animation to complete
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