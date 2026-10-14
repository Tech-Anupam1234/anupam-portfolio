import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">AY</h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-blue-600"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-blue-600"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-blue-600"
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:text-blue-600"
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg"
              >
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
