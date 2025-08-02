/**
 * Modular Skybox System for Velocity Sphere
 * Manages loading and applying different skybox shaders
 */

import * as THREE from 'three';

export class SkyboxManager {
  constructor() {
    this.skyboxCache = new Map();
    this.currentSkybox = null;
    this.loadedSkyboxes = new Set();
    this.skyboxMesh = null;
    
    // Global uniforms for all skyboxes
    this.globalUniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
      cameraPosition: { value: new THREE.Vector3() }
    };
  }

  /**
   * Load a skybox shader from the skybox library
   * @param {string} skyboxName - Name of the skybox shader file
   * @returns {Promise<THREE.ShaderMaterial>}
   */
  async loadSkybox(skyboxName) {
    if (this.skyboxCache.has(skyboxName)) {
      return this.skyboxCache.get(skyboxName);
    }

    try {
      // Import the skybox shader module
      const skyboxModule = await import(`../skyboxes/${skyboxName}.js`);
      const skyboxConfig = skyboxModule.default;

      // Create the skybox material
      const material = new THREE.ShaderMaterial({
        uniforms: {
          ...this.globalUniforms,
          ...skyboxConfig.uniforms || {}
        },
        vertexShader: skyboxConfig.vertexShader,
        fragmentShader: skyboxConfig.fragmentShader,
        side: THREE.BackSide, // Render inside of sphere
        depthWrite: false,
        depthTest: false
      });

      // Store metadata
      material.userData = {
        name: skyboxName,
        description: skyboxConfig.description || '',
        author: skyboxConfig.author || 'Unknown',
        version: skyboxConfig.version || '1.0.0',
        tags: skyboxConfig.tags || [],
        mood: skyboxConfig.mood || 'neutral'
      };

      this.skyboxCache.set(skyboxName, material);
      this.loadedSkyboxes.add(skyboxName);
      
      console.log(`Skybox loaded: ${skyboxName}`, material.userData);
      return material;
    } catch (error) {
      console.error(`Failed to load skybox: ${skyboxName}`, error);
      // Return fallback basic skybox
      return this.getFallbackSkybox();
    }
  }

  /**
   * Get a fallback skybox when loading fails
   * @returns {THREE.ShaderMaterial}
   */
  getFallbackSkybox() {
    if (!this.fallbackSkybox) {
      this.fallbackSkybox = new THREE.ShaderMaterial({
        uniforms: {
          topColor: { value: new THREE.Color(0x001133) },
          bottomColor: { value: new THREE.Color(0x000011) }
        },
        vertexShader: `
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
          }
        `,
        side: THREE.BackSide,
        depthWrite: false
      });
    }
    return this.fallbackSkybox;
  }

  /**
   * Apply a skybox to the scene
   * @param {string} skyboxName - Name of the skybox
   * @param {THREE.Scene} scene - Scene to add skybox to
   * @returns {Promise<THREE.Mesh>}
   */
  async applySkybox(skyboxName, scene) {
    // Remove existing skybox
    if (this.skyboxMesh) {
      scene.remove(this.skyboxMesh);
      this.skyboxMesh.geometry.dispose();
      this.skyboxMesh.material.dispose();
    }

    // Load and apply new skybox
    const material = await this.loadSkybox(skyboxName);
    const geometry = new THREE.SphereGeometry(2000, 64, 32);
    
    this.skyboxMesh = new THREE.Mesh(geometry, material);
    this.skyboxMesh.renderOrder = -1; // Render first
    
    scene.add(this.skyboxMesh);
    this.currentSkybox = skyboxName;
    
    console.log(`Applied skybox: ${skyboxName}`);
    return this.skyboxMesh;
  }

  /**
   * Update skybox uniforms (call this every frame)
   * @param {number} deltaTime - Time since last frame
   * @param {THREE.Camera} camera - Current camera
   * @param {THREE.Vector2} resolution - Screen resolution
   */
  updateUniforms(deltaTime, camera, resolution) {
    this.globalUniforms.time.value += deltaTime;
    this.globalUniforms.cameraPosition.value.copy(camera.position);
    this.globalUniforms.resolution.value.copy(resolution);

    // Update all cached skybox materials
    for (const material of this.skyboxCache.values()) {
      if (material.uniforms) {
        // Update global uniforms in each material
        Object.keys(this.globalUniforms).forEach(key => {
          if (material.uniforms[key]) {
            material.uniforms[key].value = this.globalUniforms[key].value;
          }
        });
      }
    }
  }

  /**
   * Get skybox info for level selection
   * @param {string} skyboxName - Name of the skybox
   * @returns {Object|null}
   */
  getSkyboxInfo(skyboxName) {
    const material = this.skyboxCache.get(skyboxName);
    return material ? material.userData : null;
  }

  /**
   * List all available skyboxes
   * @returns {Array<string>}
   */
  getAvailableSkyboxes() {
    return Array.from(this.loadedSkyboxes);
  }

  /**
   * Preload commonly used skyboxes
   * @param {Array<string>} skyboxNames - Array of skybox names to preload
   */
  async preloadSkyboxes(skyboxNames) {
    const loadPromises = skyboxNames.map(name => this.loadSkybox(name));
    await Promise.all(loadPromises);
    console.log(`Preloaded ${skyboxNames.length} skyboxes`);
  }

  /**
   * Clean up unused skyboxes from cache
   */
  cleanup() {
    for (const [name, material] of this.skyboxCache) {
      material.dispose();
    }
    this.skyboxCache.clear();
    this.loadedSkyboxes.clear();
    
    if (this.skyboxMesh) {
      this.skyboxMesh.geometry.dispose();
      this.skyboxMesh.material.dispose();
    }
  }

  /**
   * Get available skyboxes for level selection
   * @returns {Array<Object>}
   */
  getAvailableSkyboxList() {
    return [
      { name: 'sunset-vibes', description: 'Bright sunset colors', mood: 'energetic' },
      { name: 'space-deep', description: 'Deep space starfield', mood: 'mysterious' },
      { name: 'neon-city', description: 'Cyberpunk city lights', mood: 'futuristic' },
      { name: 'aurora-dance', description: 'Dancing aurora borealis', mood: 'magical' },
      { name: 'crystal-sky', description: 'Crystalline ice atmosphere', mood: 'cold' },
      { name: 'lava-storm', description: 'Volcanic atmosphere', mood: 'intense' }
    ];
  }
}