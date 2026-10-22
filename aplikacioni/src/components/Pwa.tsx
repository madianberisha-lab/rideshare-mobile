"use client";

import { useEffect } from "react";

export default function Pwa() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .register("/sw.js")
      .then(async () => {
        console.log("RideShare: service worker aktiv");

        if (navigator.onLine) {
          try {
            await fetch("/api/udhetimet");
          } catch {
            console.log("Lista do te provohet perseri kur ka internet.");
          }
        }
      })
      .catch((error) =>
        console.error("Service worker nuk u regjistrua:", error)
      );
  }, []);

  return null;
}
