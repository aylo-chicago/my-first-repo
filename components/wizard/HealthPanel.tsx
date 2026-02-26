import { HealthPanelResult } from '@/lib/validation/health-panel';

export function HealthPanel({ result }: { result: HealthPanelResult }) {
  return (
    <section className="card">
      <h2>Blueprint Health Panel</h2>
      <p>
        Coherence Score: <strong>{result.score}</strong>
      </p>
      <ul>
        {result.flags.length === 0 && <li>No active risk flags.</li>}
        {result.flags.map((flag) => (
          <li key={flag.id}>
            <strong>{flag.severity.toUpperCase()}:</strong> {flag.message}
            {flag.recommendation ? ` Recommendation: ${flag.recommendation}` : ''}
          </li>
        ))}
      </ul>
    </section>
  );
}
