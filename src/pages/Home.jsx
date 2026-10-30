import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-navy dark:bg-dark-bg pt-20">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Left */}
          <div className="md:w-3/5 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Disponible pour un stage
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Doae Malak
              <br />
              <span className="gradient-text">Moumen</span>
            </h1>

            <p className="text-lg font-medium text-slate-300 mb-4">
              Data Science & Intelligence Artificielle
            </p>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-lg">
              Développeuse Fullstack passionnée par l'IA générative et les architectures robustes.
              Je conçois des solutions qui transforment la donnée en intelligence.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 text-sm"
              >
                Me contacter
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
              {[['5+', 'Projets réalisés'], ['3+', "Années d'études"], ['10+', 'Technologies']].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-white">{n}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="md:w-2/5 w-full animate-slide-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/15 rounded-3xl blur-2xl animate-pulse-slow" />
              <div className="relative bg-white/5 dark:bg-dark-card/80 border border-white/10 dark:border-dark-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-5">👩‍💻</div>
                  <h3 className="text-xl font-semibold text-white mb-1">Portfolio</h3>
                  <p className="text-slate-400 text-sm mb-6">Data Science · IA · Fullstack</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Python', 'React', 'TensorFlow', 'Laravel', 'ML'].map(t => (
                      <span key={t} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-md border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
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
