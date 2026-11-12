
"use client";

import { useState } from "react";

type GjendjaLokacionit =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function Vendndodhja() {
  const [teksti, setTeksti] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [gabimi, setGabimi] = useState("");
  const [gjendja, setGjendja] = useState<GjendjaLokacionit>("idle");
  const [mesazhi, setMesazhi] = useState("");
  const [saktesia, setSaktesia] = useState<number | null>(null);

  function konfirmoVendtakimin() {
    const tekstiPastrim = teksti.trim();

    if (!tekstiPastrim) {
      setGabimi("Shkruaj vendtakimin para konfirmimit.");
      return;
    }

    setVendtakimi(tekstiPastrim);
    setGabimi("");
  }

  function perdorVendndodhjen() {
    setGabimi("");
    setSaktesia(null);

    if (!navigator.geolocation) {
      setGjendja("unavailable");
      setMesazhi(
        "Pajisja nuk e mbeshtet vendndodhjen. Shkruaj vendtakimin manualisht."
      );
      return;
    }

    setGjendja("loading");
    setMesazhi("Po kerkojme vendndodhjen...");

    navigator.geolocation.getCurrentPosition(
      (pozita) => {
        setSaktesia(pozita.coords.accuracy);
        setGjendja("success");
        setMesazhi("Pozicioni u mor. Shkruaj emrin e vendtakimit.");
      },
      (gabimiLokacionit) => {
        if (gabimiLokacionit.code === 1) {
          setGjendja("denied");
          setMesazhi("Leja u refuzua. Shkruaj vendtakimin vete.");
        } else if (gabimiLokacionit.code === 2) {
          setGjendja("unavailable");
          setMesazhi(
            "Pozicioni nuk u gjet. Provo perseri ose shkruaje vendtakimin."
          );
        } else if (gabimiLokacionit.code === 3) {
          setGjendja("timeout");
          setMesazhi(
            "Koha e kerkimit perfundoi. Provo perseri ose shkruaje vendtakimin."
          );
        } else {
          setGjendja("unavailable");
          setMesazhi(
            "Nuk u gjet vendndodhja. Shkruaj vendtakimin manualisht."
          );
        }
      },
      { timeout: 10000 }
    );
  }

  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-gray-900">
        Vendtakimi
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Zgjidh vendndodhjen ose shkruaje manualisht.
      </p>

      <button
        type="button"
        onClick={perdorVendndodhjen}
        data-testid="locate-me"
        disabled={gjendja === "loading"}
        className="mt-5 w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
      >
        {gjendja === "loading"
          ? "Po kerkojme vendndodhjen..."
          : "Perdor vendndodhjen time"}
      </button>

      <p
        data-testid="location-status"
        data-state={gjendja}
        role="status"
        className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-800"
      >
        {mesazhi}
      </p>

      <p
        data-testid="location-accuracy"
        className="mt-2 text-sm text-gray-500"
      >
        {saktesia !== null
          ? `Saktesia: ${Math.round(saktesia)} metra`
          : ""}
      </p>

      <label
        htmlFor="vendtakimi"
        className="mt-5 block font-semibold text-gray-700"
      >
        Shkruaj vendtakimin
      </label>

      <input
        id="vendtakimi"
        data-testid="meeting-input"
        value={teksti}
        onChange={(e) => setTeksti(e.target.value)}
        placeholder="Shembull: Stacioni i autobusave"
        className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
      />

      <p
        data-testid="meeting-error"
        role="alert"
        className="mt-2 text-sm text-red-600"
      >
        {gabimi}
      </p>

      <button
        type="button"
        data-testid="confirm-meeting"
        onClick={konfirmoVendtakimin}
        className="mt-4 w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
      >
        Konfirmo ne telefon
      </button>

      <div className="mt-5 rounded-xl bg-gray-50 p-4">
        <p className="font-semibold text-gray-700">
          Vendtakimi i konfirmuar:
        </p>

        <p
          data-testid="confirmed-meeting"
          className="mt-2 text-gray-900"
        >
          {vendtakimi || "Ende nuk eshte konfirmuar"}
        </p>
      </div>
    </section>
  );
}
