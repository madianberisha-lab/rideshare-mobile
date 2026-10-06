import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

type Props = {
    udhetim: Udhetim;
};

export default function KartaUdhetimi({ udhetim }: Props) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-lg font-bold text-gray-900">
                        {udhetim.nisja} → {udhetim.destinacioni}
                    </p>

                    <p className="mt-2 text-gray-600">
                        Ora: <span className="font-medium">{udhetim.ora}</span>
                    </p>

                    <p className="text-gray-600">
                        Vendtakimi:{" "}
                        <span className="font-medium">{udhetim.vendtakimi}</span>
                    </p>
                </div>

                <div className="text-right">
                    <p className="font-semibold text-gray-900">
                        {udhetim.vende} vende
                    </p>
                </div>
            </div>

            <Link
                href={`/udhetimi/${udhetim.id}`}
                className="mt-5 block rounded-xl bg-black px-4 py-3 text-center font-medium text-white transition hover:bg-gray-800"
            >
                Shiko detajet
            </Link>
        </div>
    );
}