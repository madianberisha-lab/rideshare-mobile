import { NextResponse } from "next/server";
import { lexoUdhetimet } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const udhetimet = await lexoUdhetimet();

    return NextResponse.json(udhetimet, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Nuk mund te lexohen udhetimet." },
      { status: 500 }
    );
  }
}
