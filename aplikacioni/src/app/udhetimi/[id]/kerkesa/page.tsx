
import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Kerkesa({
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
                            < Link href = "/" className = "mt-6 inline-block text-blue-700 hover:underline" >
                                Kthehu te lista
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
          href={ `/udhetimi/${id}` }
    className = "mb-6 inline-block font-medium text-blue-700 hover:underline"
        >
          ← Kthehu te detajet
        </Link>

        < section className = "rounded-2xl bg-white p-6 shadow-md sm:p-8" >
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700" >
                AAB · RideShare
                    </p>

    {
        udhetim.vende > 0 ? (
            <>
            <h1 className= "mt-3 text-3xl font-bold text-gray-900" >
            Kërkesa në pritje
                </h1>

                < p className = "mt-3 leading-7 text-gray-600" >
                    Kërkesa për këtë udhëtim nuk i është dërguar shoferit.
              </p>

                        < div className = "mt-6 space-y-4" >
                            <div className="rounded-xl bg-gray-50 p-4" >
                                <p className="text-sm text-gray-500" > Udhëtimi </p>
                                    < p className = "mt-1 text-lg font-semibold text-gray-900" >
                                    { udhetim.nisja } → { udhetim.destinacioni }
        </p>
            </div>

            < div className = "rounded-xl bg-gray-50 p-4" >
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
                                    </div>

                                    < p className = "mt-6 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600" >
                                        Kjo është vetëm një simulim.Kërkesa nuk ruhet në databazë dhe
                nuk konfirmohet nga shoferi.
              </p>
            </>
          ) : (
            <>
            <h1 className= "mt-3 text-3xl font-bold text-gray-900" >
            Nuk ka vende të lira
                </h1>
                < p className = "mt-3 text-gray-600" >
                    Ky udhëtim nuk ka vende të lira për momentin.
              </p>
                        </>
          )
    }

    <Link
            href={ `/udhetimi/${id}` }
    className = "mt-6 inline-flex w-full justify-center rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
        Kthehu te detajet
            </Link>
            </section>
            </div>
            </main>
  );
}
