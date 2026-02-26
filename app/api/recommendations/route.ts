import { NextResponse } from 'next/server';
import { retrieveDesignKitAtoms } from '@/lib/retrieval/design-kit';
import { generateDraftFromAtoms } from '@/lib/ai/suggester';

export async function POST(request: Request) {
  const body = (await request.json()) as { leapPriorities: string[]; topic: string };
  const atoms = retrieveDesignKitAtoms({ leapPriorities: body.leapPriorities as never[] });
  const suggestion = generateDraftFromAtoms(body.topic, atoms);
  return NextResponse.json({ atoms, suggestion });
}
