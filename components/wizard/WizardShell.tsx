'use client';

import { useMemo, useState } from 'react';
import { LEAPS } from '@/lib/constants/framework';
import { retrieveDesignKitAtoms } from '@/lib/retrieval/design-kit';
import { evaluateBlueprintHealth } from '@/lib/validation/health-panel';
import { Blueprint, CommunityProfile } from '@/lib/types/blueprint';
import { HealthPanel } from '@/components/wizard/HealthPanel';

const STEPS = [
  'Current State',
  'Aspirations',
  'Core Components',
  'Whole-School Architecture',
  'Enablers',
  'Blueprint Health',
  'Web View',
  'Export PDF'
];

const initialCommunity: CommunityProfile = {
  id: 'community-demo',
  name: 'Demo High School',
  gradeBand: 'HS',
  currentStateSummary: 'Current design has low coherence across math pathways.',
  performanceIndicators: ['Math proficiency: 31%', 'Attendance: 88%'],
  existingDesignRealities: ['Fixed periods', 'Limited intervention staffing'],
  technicalConstraints: {
    scheduleModel: 'Traditional 7-period',
    graduationRequirements: 'State default',
    staffingModel: 'Departmental',
    curriculumRequirements: 'State-aligned',
    creditStructure: 'Carnegie unit'
  },
  partnershipOpportunities: ['Local STEM nonprofit'],
  conditionsSnapshot: {
    conviction: { level: 'medium', notes: '', designImplications: '' },
    clarity: { level: 'medium', notes: '', designImplications: '' },
    capacity: { level: 'low', notes: '', designImplications: '' },
    coalition: { level: 'medium', notes: '', designImplications: '' },
    culture: { level: 'medium', notes: '', designImplications: '' }
  },
  leapPriorities: ['rigorous_learning', 'agency']
};

const initialBlueprint: Blueprint = {
  id: 'blueprint-demo',
  communityId: initialCommunity.id,
  version: 'v1',
  sections: [],
  coreComponents: ['atom_math_competency_pathways'],
  enablers: [],
  coherenceMap: {},
  riskFlags: [],
  provenanceMap: {
    atom_math_competency_pathways: { sourceType: 'kit', sourceIds: ['atom_math_competency_pathways'] }
  }
};

export function WizardShell() {
  const [step, setStep] = useState(1);
  const [selectedLeap, setSelectedLeap] = useState(initialCommunity.leapPriorities);

  const atoms = useMemo(
    () => retrieveDesignKitAtoms({ leapPriorities: selectedLeap, atomType: 'core_component' }),
    [selectedLeap]
  );

  const health = useMemo(() => evaluateBlueprintHealth(initialBlueprint, initialCommunity, atoms), [atoms]);

  return (
    <section style={{ display: 'grid', gap: '1rem' }}>
      <div className="card">
        <h1>Blueprint Wizard</h1>
        <p>Structured workflow for whole-school high school blueprint design.</p>
        <p>
          <strong>Step {step}:</strong> {STEPS[step - 1]}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {STEPS.map((label, index) => (
            <button
              key={label}
              className="button secondary"
              onClick={() => setStep(index + 1)}
              aria-pressed={step === index + 1}
            >
              {index + 1}. {label}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Leap Prioritization</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '0.75rem' }}>
          {LEAPS.map((leap) => {
            const active = selectedLeap.includes(leap.id);
            return (
              <button
                key={leap.id}
                className="button"
                style={{
                  textAlign: 'left',
                  border: `1px solid ${active ? '#1a4c81' : '#dce5ef'}`,
                  background: active ? '#ade0ee' : 'white'
                }}
                onClick={() =>
                  setSelectedLeap((prev) =>
                    prev.includes(leap.id) ? prev.filter((id) => id !== leap.id) : [...prev, leap.id]
                  )
                }
              >
                {leap.icon} {leap.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h2>Math Component Recommendations</h2>
        {atoms.map((atom) => (
          <article key={atom.id} style={{ borderTop: '1px solid #dce5ef', paddingTop: 8, marginTop: 8 }}>
            <strong>{atom.title}</strong>
            <p>{atom.summary}</p>
            <small>Requires: {atom.requiredEnablers.join(', ') || 'None'}</small>
          </article>
        ))}
      </div>

      <HealthPanel result={health} />
    </section>
  );
}
