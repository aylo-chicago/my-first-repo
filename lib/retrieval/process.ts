export interface ProcessGuidance {
  step: number;
  prompt: string;
  adaptationHints: string[];
}

const PROCESS_GUIDANCE: ProcessGuidance[] = [
  {
    step: 1,
    prompt: 'Capture current performance and constraints with evidence, not assumptions.',
    adaptationHints: ['Ask for historical context', 'Differentiate structural vs instructional blockers']
  },
  {
    step: 2,
    prompt: 'Draft aspirations anchored in mission, graduate aims, and leap priorities.',
    adaptationHints: ['Use concise, observable graduate outcomes', 'Prioritize 2-3 leaps for MVP coherence']
  },
  {
    step: 6,
    prompt: 'Review coherence health and phase high-demand components when needed.',
    adaptationHints: ['Tag near-term vs long-term components', 'Name enabler sequencing explicitly']
  }
];

export function getProcessGuidance(step: number): ProcessGuidance | undefined {
  return PROCESS_GUIDANCE.find((entry) => entry.step === step);
}
