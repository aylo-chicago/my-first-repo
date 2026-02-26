import { Blueprint, CommunityProfile, RiskFlag } from '@/lib/types/blueprint';
import { KitAtom } from '@/lib/types/design-kit';

export interface HealthPanelResult {
  score: number;
  flags: RiskFlag[];
}

export function evaluateBlueprintHealth(
  blueprint: Blueprint,
  community: CommunityProfile,
  selectedAtoms: KitAtom[]
): HealthPanelResult {
  const flags: RiskFlag[] = [];

  if (!community.leapPriorities.length) {
    flags.push({
      id: 'no_leap_alignment',
      severity: 'critical',
      message: 'No Leap priority selected. Choose at least one priority Leap.',
      relatedAtomIds: []
    });
  }

  selectedAtoms.forEach((atom) => {
    const capacityLevel = community.conditionsSnapshot.capacity.level;
    if (capacityLevel === 'low' && atom.conditionsDemands.capacity === 'high') {
      flags.push({
        id: `capacity_mismatch_${atom.id}`,
        severity: 'warning',
        message: `Selected component \"${atom.title}\" has high capacity demand.`,
        relatedAtomIds: [atom.id],
        recommendation: 'Consider a phased implementation plan with foundational enablers first.'
      });
    }
  });

  if (!blueprint.enablers.length && blueprint.coreComponents.length) {
    flags.push({
      id: 'missing_enablers',
      severity: 'warning',
      message: 'Core components are present but no enabling structures are defined.',
      relatedAtomIds: blueprint.coreComponents
    });
  }

  const score = Math.max(0, 100 - flags.length * 20);
  return { score, flags };
}
