import Link from "next/link";
import { gjejUdhetimin } from "@/lib/udhetimet";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function UdhetimiPage({ params }: Props) {
    const { id } = await params;

    const udhetim = gjejUdhetimin(id);

    if (!udhetim) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="mx-auto max-w-2xl">
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-600 hover:text-black"
                >
                    ← Kthehu te lista
                </Link>

                <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Detajet e udhëtimit
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-gray-900">
                        {udhetim.nisja} → {udhetim.destinacioni}
                    </h1>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Ora</p>
                            <p className="mt-1 font-semibold">{udhetim.ora}</p>
                        </div>

                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Vendtakimi</p>
                            <p className="mt-1 font-semibold">
                                {udhetim.vendtakimi}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">
                                Vendet e lira
                            </p>
                            <p className="mt-1 font-semibold">
                                {udhetim.vende}
                            </p>
                        </div>
                    </div>

                    {udhetim.vende > 0 ? (
                        <Link
                            href={`/udhetimi/${udhetim.id}/kerkesa`}
                            className="mt-6 block rounded-xl bg-black px-4 py-3 text-center font-medium text-white hover:bg-gray-800"
                        >
                            Kërko vend
                        </Link>
                    ) : (
                        <div className="mt-6 rounded-xl bg-gray-100 p-4 text-center text-gray-600">
                            Nuk ka vende të lira.
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}