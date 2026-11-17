import Link from "next/link";
import KartaUdhetimi from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";
import { lexoGjendjenPreferimeve } from "@/lib/preferimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const udhetimet: Udhetim[] = await lexoUdhetimet();
    const gjendjet = await lexoGjendjenPreferimeve();

    return (
      <main>
        <h1>RideShare - Udhetimet per AAB</h1>
        <p>
          <Link href="/panel">Hyr / Paneli im</Link>
        </p>
        <p>Burimi: Neon - te dhena fiktive per ushtrime</p>

        {udhetimet.length === 0 ? (
          <p>Nuk ka udhetime per momentin.</p>
        ) : (
          <div className="trip-list">
            {udhetimet.map((udhetim) => {
              const gjendja = gjendjet.find(
                (item) => Number(item.udhetimi_id) === Number(udhetim.id)
              );

              return (
                <KartaUdhetimi
                  key={udhetim.id}
                  udhetim={udhetim}
                  numerPreferimesh={gjendja?.numer ?? 0}
                  preferuar={gjendja?.ruajtur ?? false}
                />
              );
            })}
          </div>
        )}
      </main>
    );
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p>
          <Link href="/panel">Hyr / Paneli im</Link>
        </p>
        <p role="alert">
          Nuk u lidh me databazen. Provo perseri.
        </p>
        <a className="action" href="/">Provo perseri</a>
      </main>
    );
  }
}
