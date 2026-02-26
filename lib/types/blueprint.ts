import { ConditionsSnapshot, LeapId } from '@/lib/types/framework';

export interface TechnicalConstraints {
  scheduleModel: string;
  graduationRequirements: string;
  staffingModel: string;
  curriculumRequirements: string;
  creditStructure: string;
}

export interface CommunityProfile {
  id: string;
  name: string;
  gradeBand: 'HS';
  currentStateSummary: string;
  performanceIndicators: string[];
  existingDesignRealities: string[];
  technicalConstraints: TechnicalConstraints;
  partnershipOpportunities: string[];
  conditionsSnapshot: ConditionsSnapshot;
  leapPriorities: LeapId[];
}

export interface BlueprintSection {
  sectionKey: string;
  content: string;
}

export interface RiskFlag {
  id: string;
  severity: 'info' | 'warning' | 'critical';
  message: string;
  relatedAtomIds: string[];
  recommendation?: string;
}

export interface Blueprint {
  id: string;
  communityId: string;
  version: string;
  sections: BlueprintSection[];
  coreComponents: string[];
  enablers: string[];
  coherenceMap: Record<string, string[]>;
  riskFlags: RiskFlag[];
  provenanceMap: Record<string, { sourceType: 'kit' | 'custom' | 'inferred'; sourceIds: string[] }>;
}
