/**
 * Level 1 - Sunrise
 * Gentle beginner track for learning controls
 */

export default {
  name: "Sunrise",
  description: "Gentle curves and forgiving turns to start your racing journey",
  difficulty: 1,
  shader: "rainbow-flow", // Default rainbow shader for Circuit Alpha
  skybox: "sunset-vibes", // Bright energetic skybox for beginners
  
  generateTrack(addSegment) {
    // Level 1: gentle beginner track without gaps
    const startCount = 20;
    for (let i = 0; i < startCount; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Gentle left curve (45 degrees)
    const leftCount = 20;
    const totalYaw = -Math.PI / 4;
    const yawStep = totalYaw / leftCount;
    for (let i = 0; i < leftCount; i++) {
      addSegment({ yawDelta: yawStep });
    }
    
    // Small hill: up then down
    const hillCount1 = 15;
    const maxHillAngle1 = Math.PI / 18; // ~10 degrees
    for (let i = 0; i < hillCount1; i++) {
      const pitchDelta = (i < hillCount1 / 2 ? maxHillAngle1 / (hillCount1 / 2) : -maxHillAngle1 / (hillCount1 / 2));
      addSegment({ pitchDelta });
    }
    
    // Gentle right curve (45 degrees)
    const rightCount = 20;
    const totalYawR = Math.PI / 4;
    const yawStepR = totalYawR / rightCount;
    for (let i = 0; i < rightCount; i++) {
      addSegment({ yawDelta: yawStepR });
    }
    
    // Final straight to finish line
    const finishCount1 = 20;
    for (let i = 0; i < finishCount1; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === finishCount1 - 1)
      });
    }
  }
};