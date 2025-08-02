/**
 * Modular Shader System for Velocity Sphere
 * Manages loading, caching, and applying different shaders for tracks
 */

import * as THREE from 'three';

export class ShaderManager {
  constructor() {
    this.shaderCache = new Map();
    this.currentShader = null;
    this.loadedShaders = new Set();
    
    // Shader uniforms that are commonly shared across shaders
    this.globalUniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
      cameraPosition: { value: new THREE.Vector3() },
      lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }
    };
  }

  /**
   * Load a shader from the shader library
   * @param {string} shaderName - Name of the shader file (without extension)
   * @returns {Promise<THREE.ShaderMaterial>}
   */
  async loadShader(shaderName) {
    if (this.shaderCache.has(shaderName)) {
      return this.shaderCache.get(shaderName);
    }

    try {
      // Import the shader module
      const shaderModule = await import(`../shaders/${shaderName}.js`);
      const shaderConfig = shaderModule.default;

      // Create the shader material
      const material = new THREE.ShaderMaterial({
        uniforms: {
          ...this.globalUniforms,
          ...shaderConfig.uniforms || {}
        },
        vertexShader: shaderConfig.vertexShader,
        fragmentShader: shaderConfig.fragmentShader,
        transparent: shaderConfig.transparent !== false,
        side: shaderConfig.side || THREE.FrontSide,
        blending: shaderConfig.blending || THREE.NormalBlending
      });

      // Store metadata
      material.userData = {
        name: shaderName,
        description: shaderConfig.description || '',
        author: shaderConfig.author || 'Unknown',
        version: shaderConfig.version || '1.0.0',
        tags: shaderConfig.tags || [],
        performance: shaderConfig.performance || 'medium'
      };

      this.shaderCache.set(shaderName, material);
      this.loadedShaders.add(shaderName);
      
      console.log(`Shader loaded: ${shaderName}`, material.userData);
      return material;
    } catch (error) {
      console.error(`Failed to load shader: ${shaderName}`, error);
      // Return fallback basic material
      return this.getFallbackMaterial();
    }
  }

  /**
   * Get a fallback material when shader loading fails
   * @returns {THREE.MeshStandardMaterial}
   */
  getFallbackMaterial() {
    if (!this.fallbackMaterial) {
      this.fallbackMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        metalness: 0.3,
        roughness: 0.7
      });
    }
    return this.fallbackMaterial;
  }

  /**
   * Apply a shader to geometry
   * @param {string} shaderName - Name of the shader
   * @param {THREE.BufferGeometry} geometry - Geometry to apply shader to
   * @returns {Promise<THREE.Mesh>}
   */
  async applyShader(shaderName, geometry) {
    const material = await this.loadShader(shaderName);
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Update global uniforms (call this every frame)
   * @param {number} deltaTime - Time since last frame
   * @param {THREE.Camera} camera - Current camera
   * @param {THREE.Vector2} resolution - Screen resolution
   */
  updateUniforms(deltaTime, camera, resolution) {
    this.globalUniforms.time.value += deltaTime;
    this.globalUniforms.cameraPosition.value.copy(camera.position);
    this.globalUniforms.resolution.value.copy(resolution);

    // Update all cached shader materials
    for (const material of this.shaderCache.values()) {
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
   * Get shader info for level selection
   * @param {string} shaderName - Name of the shader
   * @returns {Object|null}
   */
  getShaderInfo(shaderName) {
    const material = this.shaderCache.get(shaderName);
    return material ? material.userData : null;
  }

  /**
   * List all available shaders
   * @returns {Array<string>}
   */
  getAvailableShaders() {
    return Array.from(this.loadedShaders);
  }

  /**
   * Preload commonly used shaders
   * @param {Array<string>} shaderNames - Array of shader names to preload
   */
  async preloadShaders(shaderNames) {
    const loadPromises = shaderNames.map(name => this.loadShader(name));
    await Promise.all(loadPromises);
    console.log(`Preloaded ${shaderNames.length} shaders`);
  }

  /**
   * Clean up unused shaders from cache
   */
  cleanup() {
    for (const [name, material] of this.shaderCache) {
      material.dispose();
    }
    this.shaderCache.clear();
    this.loadedShaders.clear();
  }

  /**
   * Clone a shader material for reuse
   * @param {string} shaderName - Name of the shader to clone
   * @returns {Promise<THREE.ShaderMaterial>}
   */
  async cloneShader(shaderName) {
    const originalMaterial = await this.loadShader(shaderName);
    return originalMaterial.clone();
  }
}