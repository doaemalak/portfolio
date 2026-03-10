const Skills = () => {
  const skills = [
    { category: "Développement", items: ["Java", "C#", ".NET", "PHP (Laravel)", "Python (Django)", "C/C++"] },
    { category: "IA & Data", items: ["Machine Learning", "Deep Learning", "Agents IA", "RAG", "Ollama", "NumPy", "Pandas"] },
    { category: "Bases de Données", items: ["MySQL", "PostgreSQL", "NoSQL", "PL/SQL", "T-SQL"] },
    { category: "Outils", items: ["Git", "GitHub", "Docker", "Unix/Linux", "Virtualisation"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Compétences Techniques</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;