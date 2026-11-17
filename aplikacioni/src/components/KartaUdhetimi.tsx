import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";
import Preferimi from "@/components/Preferimi";

type Props = {
  udhetim: Udhetim;
  numerPreferimesh: number;
  preferuar: boolean;
};

export default function KartaUdhetimi({
  udhetim,
  numerPreferimesh,
  preferuar,
}: Props) {
  return (
    <article className="trip-card">
      <p className="trip-route">
        {udhetim.nisja} -&gt; {udhetim.destinacioni}
      </p>

      <p>
        <strong>Ora:</strong> {udhetim.ora}
      </p>

      <p>
        <strong>Vendtakimi:</strong> {udhetim.vendtakimi}
      </p>

      <p className="trip-seats">
        {udhetim.vende} vende te lira
      </p>

      <Preferimi
        udhetimiId={Number(udhetim.id)}
        numerFillestar={numerPreferimesh}
        ruajturFillestar={preferuar}
      />

      <Link
        href={`/udhetimi/${udhetim.id}`}
        className="action"
      >
        Shiko detajet
      </Link>
    </article>
  );
}