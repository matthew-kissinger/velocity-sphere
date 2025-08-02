/**
 * Skybox - Creates an immersive environment using modular skybox system
 */

import * as THREE from 'three';
import { SkyboxManager } from './SkyboxManager.js';

export class Skybox {
  constructor() {
    this.skyboxManager = new SkyboxManager();
    this.currentSkybox = 'sunset-vibes'; // Default skybox
  }

  async init(scene, skyboxName = 'sunset-vibes') {
    // Apply the specified skybox
    await this.setSkybox(skyboxName, scene);
  }

  /**
   * Set the skybox for the scene
   * @param {string} skyboxName - Name of the skybox to use
   * @param {THREE.Scene} scene - Scene to apply skybox to
   */
  async setSkybox(skyboxName, scene) {
    this.currentSkybox = skyboxName;
    await this.skyboxManager.applySkybox(skyboxName, scene);
  }

  /**
   * Update skybox uniforms (call every frame)
   * @param {number} time - Current time
   * @param {THREE.Camera} camera - Current camera
   * @param {THREE.Vector2} resolution - Screen resolution
   */
  update(time, camera = null, resolution = null) {
    if (camera && resolution) {
      const deltaTime = 1/60; // Fixed timestep
      this.skyboxManager.updateUniforms(deltaTime, camera, resolution);
    } else {
      // Legacy compatibility - just update time
      this.skyboxManager.globalUniforms.time.value = time * 0.001;
    }
  }

  /**
   * Get available skyboxes
   * @returns {Array<Object>}
   */
  getAvailableSkyboxes() {
    return this.skyboxManager.getAvailableSkyboxList();
  }

  /**
   * Add skybox to scene (legacy compatibility)
   * @param {THREE.Scene} scene - Scene to add to
   */
  addToScene(scene) {
    // Already handled by setSkybox
  }

  /**
   * Cleanup skybox resources
   */
  dispose() {
    if (this.skyboxManager) {
      this.skyboxManager.cleanup();
    }
  }
}