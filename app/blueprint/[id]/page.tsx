import { notFound } from 'next/navigation';
import { BlueprintBoard } from '@/components/blueprint/BlueprintBoard';
import { getBlueprint } from '@/lib/db/mock-store';

export default function BlueprintPage({ params }: { params: { id: string } }) {
  const blueprint = getBlueprint(params.id);
  if (!blueprint) {
    notFound();
  }

  return (
    <section style={{ display: 'grid', gap: '1rem' }}>
      <h1>Blueprint Web View</h1>
      <BlueprintBoard blueprint={blueprint} />
    </section>
  );
}
