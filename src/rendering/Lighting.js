/**
 * Lighting - Scene lighting setup for optimal racing game visuals
 */

import * as THREE from 'three';

export class Lighting {
  constructor() {
    this.lights = [];
  }

  addToScene(scene) {
    // Ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    this.lights.push(ambientLight);

    // Main directional light (sun)
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(50, 100, -50);
    mainLight.castShadow = true;
    
    // Configure shadow properties for better quality
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.1;
    mainLight.shadow.camera.far = 500;
    mainLight.shadow.camera.left = -100;
    mainLight.shadow.camera.right = 100;
    mainLight.shadow.camera.top = 100;
    mainLight.shadow.camera.bottom = -100;
    mainLight.shadow.bias = -0.0001;
    
    scene.add(mainLight);
    this.lights.push(mainLight);

    // Fill light for softer shadows
    const fillLight = new THREE.DirectionalLight(0x87ceeb, 0.8);
    fillLight.position.set(-30, 40, 30);
    scene.add(fillLight);
    this.lights.push(fillLight);

    // Rim light for dramatic effect
    const rimLight = new THREE.DirectionalLight(0xff6b9d, 0.4);
    rimLight.position.set(0, 10, -50);
    scene.add(rimLight);
    this.lights.push(rimLight);

    // Point lights for track highlights
    const trackLight1 = new THREE.PointLight(0x00ffff, 0.5, 50);
    trackLight1.position.set(0, 15, 0);
    scene.add(trackLight1);
    this.lights.push(trackLight1);

    const trackLight2 = new THREE.PointLight(0xff00ff, 0.5, 50);
    trackLight2.position.set(30, 15, 30);
    scene.add(trackLight2);
    this.lights.push(trackLight2);
  }

  updateLights(ballPosition) {
    // Dynamic lighting that follows the ball
    if (this.lights.length >= 3) {
      // Move rim light to highlight the ball
      this.lights[3].position.copy(ballPosition);
      this.lights[3].position.y += 10;
      this.lights[3].position.z -= 15;
    }
  }

  dispose() {
    this.lights.forEach(light => {
      if (light.parent) {
        light.parent.remove(light);
      }
      if (light.dispose) {
        light.dispose();
      }
    });
    this.lights = [];
  }
}