import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const queryString = request.nextUrl.search || "";
  const urlParams = new URLSearchParams(queryString);
  const extra = urlParams.get("extra") || "";
  const targetPath = pathname.replace('/api/cat/', '') + extra;
  const basePath = path.join(process.cwd(), 'app', 'api', 'cat', 'public');
  const fp = path.join(basePath, targetPath);
  console.log(`pathname: '${pathname}', targetPath: ${targetPath}, queryString: ${queryString}, fp: ${fp}`);
  const fileContents = await fs.readFile(fp, 'utf8');
  return NextResponse.json(
    {
      body: fileContents,
      path: targetPath,
    },
    {
      status: 200,
    },
  );
}