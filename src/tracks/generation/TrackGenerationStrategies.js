/**
 * TrackGenerationStrategies - Different methods for generating track geometry
 * 
 * This module provides various strategies for creating racing tracks:
 * - SegmentBased: Traditional segment-by-segment approach (current method)
 * - SplineBased: Smooth curves using CatmullRomCurve3
 * - ExtrudeBased: Complex cross-sections using ExtrudeGeometry
 * - Procedural: Algorithmic generation for infinite/random tracks
 */

import * as THREE from 'three';

/**
 * Base class for all track generation strategies
 */
export class TrackGenerationStrategy {
  constructor(trackBuilder) {
    this.trackBuilder = trackBuilder;
    this.scene = trackBuilder.scene;
    this.physicsWorld = trackBuilder.physicsWorld;
  }

  /**
   * Generate track geometry and physics
   * @param {Object} config - Strategy-specific configuration
   * @returns {Object} Track data including meshes, physics bodies, and metadata
   */
  generate(config) {
    throw new Error('generate() must be implemented by subclass');
  }

  /**
   * Common utility to create track material with vertex colors
   */
  createTrackMaterial() {
    return new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.8,
      metalness: 0.1,
      map: this.trackBuilder.trackTexture
    });
  }

  /**
   * Generate rainbow colors for track segments
   */
  generateRainbowColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const hue = (i / count) * 0.65; // 0 to 0.65 for nice rainbow
      const color = new THREE.Color();
      color.setHSL(hue, 1.0, 0.5);
      colors.push(color);
    }
    return colors;
  }
}

/**
 * Traditional segment-based track generation (current method)
 */
export class SegmentBasedStrategy extends TrackGenerationStrategy {
  generate(levelData) {
    // This will use the existing segment generation logic
    return this.trackBuilder.buildTrackFromSegments(levelData);
  }
}

/**
 * Spline-based track generation for smooth curves
 */
export class SplineBasedStrategy extends TrackGenerationStrategy {
  constructor(trackBuilder) {
    super(trackBuilder);
    this.defaultConfig = {
      segments: 200,
      width: 10,
      thickness: 0.6,
      closed: true,
      banking: true,
      bankingFactor: 0.5,
      widthVariation: false,
      elevationProfile: null
    };
  }

  generate(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    if (!config.controlPoints || config.controlPoints.length < 3) {
      throw new Error('SplineBasedStrategy requires at least 3 control points');
    }

    // Create spline from control points
    const curve = new THREE.CatmullRomCurve3(
      config.controlPoints,
      finalConfig.closed,
      'centripetal' // smoother interpolation
    );

    // Generate track geometry
    const trackData = this.generateTrackFromSpline(curve, finalConfig);
    
    return trackData;
  }

  async generate(config) {
    // Dynamically import the full implementation
    const { SplineBasedStrategy: FullSplineStrategy } = await import('./SplineBasedStrategy.js');
    const strategy = new FullSplineStrategy(this.trackBuilder);
    return strategy.generate(config);
  }
}

/**
 * Extrude-based track generation for complex cross-sections
 */
export class ExtrudeBasedStrategy extends TrackGenerationStrategy {
  constructor(trackBuilder) {
    super(trackBuilder);
    this.defaultConfig = {
      steps: 200,
      bevelEnabled: false,
      closed: true,
      crossSection: null // Will use default if not provided
    };
  }

  generate(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    if (!config.path) {
      throw new Error('ExtrudeBasedStrategy requires a path (curve)');
    }

    // Create or use provided cross-section shape
    const shape = finalConfig.crossSection || this.createDefaultCrossSection();
    
    // Generate extruded track
    const trackData = this.generateExtrudedTrack(shape, config.path, finalConfig);
    
    return trackData;
  }

  createDefaultCrossSection() {
    const shape = new THREE.Shape();
    const width = 10;
    const wallHeight = 0.5;
    
    // Track surface with raised edges
    shape.moveTo(-width/2, 0);
    shape.lineTo(-width/2, wallHeight);
    shape.lineTo(-width/2 + 0.5, wallHeight);
    shape.lineTo(-width/2 + 0.5, 0.1);
    shape.lineTo(width/2 - 0.5, 0.1);
    shape.lineTo(width/2 - 0.5, wallHeight);
    shape.lineTo(width/2, wallHeight);
    shape.lineTo(width/2, 0);
    shape.closePath();
    
    return shape;
  }

  async generate(config) {
    // Dynamically import the full implementation
    const { ExtrudeGeometryStrategy: FullExtrudeStrategy } = await import('./ExtrudeGeometryStrategy.js');
    const strategy = new FullExtrudeStrategy(this.trackBuilder);
    return strategy.generate(config);
  }
}

/**
 * Procedural track generation for algorithmic/infinite tracks
 */
export class ProceduralStrategy extends TrackGenerationStrategy {
  constructor(trackBuilder) {
    super(trackBuilder);
    this.defaultConfig = {
      seed: Date.now(),
      length: 200,
      complexity: 0.5,
      elevationVariance: 20,
      widthVariance: 0.3,
      cornerSharpness: 0.5
    };
  }

  generate(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    // Initialize seeded random
    this.rng = this.createSeededRandom(finalConfig.seed);
    
    // Generate track procedurally
    const trackData = this.generateProceduralTrack(finalConfig);
    
    return trackData;
  }

  createSeededRandom(seed) {
    // Simple seeded random number generator
    let s = seed;
    return () => {
      s = Math.sin(s) * 10000;
      return s - Math.floor(s);
    };
  }

  generateProceduralTrack(config) {
    // This will be implemented in ProceduralStrategy.js
    throw new Error('Not yet implemented - see ProceduralStrategy.js');
  }
}

/**
 * Factory for creating track generation strategies
 */
export class TrackGenerationFactory {
  static strategies = {
    'segment': SegmentBasedStrategy,
    'spline': SplineBasedStrategy,
    'extrude': ExtrudeBasedStrategy,
    'procedural': ProceduralStrategy
  };

  static createStrategy(type, trackBuilder) {
    const StrategyClass = this.strategies[type];
    if (!StrategyClass) {
      throw new Error(`Unknown track generation strategy: ${type}`);
    }
    return new StrategyClass(trackBuilder);
  }

  static getAvailableStrategies() {
    return Object.keys(this.strategies);
  }
}