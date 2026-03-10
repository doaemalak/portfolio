const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">À Propos de Moi</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-accent to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">👩‍💻</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Doae Malak Moumen</h3>
                  <p className="text-slate-200">Ingénieure Data Science & Intelligence Artificielle </p>
                </div>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Mon Parcours</h3>
                <p className="text-slate-600 mb-4">
                 Passionnée par la Data Science et l'Intelligence Artificielle, je combine la rigueur du développement fullstack avec la puissance des modèles d'IA générative. Mon objectif est de concevoir des architectures intelligentes qui transforment la donnée en solutions capables de "penser" et d'évoluer.
                </p>
                <p className="text-slate-600">
                  Actuellement étudiante en Ingénierie Informatique, je cherche à renforcer mes compétences à travers des projets concrets et des stages en data science et intelligence artificielle.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-primary mb-2">Objectif</h4>
              <p className="text-slate-600">Créer des solutions intelligentes</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-primary mb-2">Passion</h4>
              <p className="text-slate-600">Développement & IA</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-primary mb-2">Apprentissage</h4>
              <p className="text-slate-600">Veille technologique active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;