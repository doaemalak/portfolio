import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold">🚀 Disponible pour un stage</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Doae Malak Moumen</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8">
              Data Science & Intelligence Artificielle
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-xl">
              Développeuse Fullstack passionnée par l'IA générative et les architectures robustes.
              Je crée des solutions qui ne fonctionnent pas seulement, mais qui "pensent".
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                Voir mes Projets
              </Link>
              <Link to="/contact" className="btn-secondary">
                Me Contacter
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative bg-gradient-to-br from-accent to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">👩‍💻</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Portfolio</h3>
                  <p className="text-slate-200">Découvrez mes projets et compétences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;