export type LeapId =
  | 'rigorous_learning'
  | 'whole_child'
  | 'relevance'
  | 'connection_community'
  | 'customization'
  | 'agency';

export interface Leap {
  id: LeapId;
  name: string;
  description: string;
  icon: string;
  alignmentTags: string[];
}

export type ConditionDimension = 'conviction' | 'clarity' | 'capacity' | 'coalition' | 'culture';
export type ConditionLevel = 'low' | 'medium' | 'high';

export interface ConditionRating {
  level: ConditionLevel;
  notes: string;
  designImplications: string;
}

export type ConditionsSnapshot = Record<ConditionDimension, ConditionRating>;

export interface BlueprintSectionSchema {
  key: 'community_context' | 'mission' | 'graduate_aims' | 'design_principles' | 'core_components' | 'school_system_elements';
  label: string;
  required: boolean;
}
