/**
 * CurveUtils - Utilities for creating track curves and splines
 */

import * as THREE from 'three';

/**
 * Create a curve from an arc
 * @param {number} radius - Radius of the arc
 * @param {number} startAngle - Start angle in radians
 * @param {number} endAngle - End angle in radians
 * @param {THREE.Vector3} center - Center point of the arc
 * @param {THREE.Vector3} axis - Axis of rotation (default: Y-axis for vertical loop)
 * @param {THREE.Vector3} forward - Forward direction at start (default: Z-axis)
 * @returns {THREE.Curve} The arc curve
 */
export function curveFromArc(radius, startAngle, endAngle, center, axis = new THREE.Vector3(1, 0, 0), forward = new THREE.Vector3(0, 0, 1)) {
  // Create a custom curve class for the arc
  class ArcCurve extends THREE.Curve {
    constructor() {
      super();
    }
    
    getPoint(t) {
      const angle = startAngle + (endAngle - startAngle) * t;
      
      // Create rotation quaternion around the axis
      const quaternion = new THREE.Quaternion();
      quaternion.setFromAxisAngle(axis, angle);
      
      // Start with a point at radius distance in the forward direction
      const point = forward.clone().multiplyScalar(radius);
      
      // Also rotate "up" to get the vertical component for loops
      const up = new THREE.Vector3(0, 1, 0);
      const rotatedUp = up.clone().applyQuaternion(quaternion);
      point.add(rotatedUp.multiplyScalar(radius));
      
      // Apply the rotation
      point.applyQuaternion(quaternion);
      
      // Translate to center
      point.add(center);
      
      return point;
    }
    
    getTangent(t) {
      const angle = startAngle + (endAngle - startAngle) * t;
      const deltaAngle = endAngle - startAngle;
      
      // Create rotation quaternion
      const quaternion = new THREE.Quaternion();
      quaternion.setFromAxisAngle(axis, angle);
      
      // Tangent is perpendicular to radius
      const tangent = axis.clone().cross(forward);
      tangent.applyQuaternion(quaternion);
      tangent.normalize();
      
      // Scale by angular velocity
      tangent.multiplyScalar(deltaAngle);
      
      return tangent;
    }
  }
  
  return new ArcCurve();
}

/**
 * Create a vertical loop curve
 * @param {number} radius - Radius of the loop
 * @param {THREE.Vector3} center - Center point of the loop
 * @param {THREE.Vector3} entryDirection - Direction of entry (normalized)
 * @returns {THREE.Curve} The loop curve
 */
export function createLoopCurve(radius, center, entryDirection = new THREE.Vector3(0, 0, 1)) {
  // Create a simple vertical loop using parametric equations
  class VerticalLoopCurve extends THREE.Curve {
    constructor() {
      super();
    }
    
    getPoint(t) {
      // t goes from 0 to 1, map to 0 to 2π
      const angle = t * Math.PI * 2;
      
      // Calculate position on the circle
      // For a track going in +Z direction, the loop is in the YZ plane
      // Starting at bottom (angle=0), going up, over, and back down
      const x = center.x;
      const y = center.y + radius * (1 - Math.cos(angle)); // Start at bottom (y=center.y when angle=0)
      const z = center.z + radius * Math.sin(angle); // Forward then back
      
      return new THREE.Vector3(x, y, z);
    }
    
    getTangent(t) {
      // Derivative of the position
      const angle = t * Math.PI * 2;
      
      const dx = 0; // No change in X
      const dy = radius * Math.sin(angle) * Math.PI * 2;
      const dz = radius * Math.cos(angle) * Math.PI * 2;
      
      return new THREE.Vector3(dx, dy, dz).normalize();
    }
  }
  
  return new VerticalLoopCurve();
}

/**
 * Create a ramp curve that smoothly transitions elevation
 * @param {number} length - Length of the ramp
 * @param {number} startHeight - Starting height
 * @param {number} endHeight - Ending height
 * @param {THREE.Vector3} startPos - Starting position
 * @param {THREE.Vector3} direction - Direction of the ramp (normalized)
 * @returns {THREE.Curve} The ramp curve
 */
export function createRampCurve(length, startHeight, endHeight, startPos, direction = new THREE.Vector3(0, 0, 1)) {
  class RampCurve extends THREE.Curve {
    getPoint(t) {
      const point = startPos.clone();
      
      // Move forward
      point.add(direction.clone().multiplyScalar(length * t));
      
      // Smooth height transition using ease-in-out
      const heightT = t * t * (3 - 2 * t); // Smooth step function
      point.y = startHeight + (endHeight - startHeight) * heightT;
      
      return point;
    }
    
    getTangent(t) {
      const tangent = direction.clone();
      
      // Add vertical component based on height change
      const heightDerivative = 6 * t * (1 - t) * (endHeight - startHeight) / length;
      tangent.y = heightDerivative;
      tangent.normalize();
      
      return tangent;
    }
  }
  
  return new RampCurve();
}

/**
 * Generate entry/exit ramps for a loop
 * @param {number} radius - Loop radius
 * @param {number} rampLength - Length of each ramp
 * @param {THREE.Vector3} loopCenter - Center of the loop
 * @param {THREE.Vector3} entryPos - Entry position
 * @param {THREE.Vector3} exitPos - Exit position
 * @returns {Object} Object with entryRamp, loop, and exitRamp curves
 */
export function generateLoopWithRamps(radius, rampLength, loopCenter, entryPos, exitPos) {
  // Entry ramp: from current height to loop bottom
  const entryRamp = createRampCurve(
    rampLength,
    entryPos.y,
    loopCenter.y - radius,
    entryPos,
    new THREE.Vector3(0, 0, 1)
  );
  
  // Loop: full vertical circle
  const loop = createLoopCurve(radius, loopCenter);
  
  // Exit ramp: from loop bottom back to track height
  const exitRamp = createRampCurve(
    rampLength,
    loopCenter.y - radius,
    exitPos.y,
    new THREE.Vector3(loopCenter.x, loopCenter.y - radius, loopCenter.z + radius * 2),
    new THREE.Vector3(0, 0, 1)
  );
  
  return { entryRamp, loop, exitRamp };
}

/**
 * Create a banked turn curve
 * @param {number} radius - Turn radius
 * @param {number} angle - Total turn angle in radians
 * @param {number} bankAngle - Banking angle in radians
 * @param {THREE.Vector3} center - Center of the turn
 * @returns {THREE.Curve} The banked turn curve
 */
export function createBankedTurnCurve(radius, angle, bankAngle, center) {
  class BankedTurnCurve extends THREE.Curve {
    getPoint(t) {
      const currentAngle = angle * t;
      
      const x = center.x + radius * Math.cos(currentAngle);
      const z = center.z + radius * Math.sin(currentAngle);
      const y = center.y + radius * Math.sin(bankAngle) * Math.sin(currentAngle);
      
      return new THREE.Vector3(x, y, z);
    }
    
    getTangent(t) {
      const currentAngle = angle * t;
      
      const dx = -radius * Math.sin(currentAngle) * angle;
      const dz = radius * Math.cos(currentAngle) * angle;
      const dy = radius * Math.sin(bankAngle) * Math.cos(currentAngle) * angle;
      
      return new THREE.Vector3(dx, dy, dz).normalize();
    }
  }
  
  return new BankedTurnCurve();
}