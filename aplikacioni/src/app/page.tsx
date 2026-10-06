import KartaUdhetimi from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="mx-auto max-w-3xl">
                <header className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        AAB · RideShare
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-gray-900">
                        Udhëtimet e disponueshme
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Zgjidh një udhëtim dhe shiko detajet.
                    </p>
                </header>

                <div className="space-y-4">
                    {udhetimet.map((udhetim) => (
                        <KartaUdhetimi
                            key={udhetim.id}
                            udhetim={udhetim}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}