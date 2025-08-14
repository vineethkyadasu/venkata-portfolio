import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
                <p className="text-gray-600">Short description of the project here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}