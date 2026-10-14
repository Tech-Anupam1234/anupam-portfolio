const projects = [
  {
    title: "Bank Management System",
    description: "A banking application built using Spring Boot and MySQL.",
    tech: "Java, Spring Boot, MySQL",
    github: "https://github.com/Tech-Anupam1234/BankingApp1",
    image: "/bank.png",
  },
  {
    title: "Employee Management System",
    description: "CRUD based employee management application.",
    tech: "Spring Boot, REST APIs",
    github: "https://github.com/Tech-Anupam1234",
    image: "/employee.png",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/Tech-Anupam1234/anupam-portfolio",
    image: "/portfolio.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <p className="text-blue-600 font-medium mb-4">{project.tech}</p>

            <button
              onClick={() => window.open(project.github, "_blank")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Code
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
