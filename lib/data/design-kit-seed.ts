import { DesignKit, KitAtom } from '@/lib/types/design-kit';

export const HS_MATH_KIT: DesignKit = {
  id: 'kit_hs_math_v1',
  name: 'High School Math Kit',
  gradeBand: 'HS',
  domain: 'Math',
  version: '1.0.0',
  source: 'Transcend normalized design kit'
};

export const HS_MATH_ATOMS: KitAtom[] = [
  {
    id: 'atom_math_competency_pathways',
    kitId: HS_MATH_KIT.id,
    atomType: 'core_component',
    title: 'Competency-Based Math Pathways',
    summary: 'Learners progress through standards-aligned competencies with flexible pacing.',
    fullText: 'Defines progression by demonstrated mastery and includes intervention pathways.',
    leapAlignment: ['rigorous_learning', 'customization', 'agency'],
    conditionsDemands: {
      conviction: 'medium',
      clarity: 'high',
      capacity: 'high',
      coalition: 'medium',
      culture: 'medium'
    },
    requiredEnablers: ['flex_schedule', 'mastery_assessment', 'math_coach_roles'],
    dependencies: ['atom_math_mastery_assessment_model'],
    conflictsWith: ['atom_fixed_lockstep_schedule'],
    gradeBand: 'HS',
    structuralLayer: 'domain_design'
  },
  {
    id: 'atom_math_mastery_assessment_model',
    kitId: HS_MATH_KIT.id,
    atomType: 'assessment_model',
    title: 'Mastery Assessment Model',
    summary: 'Assessment architecture prioritizing demonstration of competency.',
    fullText: 'Includes frequent checks, performance tasks, and flexible reassessment windows.',
    leapAlignment: ['rigorous_learning', 'agency'],
    conditionsDemands: {
      conviction: 'medium',
      clarity: 'high',
      capacity: 'medium',
      coalition: 'low',
      culture: 'medium'
    },
    requiredEnablers: ['common_rubrics', 'assessment_data_cycle'],
    dependencies: [],
    conflictsWith: [],
    gradeBand: 'HS',
    structuralLayer: 'domain_design'
  },
  {
    id: 'atom_hs_flexible_block_schedule',
    kitId: HS_MATH_KIT.id,
    atomType: 'schedule_pattern',
    title: 'Flexible Block Schedule',
    summary: 'Longer math blocks with intervention and seminar flex periods.',
    fullText: 'Supports deeper learning cycles and targeted supports without additional course load.',
    leapAlignment: ['rigorous_learning', 'customization'],
    conditionsDemands: {
      conviction: 'medium',
      clarity: 'medium',
      capacity: 'high',
      coalition: 'medium',
      culture: 'medium'
    },
    requiredEnablers: ['master_schedule_redesign', 'staff_collaboration_time'],
    dependencies: ['atom_math_competency_pathways'],
    conflictsWith: ['atom_fixed_lockstep_schedule'],
    gradeBand: 'HS',
    structuralLayer: 'whole_school_architecture'
  }
];
