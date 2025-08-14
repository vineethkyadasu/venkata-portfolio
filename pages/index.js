import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Header */}
<header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo + Tagline */}
    <div className="flex items-center gap-4">
      <div className="text-xl font-semibold">V Ramana Reddy Karnati</div>
      <span className="hidden md:inline text-sm text-gray-400">
        Data Scientist & Gen AI Engineer
      </span>
    </div>

    {/* Desktop Nav + Social Links */}
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <a
          href="#contact"
          className="ml-2 inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Hire Me
        </a>
      </nav>

      {/* Desktop Social Links */}
      <div className="hidden md:flex items-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ramanareddy444"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.98 0h3.83v2.16h.05c.53-1 1.84-2.16 3.8-2.16 4.06 0 4.81 2.67 4.81 6.15V24h-4v-7.92c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.2V24h-4V8z"/>
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/ramanareddy-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.54 2.34 1.09 2.91.84.09-.65.35-1.09.64-1.34-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0112 6.83c.85.01 1.71.11 2.51.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded bg-gray-800/60"
        >
          ☰
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
      <a href="#home" className="block">Home</a>
      <a href="#about" className="block">About</a>
      <a href="#projects" className="block">Projects</a>
      <a href="#experience" className="block">Experience</a>
      <a href="#contact" className="block">Contact</a>

      {/* Mobile Social Links */}
      <div className="flex gap-4 pt-4 border-t border-gray-700">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ramanareddy444"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.98 0h3.83v2.16h.05c.53-1 1.84-2.16 3.8-2.16 4.06 0 4.81 2.67 4.81 6.15V24h-4v-7.92c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.2V24h-4V8z"/>
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/ramanareddy-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.54 2.34 1.09 2.91.84.09-.65.35-1.09.64-1.34-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0112 6.83c.85.01 1.71.11 2.51.32 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  )}
</header>

      <main id="home">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Venkata Ramana Reddy Karnati</h1>
            <p className="mt-3 text-xl text-gray-300">Data Scientist & Generative AI Engineer</p>

            <p className="mt-6 text-gray-300 max-w-xl">I build intelligent systems that transform industries — from cutting healthcare review times by <strong>45%</strong> to improving fraud detection accuracy by <strong>22%</strong>.</p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg font-medium">View My Work</a>
              <a href="#contact" className="border border-gray-700 px-5 py-3 rounded-lg text-gray-200 hover:border-gray-500">Get in Touch</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="bg-gray-800/40 backdrop-blur p-4 rounded-lg">
                <div className="text-xs text-gray-400">Experience</div>
                <div className="font-semibold text-lg">4+ yrs</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur p-4 rounded-lg">
                <div className="text-xs text-gray-400">Data Processed</div>
                <div className="font-semibold text-lg">500TB+</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur p-4 rounded-lg">
                <div className="text-xs text-gray-400">Healthcare Impact</div>
                <div className="font-semibold text-lg">45% faster</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur p-4 rounded-lg">
                <div className="text-xs text-gray-400">Fraud Detection</div>
                <div className="font-semibold text-lg">22% improvement</div>
              </div>
            </div>
          </div>

          <div className="relative">
  {/* Profile Photo */}
  <div className="flex justify-center mb-6">
    <Image
      src="/images/profile.jpg" // place image in public/images/
      alt="Profile Photo"
      width={200}
      height={200}
      className="rounded-full border-4 border-indigo-600 shadow-lg object-cover"
    />
  </div>

  {/* Gradient Box */}
  <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-indigo-700 to-teal-500 flex items-center justify-center shadow-lg">
    <div className="text-center px-6">
      <div className="text-sm text-white/90">AI + Data</div>
      <div className="mt-4 text-2xl font-bold text-white">Enterprise-grade RAG & LLM Systems</div>
      <div className="mt-3 text-sm text-white/80">
        Production LLMs • MLOps • HIPAA-compliant pipelines
      </div>
    </div>
  </div>

  {/* Floating Project Card */}
  <div className="absolute -bottom-6 left-6 w-48 p-4 bg-gray-800/60 rounded-xl border border-gray-700 backdrop-blur">
    <div className="text-xs text-gray-400">Featured Project</div>
    <div className="font-semibold">Clinical Query Assistant</div>
    <div className="text-xs text-gray-300 mt-1">
      45% reduction in case review times • RAG + LLM
    </div>
  </div>
