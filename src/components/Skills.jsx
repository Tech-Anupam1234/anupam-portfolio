const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "MySQL",
  "REST API",
  "Git",
  "GitHub",
  "Postman",
  "HTML",
  "CSS",
  "AI Tools"
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-100  ">
      <h2 className="text-5xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white shadow-md px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;