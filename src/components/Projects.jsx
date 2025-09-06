export default function Projects() {
  const projects = [
    { name: 'Project 1', description: 'This is a sample project description.' },
    { name: 'Project 2', description: 'Another project with awesome features.' },
    { name: 'Project 3', description: 'Responsive and interactive app example.' },
    { name: 'Project 4', description: 'Full-stack project using React and Node.' },
  ]

  return (
    <section id="projects" className="px-8 py-16">
      <h3 className="text-3xl font-bold text-teal-400 mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">{proj.name}</h4>
            <p className="text-gray-400">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
