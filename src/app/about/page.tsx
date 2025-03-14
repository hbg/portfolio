export default function About() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg leading-relaxed">
            [Your brief introduction here. Talk about your background, passion, and what drives you.]
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-medium">[Company Name]</h3>
              <p className="text-gray-600">[Position] • [Date Range]</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">[University Name]</h3>
              <p className="text-gray-600">[Degree] • [Graduation Year]</p>
              <p className="mt-2">[Brief description or achievements]</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Programming</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>[Tool 1]</li>
                <li>[Tool 2]</li>
                <li>[Tool 3]</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>[Soft Skill 1]</li>
                <li>[Soft Skill 2]</li>
                <li>[Soft Skill 3]</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}