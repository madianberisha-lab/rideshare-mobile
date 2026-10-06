import Link from "next/link";
import { gjejUdhetimin } from "@/lib/udhetimet";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function KerkesaPage({ params }: Props) {
    const { id } = await params;

    const udhetim = gjejUdhetimin(id);

    if (!udhetim) {
        notFound();
    }

    return (
        <main className= "min-h-screen bg-gray-100 px-4 py-8" >
        <div className="mx-auto max-w-2xl" >
            <Link
          href={ `/udhetimi/${udhetim.id}` }
    className = "text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Kthehu te detajet
        </Link>

        < div className = "mt-6 rounded-2xl bg-white p-6 shadow-sm" >
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500" >
                Kërkesa në pritje
                    </p>

                    < h1 className = "mt-2 text-3xl font-bold text-gray-900" >
                        Kërkesa u dërgua
                            </h1>

                            < p className = "mt-4 text-gray-600" >
                                Kërkesa jote për një vend në këtë udhëtim është
            në pritje të pranimit nga shoferi.
          </p>

        < div className = "mt-6 rounded-xl bg-gray-100 p-4" >
            <p className="font-semibold text-gray-900" >
            { udhetim.nisja } → { udhetim.destinacioni }
    </p>

        < p className = "mt-1 text-gray-600" >
            Ora: { udhetim.ora }
    </p>

        < p className = "text-gray-600" >
            Vendtakimi: { udhetim.vendtakimi }
    </p>
        </div>

        < Link
    href = "/"
    className = "mt-6 block rounded-xl bg-black px-4 py-3 text-center font-medium text-white hover:bg-gray-800"
        >
        Kthehu te lista
            </Link>
            </div>
            </div>
            </main>
  );
}