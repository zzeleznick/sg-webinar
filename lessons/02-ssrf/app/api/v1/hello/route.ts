import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: 'Hello World',
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
    },
    {
      status: 200,
    },
  );
}