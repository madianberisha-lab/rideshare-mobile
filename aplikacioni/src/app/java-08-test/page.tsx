import Vendndodhja from "@/components/Vendndodhja";

export default function Java08TestPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900">
            RideShare - Test Java 8
          </h1>

          <p className="mt-2 text-gray-600">
            Udhetimi 2 - Ferizaj drejt AAB
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Faqe testimi me te dhena lokale. Nuk kerkon login ose Neon.
          </p>
        </div>

        <Vendndodhja />
      </div>
    </main>
  );
}