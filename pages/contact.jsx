import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="pt-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out via the form below or connect with me on social media.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows="5"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}