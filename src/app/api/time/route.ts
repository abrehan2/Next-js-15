// IMPORTS -
import { NextResponse } from "next/server";

// export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ time: new Date().toISOString() });
}
