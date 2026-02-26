import { ConditionDimension, ConditionLevel, LeapId } from '@/lib/types/framework';

export type AtomType =
  | 'outcome'
  | 'core_component'
  | 'practice'
  | 'non_negotiable'
  | 'assessment_model'
  | 'schedule_pattern'
  | 'staffing_structure'
  | 'graduation_model'
  | 'pathway_model'
  | 'intervention_model'
  | 'enabler';

export type StructuralLayer = 'whole_school_architecture' | 'domain_design';

export interface DesignKit {
  id: string;
  name: string;
  gradeBand: 'HS';
  domain: string;
  version: string;
  source: string;
}

export interface KitAtom {
  id: string;
  kitId: string;
  atomType: AtomType;
  title: string;
  summary: string;
  fullText: string;
  leapAlignment: LeapId[];
  conditionsDemands: Record<ConditionDimension, ConditionLevel>;
  requiredEnablers: string[];
  dependencies: string[];
  conflictsWith: string[];
  gradeBand: 'HS';
  structuralLayer: StructuralLayer;
}
