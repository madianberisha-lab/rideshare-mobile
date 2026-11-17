"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSql } from "@/lib/db";

type Rezultati = {
  ok: boolean;
  numer?: number;
  ruajtur?: boolean;
  mesazhi?: string;
};

export async function ruajPreferimin(udhetimiId: number): Promise<Rezultati> {
  if (!Number.isInteger(udhetimiId) || udhetimiId <= 0) {
    return { ok: false, mesazhi: "Udhetimi nuk eshte valid." };
  }

  const session = await getServerSession(authOptions);
  const perdoruesiId = session?.user?.id;

  if (!perdoruesiId || !/^\d+$/.test(perdoruesiId)) {
    return { ok: false, mesazhi: "Duhet te kycesh fillimisht." };
  }

  try {
    const sql = getSql();

    await sql`
      INSERT INTO profilet (github_id, emri)
      VALUES (${perdoruesiId}, ${session.user.name ?? "Perdorues"})
      ON CONFLICT (github_id) DO NOTHING
    `;

    if (
      process.env.NODE_ENV === "development" &&
      process.env.JAVA09_SIMULO_GABIM === "1"
    ) {
      return {
        ok: false,
        mesazhi: "Nuk u ruajt. Provo perseri.",
      };
    }

    await sql`
      INSERT INTO preferimet (perdoruesi_id, udhetimi_id)
      VALUES (${perdoruesiId}, ${udhetimiId})
      ON CONFLICT (perdoruesi_id, udhetimi_id) DO NOTHING
    `;

    const rows = await sql`
      SELECT
        COUNT(*)::int AS numer,
        BOOL_OR(perdoruesi_id = ${perdoruesiId}) AS ruajtur
      FROM preferimet
      WHERE udhetimi_id = ${udhetimiId}
    `;

    return {
      ok: true,
      numer: Number(rows[0].numer),
      ruajtur: Boolean(rows[0].ruajtur),
    };
  } catch (error) {
    console.error("Gabim ne ruajtjen e preferimit:", error);
    return {
      ok: false,
      mesazhi: "Nuk u ruajt. Provo perseri.",
    };
  }
}