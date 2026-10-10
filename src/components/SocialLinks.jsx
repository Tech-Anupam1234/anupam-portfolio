import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <section className="py-10 bg-slate-100">
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/Tech-Anupam1234"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-gray-700 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/anupam-yadav-7819252a3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;
