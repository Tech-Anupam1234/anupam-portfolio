function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Anupam</h1>

        <ul className="flex gap-6 font-medium">
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
      </div>
    </nav>
  );
}

export default Navbar;
