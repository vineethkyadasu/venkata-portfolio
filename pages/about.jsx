import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="pt-24 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          I am Venkata Ramana Reddy, a passionate professional specializing in [your specialization].
          With years of experience delivering exceptional results for clients worldwide, my work
          blends creativity, strategy, and technical expertise.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Skill One</li>
            <li>Skill Two</li>
            <li>Skill Three</li>
          </ul>
        </div>
      </section>
    </>
  );
}