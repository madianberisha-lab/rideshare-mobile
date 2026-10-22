import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

type Props = {
  udhetim: Udhetim;
};

export default function KartaUdhetimi({ udhetim }: Props) {
  return (
    <article className="trip-card">
      <p className="trip-route">
        {udhetim.nisja} → {udhetim.destinacioni}
      </p>

      <p>
        <strong>Ora:</strong> {udhetim.ora}
      </p>

      <p>
        <strong>Vendtakimi:</strong> {udhetim.vendtakimi}
      </p>

      <p className="trip-seats">
        {udhetim.vende} vende të lira
      </p>

      <Link
        href={`/udhetimi/${udhetim.id}`}
        className="action"
      >
        Shiko detajet →
      </Link>
    </article>
  );
}