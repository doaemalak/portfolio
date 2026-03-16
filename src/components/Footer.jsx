import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Doae Malak</h3>
            <p className="dark:text-slate-400 text-slate-300">
              Ingénieure Data Science & Intelligence Artificielle
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="dark:text-slate-400 text-slate-300 hover:text-accent transition">À Propos</Link></li>
              <li><Link to="/projects" className="dark:text-slate-400 text-slate-300 hover:text-accent transition">Projets</Link></li>
              <li><Link to="/skills" className="dark:text-slate-400 text-slate-300 hover:text-accent transition">Compétences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 dark:text-slate-400 text-slate-300">
              <li>douae.malak05@gmail.com</li>
              <li>LinkedIn: Doae Malak</li>
              <li>GitHub: @doaemalak</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center dark:text-slate-400 text-slate-300">
          <p>© 2024 Doae Malak Moumen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;