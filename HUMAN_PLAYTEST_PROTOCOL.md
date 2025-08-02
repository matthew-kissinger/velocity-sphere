# 🎮 Human Playtest Protocol

**Standardized feedback system for AI-generated circuits**

## 🎯 PURPOSE

This protocol ensures consistent, actionable feedback for AI agents to iteratively improve circuit generation. Each playtest provides structured data that agents can analyze and learn from.

## 📋 STANDARD PLAYTEST FORMAT

### Basic Track Information
```
CIRCUIT: [Alpha/Beta/Gamma/etc.]
TRACK: [11-20] - [Track Name]
PLAYTESTER: [Human ID]
DATE: [YYYY-MM-DD]
HARDWARE: [GPU/CPU specs for performance context]
```

### Core Evaluation Metrics

#### **PLAYABILITY RATING**
- **EXCELLENT**: Flows perfectly, intuitive, engaging throughout
- **GOOD**: Minor rough spots, overall enjoyable experience  
- **NEEDS-WORK**: Playable but has significant issues affecting enjoyment
- **UNPLAYABLE**: Cannot complete due to physics/design problems

#### **DIFFICULTY ASSESSMENT**
- **TOO-EASY**: Trivial for target skill level, lacks engagement
- **PERFECT**: Appropriately challenging for intended difficulty tier
- **TOO-HARD**: Frustrating for target audience, skill barrier too high
- **IMPOSSIBLE**: Cannot be completed with reasonable skill/patience

#### **PERFORMANCE ANALYSIS**
- **60FPS**: Smooth throughout, no noticeable frame drops
- **45-60FPS**: Generally smooth with occasional minor drops
- **30-45FPS**: Noticeable performance issues, impacts playability
- **BELOW-30FPS**: Severely impacts gameplay, needs optimization

### Detailed Feedback Categories

#### **PHYSICS ISSUES**
Document any problems with:
- Ball falling through track geometry
- Impossible climbing sections (sliding backwards)
- Boost effectiveness problems
- Jumping reliability issues
- Collision detection problems

Example:
```
PHYSICS ISSUES:
- Ball slides backward on spiral climb at segment ~45
- Jump at segment 67 requires perfect timing, too precise
- Boost pads feel ineffective on the banking section
```

#### **DESIGN HIGHLIGHTS**
Identify successful elements to reinforce in future tracks:
- Innovative track features that work well
- Satisfying challenge sections
- Good use of boost placement
- Effective difficulty progression
- Visual appeal moments

Example:
```
DESIGN HIGHLIGHTS:
- Spiral descent section feels amazing at speed
- Split path choice at segment 30 creates good risk/reward
- Final jump sequence is perfectly tuned for flow
```

#### **IMPROVEMENT SUGGESTIONS**
Specific, actionable recommendations:
- Technical adjustments (angles, widths, boost placement)
- Gameplay flow improvements
- Performance optimization needs
- Visual enhancement opportunities

Example:
```
SUGGESTIONS:
- Add boost pads before climb at segment 25-27
- Widen split lanes from 5 to 6 units (segments 40-50)
- Reduce descent angle by ~20% in final section
- Consider additional checkpoint for longer track
```

## 🎯 SPECIALIZED FEEDBACK CATEGORIES

### For New Track Elements
When AI introduces innovative features:

#### **INNOVATION ASSESSMENT**
- **BREAKTHROUGH**: New element that significantly enhances gameplay
- **PROMISING**: Good concept that needs refinement
- **INTERESTING**: Novel but needs better integration
- **AVOID**: Doesn't work, shouldn't be repeated

### For Difficulty Progression
Evaluate circuit-wide progression:

#### **PROGRESSION ANALYSIS**
- Does track feel appropriately placed in difficulty sequence?
- Are new skills introduced at reasonable pace?
- Is there good variety within difficulty tier?
- How does completion time compare to target range?

### For Technical Implementation
Focus on code quality and performance:

