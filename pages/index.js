import Navbar from '../components/Navbar';
import React from "react";

// Homepage component for Venkata Ramana Reddy Karnati
// Built for Next.js + TailwindCSS (drop into a pages/ or app/ route)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold">Venkata Ramana Reddy Karnati</div>
            <span className="hidden md:inline text-sm text-gray-400">Data Scientist & Generative AI Engineer</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="ml-2 inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg">Hire Me</a>
          </nav>

          <div className="md:hidden">
            {/* mobile menu placeholder */}
            <button className="p-2 rounded bg-gray-800/60">☰</button>
          </div>
        </div>
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
            {/* Replace with an image or Lottie animation */}
            <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-indigo-700 to-teal-500 flex items-center justify-center shadow-lg">
              <div className="text-center px-6">
                <div className="text-sm text-white/90">AI + Data</div>
                <div className="mt-4 text-2xl font-bold text-white">Enterprise-grade RAG & LLM Systems</div>
                <div className="mt-3 text-sm text-white/80">Production LLMs • MLOps • HIPAA-compliant pipelines</div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 w-48 p-4 bg-gray-800/60 rounded-xl border border-gray-700 backdrop-blur">
              <div className="text-xs text-gray-400">Featured Project</div>
              <div className="font-semibold">Clinical Query Assistant</div>
              <div className="text-xs text-gray-300 mt-1">45% reduction in case review times • RAG + LLM</div>
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
        <section id="contact" className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Let’s Build Something Intelligent</h3>
              <p className="mt-3 text-gray-300">I’m open to consulting, contract roles, and collaborations. Tell me about your project and I’ll reply within 48 hours.</p>

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

            <form className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 space-y-4">
              <div>
                <label className="text-xs text-gray-400">Name</label>
                <input className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Email</label>
                <input className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Message</label>
                <textarea className="mt-1 w-full bg-transparent border border-gray-700 px-3 py-2 rounded h-28" placeholder="Brief about your project"></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">Let’s work together — quick response guaranteed!</div>                <button type="button" className="bg-indigo-600 px-4 py-2 rounded">Send Message</button>
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
