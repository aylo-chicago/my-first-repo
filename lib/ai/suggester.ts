import { KitAtom } from '@/lib/types/design-kit';

export interface AISuggestion {
  title: string;
  draftText: string;
  provenance: string[];
}

export function generateDraftFromAtoms(topic: string, atoms: KitAtom[]): AISuggestion {
  const selected = atoms.slice(0, 2);
  return {
    title: `${topic} Draft`,
    draftText: `Proposed direction for ${topic}: ${selected.map((atom) => atom.summary).join(' ')}`,
    provenance: selected.map((atom) => atom.id)
  };
}
