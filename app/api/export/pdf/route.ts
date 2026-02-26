import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json()) as { blueprintId: string; includeAppendix?: boolean };

  // Scaffold placeholder: integrate Puppeteer/Playwright or hosted PDF renderer in production.
  return NextResponse.json({
    blueprintId: body.blueprintId,
    includeAppendix: body.includeAppendix ?? true,
    status: 'queued',
    message: 'PDF export scaffold is active; connect renderer provider next.'
  });
}
