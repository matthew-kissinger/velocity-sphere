/**
 * Timer - Simplified start-to-finish race timer with best time tracking
 */

import * as THREE from 'three';

export class Timer {
  constructor(hud, completionScreen) {
    this.hud = hud;
    this.completionScreen = completionScreen;
    
    // Timer state
    this.raceStarted = false;
    this.startTime = 0;
    this.currentTime = 0;
    
    // Track data
    this.finishPlane = null;
    this.currentLevel = 1;
    
    // Movement detection
    this.hasMovedYet = false;
    this.initialPosition = null;
    
    // Detection state
    this.lastFinishSide = null;
    
    // Constants
    this.DETECTION_DISTANCE = 5.0;
    this.MOVEMENT_THRESHOLD = 0.5; // Minimum movement to start timer
  }

  setTrack(trackData, level) {
    this.finishPlane = trackData.finishPlane;
    this.currentLevel = level;
    this.reset();
    
    // Store initial position
    this.initialPosition = trackData.startPosition ? trackData.startPosition.clone() : new THREE.Vector3(0, 5, 0);
    
    // Load best time from storage
    const bestTime = this.getBestTime();
    if (this.hud) {
      this.hud.updateBestTime(bestTime);
    }
    
    console.log('Timer initialized for level', level, 'finish plane:', this.finishPlane);
  }

  reset() {
    this.raceStarted = false;
    this.startTime = 0;
    this.currentTime = 0;
    this.hasMovedYet = false;
    this.lastFinishSide = null;
    
    if (this.hud) {
      this.hud.updateTimer(0);
    }
    
    console.log('Timer reset');
  }

  update(ballPosition) {
    if (!this.finishPlane) {
      console.warn('No finish plane set!');
      return;
    }

    // Convert CANNON.Vec3 to THREE.Vector3
    const pos = new THREE.Vector3(ballPosition.x, ballPosition.y, ballPosition.z);
    
    // Start timer on first movement
    if (!this.raceStarted && !this.hasMovedYet && this.initialPosition) {
      const distance = pos.distanceTo(this.initialPosition);
      if (distance > this.MOVEMENT_THRESHOLD) {
        this.startRace();
        this.hasMovedYet = true;
      }
    }
    
    // Check finish line
    this.checkFinishLine(pos);
    
    // Update timer
    if (this.raceStarted) {
      this.currentTime = (performance.now() - this.startTime) / 1000;
      if (this.hud) {
        this.hud.updateTimer(this.currentTime);
      }
    }
  }


  checkFinishLine(ballPosition) {
    const distanceToPlane = this.getDistanceToPlane(ballPosition, this.finishPlane);
    const currentSide = Math.sign(distanceToPlane);
    
    // Debug logging for finish line detection
    if (Math.abs(distanceToPlane) < this.DETECTION_DISTANCE * 2) {
      console.log(`Near finish line: distance=${distanceToPlane.toFixed(2)}, side=${currentSide}, lastSide=${this.lastFinishSide}, raceStarted=${this.raceStarted}`);
    }
    
    // Finish the race when crossing the finish line
    if (this.lastFinishSide !== null && 
        this.lastFinishSide !== currentSide && // Changed to detect any side change
        Math.abs(distanceToPlane) < this.DETECTION_DISTANCE &&
        this.raceStarted) {
      
      console.log('Finish line crossed!');
      this.finishRace();
    }
    
    if (Math.abs(distanceToPlane) < this.DETECTION_DISTANCE * 3) {
      this.lastFinishSide = currentSide;
    }
  }

  getDistanceToPlane(point, plane) {
    // Ensure point is a THREE.Vector3 before using its methods
    const threePoint = new THREE.Vector3(point.x, point.y, point.z);
    const relativePos = threePoint.clone().sub(plane.position);
    return relativePos.dot(plane.normal);
  }

  startRace() {
    if (this.raceStarted) return;
    
    this.raceStarted = true;
    this.startTime = performance.now();
    
    console.log('Race started at time:', this.startTime);
    if (this.hud) {
      this.hud.showRaceStart();
    }
  }

  finishRace() {
    if (!this.raceStarted) return;
    
    this.raceStarted = false;
    const raceTime = this.currentTime;
    
    const bestTime = this.getBestTime();
    let isNewBest = false;
    if (bestTime === null || raceTime < bestTime) {
      this.saveBestTime(raceTime);
      isNewBest = true;
    }
    
    console.log(`Race finished! Time: ${raceTime.toFixed(2)}s${isNewBest ? ' (NEW BEST!)' : ''}`);
    
    if (this.hud) {
      this.hud.showRaceFinish(raceTime, isNewBest);
      this.hud.updateBestTime(this.getBestTime());
    }
    
    // Show completion screen
    if (this.completionScreen) {
      setTimeout(() => {
        this.completionScreen.show(raceTime, this.getBestTime(), isNewBest);
      }, 1500); // Delay to let the notification show first
    }
  }

  // Best Time Management (using localStorage)
  getBestTime() {
    const bestTime = localStorage.getItem(`bestTime_level_${this.currentLevel}`);
    return bestTime ? parseFloat(bestTime) : null;
  }

  saveBestTime(time) {
    localStorage.setItem(`bestTime_level_${this.currentLevel}`, time.toString());
  }

  // Initialize detection based on ball's initial position
  initializeDetection(ballPosition) {
    // Convert CANNON.Vec3 to THREE.Vector3
    const pos = new THREE.Vector3(ballPosition.x, ballPosition.y, ballPosition.z);
    
    // Store initial position for movement detection
    this.initialPosition = pos.clone();
    
    if (this.finishPlane) {
      const finishDistance = this.getDistanceToPlane(pos, this.finishPlane);
      this.lastFinishSide = Math.sign(finishDistance);
      console.log(`Initialized finish detection: distance=${finishDistance.toFixed(2)}, side=${this.lastFinishSide}`);
    } else {
      console.error('No finish plane when initializing detection!');
    }
  }
}