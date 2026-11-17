import "server-only";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSql } from "@/lib/db";

export type GjendjaPreferimeve = {
  udhetimi_id: number;
  numer: number;
  ruajtur: boolean;
};

export async function lexoGjendjenPreferimeve(): Promise<GjendjaPreferimeve[]> {
  const session = await getServerSession(authOptions);
  const perdoruesiId = session?.user?.id ?? null;

  const sql = getSql();

  const rows = await sql`
    SELECT
      u.id AS udhetimi_id,
      COUNT(p.id)::int AS numer,
      COALESCE(
        BOOL_OR(p.perdoruesi_id = ${perdoruesiId}),
        FALSE
      ) AS ruajtur
    FROM udhetimet u
    LEFT JOIN preferimet p
      ON p.udhetimi_id = u.id
    GROUP BY u.id
    ORDER BY u.id
  `;

  return rows as GjendjaPreferimeve[];
}