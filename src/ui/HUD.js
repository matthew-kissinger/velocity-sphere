/**
 * HUD - Heads-up display for game information
 */

import Stats from 'stats.js';

export class HUD {
  constructor() {
    this.elements = {
      levelDisplay: document.getElementById('levelDisplay'),
      timer: document.getElementById('timer'),
      speedometer: document.getElementById('speedometer'),
      bestTime: document.getElementById('bestTime'),
      boostStatus: document.getElementById('boostStatus')
    };
    
    this.currentLevel = 1;
    
    // FPS monitoring with stats.js
    this.showFPS = false;
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: FPS, 1: ms, 2: mb, 3+: custom
    this.stats.dom.style.display = 'none';
    this.stats.dom.style.position = 'absolute';
    this.stats.dom.style.top = '80px';
    this.stats.dom.style.left = '10px';
    this.stats.dom.style.zIndex = '1000';
    document.body.appendChild(this.stats.dom);
    
    this.init();
    this.setupFPSToggle();
  }

  init() {
    this.reset();
  }

  updateLevel(level) {
    this.currentLevel = level;
    if (this.elements.levelDisplay) {
      this.elements.levelDisplay.textContent = `LVL ${level}`;
    }
  }

  updateTimer(time) {
    if (this.elements.timer) {
      this.elements.timer.textContent = `${time.toFixed(2)}s`;
      this.elements.timer.classList.add('primary');
    }
  }

  updateBestTime(bestTime) {
    if (this.elements.bestTime) {
      if (bestTime !== null) {
        this.elements.bestTime.textContent = `BEST ${bestTime.toFixed(2)}s`;
      } else {
        this.elements.bestTime.textContent = 'BEST --';
      }
    }
  }

  update(gameData) {
    // Update speedometer
    if (this.elements.speedometer) {
      const speed = gameData.speed || 0;
      this.elements.speedometer.textContent = `${speed.toFixed(0)} m/s`;
      
      // Add visual feedback for high speeds
      if (speed > 50) {
        this.elements.speedometer.classList.add('high-speed');
      } else {
        this.elements.speedometer.classList.remove('high-speed');
      }
    }
    
    // Debug: Log position occasionally
    if (Math.random() < 0.01 && gameData.position) {
      console.log(`Ball position - Y: ${gameData.position.y.toFixed(1)}`);
    }
    
    // Update boost status
    if (this.elements.boostStatus) {
      if (gameData.isBoostActive) {
        this.elements.boostStatus.textContent = 'BOOST!';
        this.elements.boostStatus.classList.add('boost-active');
      } else if (gameData.boostCooldown > 0) {
        this.elements.boostStatus.textContent = `${gameData.boostCooldown.toFixed(1)}s`;
        this.elements.boostStatus.classList.remove('boost-active');
      } else {
        this.elements.boostStatus.textContent = 'SHIFT';
        this.elements.boostStatus.classList.remove('boost-active');
      }
    }
  }

  showRaceStart() {
    this.showNotification('GO!', 'success');
  }

  showRaceFinish(time, isNewBest = false) {
    const message = isNewBest ? 
      `NEW BEST! ${time.toFixed(2)}s` : 
      `Finished! ${time.toFixed(2)}s`;
    
    this.showNotification(message, isNewBest ? 'best' : 'success');
    
    // Add visual effect to timer
    if (this.elements.timer) {
      this.elements.timer.classList.add('finish');
      setTimeout(() => {
        this.elements.timer.classList.remove('finish');
      }, 1000);
    }
  }

  showCheckpointPassed(checkpoint, total) {
    this.showNotification(`Checkpoint ${checkpoint}/${total}`, 'info');
  }

  showBoostActivated() {
    // Add boost effect to speedometer
    if (this.elements.speedometer) {
      this.elements.speedometer.classList.add('boost');
      setTimeout(() => {
        this.elements.speedometer.classList.remove('boost');
      }, 500);
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: this.getNotificationColor(type),
      color: '#ffffff',
      padding: '15px 30px',
      borderRadius: '10px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      zIndex: '1000',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
      animation: 'notificationSlide 2s ease-out forwards'
    });
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 2000);
  }

  getNotificationColor(type) {
    switch (type) {
      case 'success': return 'rgba(0, 255, 0, 0.9)';
      case 'best': return 'rgba(255, 215, 0, 0.9)';
      case 'info': return 'rgba(0, 255, 255, 0.9)';
      case 'warning': return 'rgba(255, 165, 0, 0.9)';
      case 'error': return 'rgba(255, 0, 0, 0.9)';
      default: return 'rgba(0, 255, 255, 0.9)';
    }
  }

  reset() {
    this.updateTimer(0);
    
    // Remove any active effects
    Object.values(this.elements).forEach(element => {
      if (element) {
        element.classList.remove('boost', 'finish', 'high-speed');
      }
    });
  }

  hide() {
    const hud = document.getElementById('hud');
    if (hud) {
      hud.style.display = 'none';
    }
  }

  show() {
    const hud = document.getElementById('hud');
    if (hud) {
      hud.style.display = 'block';
    }
  }



  setupFPSToggle() {
    // Add key listener for F key to toggle FPS display
    document.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'f' && !event.repeat) {
        this.toggleFPS();
      }
    });
  }

  toggleFPS() {
    this.showFPS = !this.showFPS;
    this.stats.dom.style.display = this.showFPS ? 'block' : 'none';
    
    console.log(`FPS display ${this.showFPS ? 'enabled' : 'disabled'}. Press F to toggle.`);
  }

  updateFPS() {
    // Always update stats.js (it handles its own visibility)
    this.stats.begin();
  }

  endFPS() {
    // Call this at the end of each frame
    this.stats.end();
  }
}

