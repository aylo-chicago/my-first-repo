import { BlueprintSectionSchema, Leap } from '@/lib/types/framework';

export const BLUEPRINT_SCHEMA: BlueprintSectionSchema[] = [
  { key: 'community_context', label: 'Community Context', required: true },
  { key: 'mission', label: 'Mission', required: true },
  { key: 'graduate_aims', label: 'Graduate Aims', required: true },
  { key: 'design_principles', label: 'Design Principles', required: true },
  { key: 'core_components', label: 'Core Components', required: true },
  { key: 'school_system_elements', label: 'School & System Elements', required: true }
];

export const LEAPS: Leap[] = [
  {
    id: 'rigorous_learning',
    name: 'High Expectations with Rigorous Learning',
    description: 'Every student engages in ambitious, standards-aligned learning experiences.',
    icon: '📘',
    alignmentTags: ['rigor', 'standards', 'equity']
  },
  {
    id: 'whole_child',
    name: 'Whole-Child Focus',
    description: 'Academic, social, emotional, and identity development are integrated.',
    icon: '🌱',
    alignmentTags: ['wellbeing', 'identity', 'support']
  },
  {
    id: 'relevance',
    name: 'Relevance',
    description: 'Learning connects to student goals, context, and future pathways.',
    icon: '🔗',
    alignmentTags: ['authentic', 'pathway', 'purpose']
  },
  {
    id: 'connection_community',
    name: 'Connection & Community',
    description: 'School design intentionally builds belonging and strong relationships.',
    icon: '🤝',
    alignmentTags: ['belonging', 'relationships', 'community']
  },
  {
    id: 'customization',
    name: 'Customization',
    description: 'Students receive pathways and supports responsive to their needs.',
    icon: '🧭',
    alignmentTags: ['pathways', 'supports', 'personalization']
  },
  {
    id: 'agency',
    name: 'Agency',
    description: 'Students own learning goals, decisions, and demonstration of growth.',
    icon: '🚀',
    alignmentTags: ['ownership', 'voice', 'leadership']
  }
];
