import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5w0srv",
        "template_etq9hur",
        form.current,
        "y5Iu3qPqMAI_3Uphu",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto px-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border p-3 rounded-lg mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
