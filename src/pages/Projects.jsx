const Projects = () => {
  const projects = [
    {
      title: "IA : Générateur d'Hypothèses (RAG)",
      tech: "Python, Ollama, ChromaDB, LangChain",
      desc: "Outil d'IA générative hors ligne pour la recherche scientifique. Pipeline Multi-Agents avec RAG.",
      link: "https://github.com/doaemalak"
    },
    {
      title: "PFA : Gestion de Stock",
      tech: "Laravel, React, MySQL",
      desc: "Application web complète pour la gestion des stocks, fournisseurs et commandes automatisées.",
      link: "https://github.com/doaemalak"
    },
    {
      title: "App Mobile : Gestion de Tâches",
      tech: "Java, Android SDK, XML",
      desc: "Application Android native avec interface Material Design et API REST.",
      link: "https://github.com/doaemalak"
    },
    {
      title: "Gestion de Boutique (Desktop)",
      tech: "Java, Swing, MySQL",
      desc: "Application de gestion commerciale (Produits, Clients, Stocks).",
      link: "https://github.com/doaemalak"
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Projets Réalisés</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-accent text-sm mb-3">{project.tech}</p>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                Voir le code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;