"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSql } from "@/lib/db";

export async function profiliIm() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || !/^\d+$/.test(session.user.id)) {
    return null;
  }

  const sql = getSql();

  const rows = await sql`
    INSERT INTO profilet (github_id, emri)
    VALUES (${session.user.id}, ${session.user.name ?? "Perdorues"})
    ON CONFLICT (github_id)
    DO UPDATE SET emri = EXCLUDED.emri
    RETURNING github_id AS id, emri, roli
  `;

  return rows[0] ?? null;
}

export async function ndryshoOren(id: string, ora: string): Promise<string> {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || !/^\d+$/.test(session.user.id)) {
    return "hyr";
  }

  if (!/^[123]$/.test(id) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(ora)) {
    return "fushe";
  }

  try {
    const sql = getSql();

    const profile = await sql`
      SELECT roli
      FROM profilet
      WHERE github_id = ${session.user.id}
    `;

    if (!profile.length || profile[0].roli !== "shofer") {
      return "ndaluar";
    }

    const result = await sql`
      UPDATE udhetimet
      SET ora = ${ora}
      WHERE id = ${id}
        AND shofer_id = ${session.user.id}
      RETURNING id
    `;

    if (!result.length) {
      return "ndaluar";
    }

    return "ruajtur";
  } catch {
    return "databaza";
  }
}