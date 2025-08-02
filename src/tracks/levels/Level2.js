/**
 * Level 2 - Neon Grid
 * Futuristic track with tech aesthetics
 */

export default {
  name: "Neon Grid",
  description: "Navigate through digital pathways with precise timing",
  difficulty: 2,
  shader: "tech-grid", // Tech grid shader for variety
  skybox: "neon-city", // Futuristic skybox to match tech theme
  
  generateTrack(addSegment) {
    // Level 2: original rainbow circuit with a moderate jump and split
    // --- Section 1: Starting straight with boost pads ---
    const startCount = 40;
    for (let i = 0; i < startCount; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // --- Section 2: Banked left curve (quarter turn) ---
    const curveCount = 30;
    const totalYawLeft = -Math.PI / 2;
    const yawStepLeft = totalYawLeft / curveCount;
    const bankAngle = -Math.PI / 6;
    for (let i = 0; i < curveCount; i++) {
      let rollDelta = 0;
      if (i < curveCount / 3) {
        rollDelta = bankAngle / (curveCount / 3);
      } else if (i > 2 * curveCount / 3) {
        rollDelta = -bankAngle / (curveCount / 3);
      }
      addSegment({ yawDelta: yawStepLeft, rollDelta });
    }
    
    // --- Section 3: Hill up and down ---
    const hillCount2 = 20;
    const maxHillAngle2 = Math.PI / 18;
    for (let i = 0; i < hillCount2; i++) {
      const pitchDelta = (i < hillCount2 / 2 ? maxHillAngle2 / (hillCount2 / 2) : -maxHillAngle2 / (hillCount2 / 2));
      addSegment({ pitchDelta });
    }
    
    // --- Section 4: Big jump (hero moment) ---
    // Ramp up
    const rampCount = 10;
    const rampAngle = Math.PI / 6;
    for (let i = 0; i < rampCount; i++) {
      addSegment({ pitchDelta: rampAngle / rampCount });
    }
    // Gap
    const gapCount = 4;
    for (let i = 0; i < gapCount; i++) {
      addSegment({ isGap: true });
    }
    // Ramp down
    const rampDownCount = 10;
    for (let i = 0; i < rampDownCount; i++) {
      addSegment({ pitchDelta: -rampAngle / rampDownCount });
    }
    
    // --- Section 5: Split lanes (risk/reward) ---
    const splitCount = 30;
    for (let i = 0; i < splitCount; i++) {
      const lanes = [
        { offset: -6.0, width: 4.0, isBoost: (i % 3 === 0) },
        { offset: 6.0,  width: 7.0, isBoost: false }
      ];
      addSegment({ lanes });
    }
    
    // --- Section 6: Banked right curve ---
    const rightCurveCount = 30;
    const totalYawRight = Math.PI / 2;
    const yawStepRight = totalYawRight / rightCurveCount;
    const bankAngleRight = Math.PI / 6;
    for (let i = 0; i < rightCurveCount; i++) {
      let rollDelta = 0;
      if (i < rightCurveCount / 3) {
        rollDelta = bankAngleRight / (rightCurveCount / 3);
      } else if (i > 2 * rightCurveCount / 3) {
        rollDelta = -bankAngleRight / (rightCurveCount / 3);
      }
      addSegment({ yawDelta: yawStepRight, rollDelta });
    }
    
    // --- Section 7: Final straight to the finish line ---
    const finishCount2 = 30;
    for (let i = 0; i < finishCount2; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === finishCount2 - 1)
      });
    }
  }
};