#### **TECHNICAL NOTES**
- Segment count efficiency
- Physics optimization effectiveness  
- Integration with existing systems
- Code organization and patterns

## 📊 EXAMPLE COMPLETE PLAYTEST

```
CIRCUIT: [Circuit Name]
TRACK: [Number] - [Track Name]  
PLAYTESTER: Human_Alpha
DATE: 2024-01-15
HARDWARE: RTX 3070, i7-10700K

PLAYABILITY: GOOD
DIFFICULTY: PERFECT  
PERFORMANCE: 55-60FPS

PHYSICS ISSUES:
- Minor: Ball occasionally clips through wall at tight turn (segment 34)
- Boost effectiveness reduced on uphill banking sections

DESIGN HIGHLIGHTS:
- Underground aesthetic with glowing crystals feels fresh
- Multi-level split at segment 45 creates excellent player choice
- Rhythm section (segments 60-80) has perfect flow
- Final corkscrew exit is satisfying and well-telegraphed

SUGGESTIONS:
- Add 1-2 boost pads before the crystal tunnel climb
- Increase wall collision thickness at segment 34 area
- Consider particle effects for crystal sections
- Slight widening of lower split path (segment 47-52)

COMPLETION TIME: 73 seconds
RETRY COUNT: 2 (appropriate for medium difficulty)
INNOVATION RATING: PROMISING (crystal tunnel concept)
CIRCUIT PROGRESSION: Fits well within circuit difficulty progression

AGENT LEARNING NOTES:
- Multi-level splits work well when properly signposted
- Environmental theming enhances engagement without affecting physics
- Rhythm sections successful when using established hill patterns
- Crystal/cave aesthetic direction worth exploring further
```

## 🔄 FEEDBACK INTEGRATION WORKFLOW

### For AI Agents:
1. **Parse structured feedback** for quantitative metrics
2. **Extract pattern insights** from design highlights  
3. **Prioritize fixes** based on issue severity
4. **Update generation models** with successful techniques
5. **Avoid problematic patterns** identified in feedback

### Feedback Processing Priority:
1. **UNPLAYABLE** tracks → immediate fix required
2. **PHYSICS ISSUES** → high priority technical fixes
3. **PERFORMANCE** problems → optimization needed
4. **DIFFICULTY** mismatches → rebalancing required  
5. **ENHANCEMENT** suggestions → future iteration improvements

## 🎯 CIRCUIT-LEVEL ANALYSIS

After completing full circuit playtest:

### **CIRCUIT SUMMARY**
```
OVERALL CIRCUIT RATING: [Excellent/Good/Needs Work/Poor]
DIFFICULTY DISTRIBUTION: [Analysis of 10-track progression]
STANDOUT TRACKS: [Best 2-3 tracks with reasons]
PROBLEM TRACKS: [Worst 1-2 tracks needing rework]
INNOVATION SUCCESS: [New elements that worked well]
TECHNICAL PERFORMANCE: [Overall FPS and stability]

CIRCUIT PROGRESSION NOTES:
- Does the circuit feel cohesive?
- Is difficulty ramping appropriate?
- Are new concepts introduced logically?
- How does completion time distribute across tracks?

RECOMMENDATIONS FOR NEXT CIRCUIT:
- Successful patterns to continue
- Problem areas to avoid
- New directions to explore
- Technical optimizations needed
```

## 🚀 SUCCESS CRITERIA

### Track-Level Success:
- Playability rating: GOOD or EXCELLENT
- Difficulty assessment: PERFECT
- Performance: 45+ FPS sustained
- Completion time within target range
- No major physics issues

### Circuit-Level Success:
- 8+ tracks rated GOOD or EXCELLENT
- Clear difficulty progression 11→20
- 2+ successful innovations introduced
- Overall performance stable
- Positive human engagement throughout

---

**This protocol ensures AI agents receive consistent, actionable feedback to continuously improve circuit generation quality while maintaining the high standards established in Circuit Alpha.**