import PurityTest from "@/components/purity-test";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            UofT Purity Test
          </h1>
          <p className="text-lg text-gray-600">
            How pure are you as a University of Toronto student?
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
            <p className="text-gray-700">
              Check the boxes for things you have done. Your score will be
              calculated at the end.
            </p>
          </div>

          <PurityTest />
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} UofT Purity Test</p>
          <p className="mt-1">
            This test is for entertainment purposes only. All responses are
            anonymous and not stored.
          </p>
        </footer>
      </div>
    </main>
  );
}
