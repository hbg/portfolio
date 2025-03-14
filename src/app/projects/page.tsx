import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                [Project Screenshot]
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">[Project Name]</h3>
              <p className="text-gray-600 mt-2">
                [Brief project description]
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  [Technology 1]
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  [Technology 2]
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project →
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  GitHub →
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                [Project Screenshot]
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">[Project Name]</h3>
              <p className="text-gray-600 mt-2">
                [Brief project description]
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  [Technology 1]
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  [Technology 2]
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project →
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  GitHub →
                </Link>
              </div>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </main>
  );
}