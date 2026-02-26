import { HS_MATH_ATOMS } from '@/lib/data/design-kit-seed';
import { KitAtom } from '@/lib/types/design-kit';
import { CommunityProfile } from '@/lib/types/blueprint';

interface RetrievalRequest {
  atomType?: KitAtom['atomType'];
  leapPriorities: CommunityProfile['leapPriorities'];
}

export function retrieveDesignKitAtoms(request: RetrievalRequest): KitAtom[] {
  const filtered = request.atomType
    ? HS_MATH_ATOMS.filter((atom) => atom.atomType === request.atomType)
    : HS_MATH_ATOMS;

  return filtered
    .map((atom) => {
      const leapScore = atom.leapAlignment.filter((leap) => request.leapPriorities.includes(leap)).length;
      return { atom, leapScore };
    })
    .sort((a, b) => b.leapScore - a.leapScore)
    .map((entry) => entry.atom);
}
