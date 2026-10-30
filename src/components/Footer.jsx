import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy dark:bg-dark-surface border-t border-white/5 dark:border-dark-border text-white py-14 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-lg font-bold mb-2">DM<span className="text-accent">.</span></p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ingénieure Data Science<br />& Intelligence Artificielle
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'À Propos' },
                { to: '/projects', label: 'Projets' },
                { to: '/skills', label: 'Compétences' },
                { to: '/certifications', label: 'Certifications' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:douae.malak05@gmail.com" className="text-slate-400 hover:text-white transition-colors">douae.malak05@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/doae-malak-719298297" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/doaemalak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs">
          © 2024 Doae Malak Moumen — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
