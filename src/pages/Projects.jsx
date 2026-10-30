const Projects = () => {
  const projects = [
    {
      title: 'Analyse Sémantique — Yelp Polarity',
      tech: ['Python', 'NLP', 'Data Mining', 'Scikit-learn'],
      desc: "Pipeline complet d'analyse de sentiments sur le dataset Yelp Polarity : prétraitement textuel, extraction de features TF-IDF, et classification avec plusieurs algorithmes ML.",
      link: 'https://github.com/doaemalak/analyse-de-sentiments-Yelp-Polarity-data-mining-',
    },
    {
      title: 'PFA 1 — Gestion de Stock',
      tech: ['Laravel', 'React', 'MySQL', 'REST API'],
      desc: 'Application web full-stack pour la gestion des stocks, fournisseurs et commandes. Interface React moderne avec backend Laravel et base de données MySQL.',
      link: 'https://github.com/doaemalak/Gestion-de-stock-pfa1-',
    },
    {
      title: 'PFA 2 — Segmentation de Tumeurs Cérébrales',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      desc: "Application de segmentation automatique de tumeurs cérébrales par IRM. Modèle U-Net entraîné pour détecter et délimiter les zones tumorales avec précision.",
      link: 'https://github.com/doaemalak/Application-de-segmentation-de-tumeurs-c-r-brales-pfa2-',
    },
    {
      title: 'Brain Tumor Detector',
      tech: ['Python', 'CNN', 'Keras', 'Computer Vision'],
      desc: "Détecteur de tumeurs cérébrales basé sur un CNN. Classification binaire d'images IRM pour identifier la présence de tumeurs.",
      link: 'https://github.com/doaemalak/Brain-Tumor-Detector',
    },
    {
      title: 'Mentor Clean Code (SMA)',
      tech: ['Python', 'Multi-Agents', 'SPADE', 'IA'],
      desc: "Système Multi-Agents pour l'analyse et la correction automatique de code. Les agents collaborent pour détecter les violations de bonnes pratiques.",
      link: 'https://github.com/doaemalak/mentor-clean-code-sma',
    },
    {
      title: "IA : Générateur d'Hypothèses (RAG)",
      tech: ['Python', 'Ollama', 'ChromaDB', 'LangChain'],
      desc: "Outil d'IA générative hors ligne pour la recherche scientifique. Pipeline Multi-Agents avec RAG pour générer et valider des hypothèses à partir de documents.",
      link: 'https://github.com/doaemalak',
    },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-eyebrow">Projets</p>
          <h2 className="section-title">Réalisations</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card p-7 flex flex-col animate-slide-up group"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <h3 className="text-sm font-semibold text-primary dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
              <p className="text-muted dark:text-slate-400 text-sm leading-relaxed flex-grow mb-5">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accentHover transition-colors"
              >
                Voir le code
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
