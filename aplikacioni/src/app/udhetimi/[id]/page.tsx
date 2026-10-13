
import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Detajet({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    let udhetim;

    try {
        udhetim = await gjejUdhetimin(id);
    } catch {
        return (
            <main className= "min-h-screen bg-gray-100 px-4 py-10" >
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow" >
                <h1 className="text-2xl font-bold text-gray-900" > RideShare </h1>
                    < p role = "alert" className = "mt-4 text-red-600" >
                        Nuk u lidhëm me databazën.Provo përsëri.
          </p>
                            < Link href = "/" className = "mt-6 inline-block text-blue-700 underline" >
            ← Kthehu te lista
            </Link>
            </div>
            </main>
    );
    }

    if (!udhetim) notFound();

    return (
        <main className= "min-h-screen bg-gray-100 px-4 py-10" >
        <div className="mx-auto max-w-2xl" >
            <Link
          href="/"
    className = "mb-6 inline-block font-medium text-blue-700 hover:underline"
        >
          ← Kthehu te lista
        </Link>

        < section className = "rounded-2xl bg-white p-6 shadow-md sm:p-8" >
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700" >
                AAB · RideShare
                    </p>

                    < h1 className = "mt-3 text-3xl font-bold text-gray-900" >
                    { udhetim.nisja } → { udhetim.destinacioni }
    </h1>

        < div className = "mt-6 space-y-4" >
            <div className="rounded-xl bg-gray-50 p-4" >
                <p className="text-sm text-gray-500" > Ora e nisjes </p>
                    < p className = "mt-1 text-lg font-semibold text-gray-900" >
                    { udhetim.ora }
                        </p>
                        </div>

                        < div className = "rounded-xl bg-gray-50 p-4" >
                            <p className="text-sm text-gray-500" > Vendtakimi </p>
                                < p className = "mt-1 font-semibold text-gray-900" >
                                { udhetim.vendtakimi }
                                    </p>
                                    </div>

                                    < div className = "rounded-xl bg-gray-50 p-4" >
                                        <p className="text-sm text-gray-500" > Vende të lira </p>
                                            < p className = "mt-1 text-lg font-semibold text-gray-900" >
                                            { udhetim.vende }
                                                </p>
                                                </div>
                                                </div>

    {
        udhetim.vende > 0 ? (
            <Link
              href= {`/udhetimi/${id}/kerkesa`}
    className = "mt-6 inline-flex w-full justify-center rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
        Kërko vend
            </Link>
          ) : (
        <button
              className= "mt-6 w-full cursor-not-allowed rounded-xl bg-gray-300 px-5 py-3 font-semibold text-gray-600"
    disabled
        >
        Nuk ka vende të lira
            </button>
          )
}
</section>
    </div>
    </main>
  );
}