</div>
</section>

        {/* Expertise */}
        <section id="about" className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold">Turning Data into Impact</h2>
                <p className="mt-4 text-gray-300 max-w-2xl">With a strong background in AI, machine learning, and large-scale data systems, I specialize in designing, deploying, and governing intelligent solutions that make measurable business impact. My expertise spans healthcare, finance, and enterprise AI, with hands-on experience in Generative AI, MLOps, and cloud-scale deployments.</p>

                <div className="mt-6 flex gap-3">
                  <a href="/resume.pdf" className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm">Download Resume</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-gray-800/40 p-4 rounded-lg backdrop-blur">
                  <div className="text-xs text-gray-400">Core Principles</div>
                  <ul className="mt-2 text-gray-200 text-sm list-disc list-inside">
                    <li>Understand the domain & data</li>
                    <li>Design scalable architecture</li>
                    <li>Deploy with MLOps best practices</li>
                    <li>Ensure compliance & governance</li>
                  </ul>
                </div>

                <div className="bg-gray-800/40 p-4 rounded-lg backdrop-blur">
                  <div className="text-xs text-gray-400">Tech Snapshot</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Python','PyTorch','TensorFlow','Hugging Face','LangChain','AWS','GCP','Snowflake'].map((t)=> (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-900/40 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h3 className="text-2xl font-bold">Selected Work</h3>
            <p className="text-gray-400 mt-2 max-w-2xl">Case studies and projects that demonstrate measurable outcomes in healthcare, finance, and enterprise AI.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clinical Query Assistant',
                  desc: 'RAG-powered clinical assistant that reduced case review time by 45%.',
                  tag: 'Healthcare'
                },
                {
                  title: 'Real-time Fraud Detection',
                  desc: 'Streamlined fraud detection with lower false positives and millisecond latency.',
                  tag: 'Finance'
                },
                {
                  title: 'Predictive Maintenance (IoT)',
                  desc: 'Reduced downtime by 30% using TensorFlow models on sensor streams.',
                  tag: 'IoT'
                }
              ].map((p) => (
                <article key={p.title} className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 backdrop-blur hover:scale-[1.02] transition-transform">
                  <div className="text-xs text-gray-400">{p.tag}</div>
                  <h4 className="mt-2 font-semibold">{p.title}</h4>
                  <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-400">Tech: RAG • LLM • AWS • LangChain</div>
                    <a href="#" className="text-sm underline">Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h3 className="text-2xl font-bold">Experience</h3>
            <div className="mt-6 space-y-6">
              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Cardinal Health</div>
                    <div className="font-semibold">Data Scientist – AI/ML</div>
                    <div className="text-xs text-gray-400">Jul 2024 – Present • Jersey City, NJ</div>
                  </div>
                  <div className="text-sm text-gray-300">Highlights: 45% faster review times • $500K+ cost savings</div>
                </div>
                <ul className="mt-4 text-sm text-gray-300 list-disc list-inside">
                  <li>Led predictive models for chronic condition risk identification.</li>
                  <li>Built RAG-enabled Clinical Query Assistant with domain-tuned LLMs.</li>
                  <li>Implemented 99.9% uptime ML pipelines using AWS & Airflow.</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">TCS (Tata Consultancy Services)</div>
                    <div className="font-semibold">Data Scientist</div>
                    <div className="text-xs text-gray-400">May 2021 – Jun 2023 • India</div>
                  </div>
                  <div className="text-sm text-gray-300">Highlights: +35% campaign ROI • 50M+ records</div>
                </div>
                <ul className="mt-4 text-sm text-gray-300 list-disc list-inside">
                  <li>Customer segmentation at 50M+ scale and propensity modeling.</li>
                  <li>Real-time fraud detection and retraining automation.</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">S&P Global</div>
                    <div className="font-semibold">Jr. Data Scientist</div>
                    <div className="text-xs text-gray-400">Feb 2020 – Apr 2021 • India</div>
                  </div>
                  <div className="text-sm text-gray-300">Highlights: Multi-agent LLMs • RAG systems</div>
                </div>
                <ul className="mt-4 text-sm text-gray-300 list-disc list-inside">
                  <li>Built multi-agent chatbots and RAG-based retrieval systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        {/* Contact */}
<section id="contact" className="border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-2xl font-bold">Let’s Build Something Intelligent</h3>
      <p className="mt-3 text-gray-300">
        I’m open to consulting, contract roles, and collaborations. Tell me about your project and I’ll reply within 48 hours.
      </p>

      <div className="mt-6 text-sm text-gray-300 space-y-2">
        <div><strong>Email:</strong> ramanadata568@gmail.com</div>
        <div><strong>Phone:</strong> +1 (813) 426-1785</div>
        <div><strong>Location:</strong> Jersey City, NJ, USA</div>
        <div className="mt-4 flex gap-3">
          <a href="#" className="text-sm underline">LinkedIn</a>
          <a href="#" className="text-sm underline">GitHub</a>
        </div>
      </div>
    </div>

    <form
      className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        alert(data.message || data.error);
        if (data.success) e.target.reset();
      }}
    >
      <div>
        <label className="text-xs text-gray-400">Name</label>
        <input
          name="name"
          className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="text-xs text-gray-400">Email</label>
        <input
          name="email"
          type="email"
          className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="text-xs text-gray-400">Message</label>
        <textarea
          name="message"
          className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded h-28"
          placeholder="Brief about your project"
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-400">
          Let’s work together — quick response guaranteed!
        </div>
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-400">
            <div>© {new Date().getFullYear()} Venkata Ramana Reddy Karnati</div>
            <div className="flex items-center gap-4">
              <a href="#" className="underline">LinkedIn</a>
              <a href="#" className="underline">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
