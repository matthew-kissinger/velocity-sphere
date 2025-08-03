/**
 * Timer - Simplified start-to-finish race timer with best time tracking
 */

import * as THREE from 'three';

export class Timer {
  constructor(hud, completionScreen, game = null) {
    this.hud = hud;
    this.completionScreen = completionScreen;
    this.game = game;
    
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
    this.hasBeenNearFinish = false;
    
    // Constants - tighter detection area matching gate visuals
    this.DETECTION_DISTANCE = 2.0;  // Reduced from 5.0 for tighter detection
    this.DETECTION_HEIGHT = 10.0;   // Height from track surface (gate is 20 high, starts 2 above track)
    this.DETECTION_WIDTH = 15.0;    // Width tolerance for finish line
    this.DETECTION_BOTTOM = 2.0;    // Bottom of gate starts 2 units above track
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
    this.hasBeenNearFinish = false;
    
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
    
    // Check if ball is within the finish gate area (height and width bounds)
    const relativePos = ballPosition.clone().sub(this.finishPlane.position);
    
    // Calculate position relative to plane's coordinate system
    const planeForward = this.finishPlane.normal.clone().normalize();
    
    // Create right and up vectors based on the plane's orientation
    // If the plane is mostly vertical, use world up
    const worldUp = new THREE.Vector3(0, 1, 0);
    const planeRight = new THREE.Vector3();
    const planeUp = new THREE.Vector3();
    
    // Calculate right vector (perpendicular to forward and world up)
    planeRight.crossVectors(worldUp, planeForward).normalize();
    
    // Calculate actual up vector (perpendicular to forward and right)
    planeUp.crossVectors(planeForward, planeRight).normalize();
    
    const widthOffset = Math.abs(relativePos.dot(planeRight));
    const heightOffset = relativePos.dot(planeUp); // Not absolute - we need actual height
    
    // Check if within the gate bounds (accounting for gate starting above track)
    // Make detection more forgiving for height
    const isWithinGate = widthOffset < this.DETECTION_WIDTH && 
                         heightOffset > -this.DETECTION_HEIGHT && 
                         heightOffset < (this.DETECTION_HEIGHT * 3);
    
    // Debug logging for finish line detection when close
    if (Math.abs(distanceToPlane) < this.DETECTION_DISTANCE * 2) {
      console.log(`Near finish: dist=${distanceToPlane.toFixed(2)}, width=${widthOffset.toFixed(1)}, height=${heightOffset.toFixed(1)}, inGate=${isWithinGate}, side=${currentSide}`);
    }
    
    // Mark when we've been near the finish at least once (to prevent false triggers at start)
    if (Math.abs(distanceToPlane) < this.DETECTION_DISTANCE * 4 && !this.hasBeenNearFinish && this.raceStarted) {
      this.hasBeenNearFinish = true;
      console.log('Now tracking finish line crossing');
    }
    
    // Finish the race when crossing through the gate
    if (this.hasBeenNearFinish &&
        this.lastFinishSide !== null && 
        this.lastFinishSide !== currentSide &&
        Math.abs(distanceToPlane) < this.DETECTION_DISTANCE &&
        isWithinGate &&
        this.raceStarted) {
      
      console.log('Finish line crossed through gate!');
      this.finishRace();
    }
    
    // Update last side when within reasonable distance
    if (Math.abs(distanceToPlane) < this.DETECTION_DISTANCE * 2 && isWithinGate) {
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
    
    // Pause the game immediately
    if (this.game) {
      this.game.pause();
    }
    
    if (this.hud) {
      this.hud.showRaceFinish(raceTime, isNewBest);
      this.hud.updateBestTime(this.getBestTime());
    }
    
    // Show completion screen immediately (no delay)
    if (this.completionScreen) {
      console.log('Showing completion screen with time:', raceTime);
      this.completionScreen.show(raceTime, this.getBestTime(), isNewBest);
    } else {
      console.error('No completion screen available in Timer!');
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