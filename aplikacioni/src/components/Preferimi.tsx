"use client";

import { useState, useTransition } from "react";
import { ruajPreferimin } from "@/app/actions/preferimet";

type Props = {
  udhetimiId: number;
  numerFillestar: number;
  ruajturFillestar: boolean;
};

export default function Preferimi({
  udhetimiId,
  numerFillestar,
  ruajturFillestar,
}: Props) {
  const [numer, setNumer] = useState(numerFillestar);
  const [ruajtur, setRuajtur] = useState(ruajturFillestar);
  const [mesazhi, setMesazhi] = useState("");
  const [nePritje, startTransition] = useTransition();

  function klikoRuaj() {
    if (ruajtur || nePritje) return;

    const numerParaprak = numer;

    setRuajtur(true);
    setNumer(numerParaprak + 1);
    setMesazhi("Po ruhet...");

    startTransition(async () => {
      const rezultati = await ruajPreferimin(udhetimiId);

      if (rezultati.ok) {
        setNumer(rezultati.numer ?? numerParaprak + 1);
        setRuajtur(true);
        setMesazhi("I ruajtur");
      } else {
        setNumer(numerParaprak);
        setRuajtur(false);
        setMesazhi("Nuk u ruajt. Provo perseri.");
      }
    });
  }

  return (
    <div>
      <button
        type="button"
        onClick={klikoRuaj}
        disabled={ruajtur || nePritje}
      >
        {ruajtur ? "[X]" : "[ ]"} Ruaj ne preferime
      </button>

      <p>Preferime: {numer}</p>

      <p role="status" aria-live="polite">{mesazhi}</p>
    </div>
  );
}