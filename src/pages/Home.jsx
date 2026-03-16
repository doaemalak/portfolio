import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold">🚀 Disponible pour un stage</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Doae Malak Moumen</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8">
              Data Science & Intelligence Artificielle
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
              Passionnée par la Data Science, l'Intelligence Artificielle et l'IA générative.
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
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/25 to-cyan-400/20 rounded-3xl blur-2xl" />
              <div className="relative card p-8 md:p-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-cyan-500 text-white flex items-center justify-center text-2xl shadow-lg">
                      👩‍💻
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Apercu Profil</h3>
                      <p className="text-slate-600 dark:text-slate-300">Data Science • IA • ML</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    Disponible
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                  Je me specialise en Data Science et Intelligence Artificielle pour transformer les donnees en solutions intelligentes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="rounded-xl bg-slate-100 dark:bg-slate-700/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-1">Objectif</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Stage Data/IA</p>
                  </div>
                  <div className="rounded-xl bg-slate-100 dark:bg-slate-700/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-1">Stack</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Python</p>
                  </div>
                  <div className="rounded-xl bg-slate-100 dark:bg-slate-700/60 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-1">Specialite</p>
                    <p className="font-semibold text-slate-900 dark:text-white">RAG & Agents</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-accent/15 text-accent font-medium">Machine Learning</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium">Architecture API</span>
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