import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/*
**Setup**

From our root directory, run the following commands:

1. bun run 2a # start the nc server
2. bun run 2b # start the next server
3. bun run 2c # run the exploit
*/

// Helper function to read the response body
const read = async (resp: Response) => {
    const body = await resp.text();
    try {
        const json = JSON.parse(body)
        return json?.body || json
    } catch (e) {
        return body
    }
}

// For demo setup, we have nc running on 9082
export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace('/api/proxy/', '');
  // Suppose we have a proxy that can need to call the 'v1' version of the API at some different server
  const version = pathname.split("/", 1)[0]; // e.g. '/api/proxy/v1' -> 'v1'
  // And can support passing a custom host as a query parameter to the proxy
  const queryString = request.nextUrl.search || "";
  const urlParams = new URLSearchParams(queryString);
  const host = urlParams.get("host") || request.nextUrl.origin;
  const targetUrl = `${host}/api/${version}/hello`;
  console.log(`Proxying request to ${targetUrl}`);
  const resp = await fetch(targetUrl);
  const body = await read(resp);
  return NextResponse.json(
    {
        body,
    },
    {
      status: 200,
    },
  );
}