import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            RideShare
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            Udhëtimi nuk u gjet
          </h1>

          <p className="mt-3 text-gray-600">
            ID-ja e kërkuar nuk ekziston në listën e udhëtimeve.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            Kthehu te lista
          </Link>
        </div>
      </div>
    </main>
  );
}