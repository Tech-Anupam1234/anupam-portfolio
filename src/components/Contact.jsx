function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-xl mx-auto px-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
