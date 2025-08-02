/**
 * LoadingScreen - Loading screen with progress indication
 */

export class LoadingScreen {
  constructor() {
    this.element = document.getElementById('loadingScreen');
    this.textElement = null;
    this.spinnerElement = null;
    this.init();
  }

  init() {
    if (this.element) {
      this.textElement = this.element.querySelector('.loading-text');
      this.spinnerElement = this.element.querySelector('.loading-spinner');
    }
  }

  show(message = 'Loading Track...') {
    if (this.element) {
      this.updateText(message);
      this.element.classList.remove('hidden');
      this.element.style.display = 'flex';
    }
  }

  hide() {
    if (this.element) {
      this.element.classList.add('hidden');
      setTimeout(() => {
        this.element.style.display = 'none';
      }, 300);
    }
  }

  updateText(text) {
    if (this.textElement) {
      this.textElement.textContent = text;
    }
  }

  setProgress(percent) {
    // Could add a progress bar here in the future
    if (percent >= 100) {
      this.updateText('Complete!');
    }
  }

  isVisible() {
    return this.element && !this.element.classList.contains('hidden');
  }
}