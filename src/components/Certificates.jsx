function Certificates() {
  const certificates = [
    {
      name: "AI Skills Passport (Microsoft)",
      link: "/AI-Skill-Passport.pdf",
    },
    {
      name: "Java Programming Certification  (Udemy)",
      link: "https://www.udemy.com/certificate/UC-29052117-918d-4606-8e89-33eb8ce81b7f/",
    },
    {
      name: "Data Structure & Algorithm using Java ",
      link: "/JavaFullStack.pdf",
    },

    {
      name: "Spring Boot Development",
      link: "/JavaFullStack.pdf",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.name}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{certificate.name}</h3>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
             className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
