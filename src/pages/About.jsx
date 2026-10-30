const About = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-eyebrow">À propos</p>
          <h2 className="section-title">Qui suis-je ?</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start mb-12">
          <div className="md:col-span-2 animate-slide-up">
            <div className="bg-navy dark:bg-dark-surface rounded-2xl p-8 text-center border border-white/5 dark:border-dark-border">
              <div className="text-7xl mb-5">👩‍💻</div>
              <h3 className="text-lg font-semibold text-white mb-1">Doae Malak Moumen</h3>
              <p className="text-slate-400 text-sm mb-5">Ingénieure Data Science & IA</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Python', 'React', 'TensorFlow', 'Laravel'].map(t => (
                  <span key={t} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-md border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="card p-8 h-full">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-5">Mon Parcours</h3>
              <p className="text-muted dark:text-slate-400 leading-relaxed mb-4">
                Passionnée par la Data Science et l'Intelligence Artificielle, je combine la rigueur du
                développement fullstack avec la puissance des modèles d'IA générative. Mon objectif est
                de concevoir des architectures intelligentes qui transforment la donnée en solutions
                capables de "penser" et d'évoluer.
              </p>
              <p className="text-muted dark:text-slate-400 leading-relaxed">
                Actuellement étudiante en Ingénierie Informatique, je cherche à renforcer mes compétences
                à travers des projets concrets et des stages en data science et intelligence artificielle.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: '🎯', title: 'Objectif', desc: 'Concevoir des solutions intelligentes et à impact réel' },
            { icon: '🚀', title: 'Passion', desc: 'IA générative, architectures multi-agents et fullstack' },
            { icon: '📚', title: 'Apprentissage', desc: 'Veille technologique active et projets continus' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card p-6 text-center">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="text-base font-semibold text-primary dark:text-white mb-2">{title}</h4>
              <p className="text-muted dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
