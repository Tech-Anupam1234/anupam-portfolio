import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-r from-blue-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <img
          src="/profile.jpg"
          alt="Anupam Yadav"
          className="w-56 h-56 rounded-full object-cover object-top  mx-auto mb-6 border-4 border-dark-600 shadow-lg bg-white"
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-600"
        >
          Anupam Yadav
        </motion.h1>

        <p className="text-3xl mt-4 text-gray-800">Java Full Stack Developer</p>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg">
          Passionate Java Full Stack Developer focused on Spring Boot, React,
          REST APIs and scalable web applications.
        </p>

        <p className="text-gray-600  mt-3">
          Spring Boot • React • MySQL • REST APIs
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </button>

          <a
            href="https://github.com/Tech-Anupam1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anupam-yadav-7819252a3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
