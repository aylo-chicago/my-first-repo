import { NextResponse } from 'next/server';
import { listBlueprints, saveBlueprint } from '@/lib/db/mock-store';
import { Blueprint } from '@/lib/types/blueprint';

export async function GET() {
  return NextResponse.json({ items: listBlueprints() });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Blueprint;
  const saved = saveBlueprint(body);
  return NextResponse.json(saved, { status: 201 });
}
