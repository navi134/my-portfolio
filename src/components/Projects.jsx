export default function Projects() {
  const projects = [
    {
      name: "Dental Clinic Management System",
      desc: "A management system for dental clinics built with HTML, CSS, PHP, and MySQL.",
      github: "https://github.com/navi134/Dental-Clinic-Management-System",
      demo: "#" // Add live demo URL if hosted
    },
    {
      name: "Amazon Clone",
      desc: "A clone of Amazon e-commerce website using React and Firebase.",
      github: "https://github.com/navi134/amazon-clone",
      demo: "#" // Add live demo URL if hosted
    },
    {
      name: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind CSS.",
      github: "https://github.com/navi134/my-portfolio",
      demo: "https://navi134.github.io/my-portfolio"
    },
    {
      name: "Hotel Management System",
      desc: "A hotel management system built using SQL and PHP for database operations.",
      github: "https://github.com/navi134/hotel-management-system",
      demo: "#" // Add live demo URL if hosted
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-8 bg-gray-800 text-gray-300">
      <h2 className="text-3xl font-bold text-teal-400 mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 rounded hover:bg-teal-500 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
