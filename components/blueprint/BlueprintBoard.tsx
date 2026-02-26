import { Blueprint } from '@/lib/types/blueprint';

export function BlueprintBoard({ blueprint }: { blueprint: Blueprint }) {
  return (
    <section
      className="card"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', alignItems: 'start' }}
    >
      <div>
        <h3>School & System Elements</h3>
        <ul>
          {blueprint.enablers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Core Components</h3>
        <ul>
          {blueprint.coreComponents.map((item) => (
            <li key={item}>
              {item} <small>({blueprint.provenanceMap[item]?.sourceType ?? 'custom'})</small>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Mission + Graduate Aims</h3>
        <p>Mission and aims are rendered from structured sections in the persisted blueprint object.</p>
      </div>
    </section>
  );
}
