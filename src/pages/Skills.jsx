const Skills = () => {
  const skills = [
    { category: 'Développement', icon: '💻', items: ['Java', 'C#', '.NET', 'PHP (Laravel)', 'Python (Django)', 'C/C++', 'React', 'JavaScript'] },
    { category: 'IA & Data Science', icon: '🧠', items: ['Machine Learning', 'Deep Learning', 'Agents IA', 'RAG', 'Ollama', 'LangChain', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'] },
    { category: 'Bases de Données', icon: '🗄️', items: ['MySQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'PL/SQL', 'T-SQL', 'ChromaDB'] },
    { category: 'Outils & DevOps', icon: '🛠️', items: ['Git', 'GitHub', 'Docker', 'Linux/Unix', 'Virtualisation', 'REST API'] },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-eyebrow">Compétences</p>
          <h2 className="section-title">Stack Technique</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((group, index) => (
            <div key={index} className="card p-7 animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-sm font-semibold text-primary dark:text-white uppercase tracking-wide">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span key={i} className="tag">{skill}</span>
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
