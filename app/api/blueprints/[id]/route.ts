import { NextResponse } from 'next/server';
import { getBlueprint } from '@/lib/db/mock-store';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const blueprint = getBlueprint(params.id);
  if (!blueprint) {
    return NextResponse.json({ error: 'Blueprint not found' }, { status: 404 });
  }

  return NextResponse.json(blueprint);
}
