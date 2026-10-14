function Certificates() {
  const certificates = [
    "AI Career Accelerator",
    "Git & GitHub",
    "Java Development",
    "Spring Boot Development",
  ];

  return (
    <section className="py-20 bg-slate-100 ">
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {certificates.map((certificate) => (
          <div
            key={certificate}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold">
              {certificate}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
