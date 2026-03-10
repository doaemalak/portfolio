import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Doae Malak</h3>
            <p className="text-slate-400">
              Ingénieure Data Science & Intelligence Artificielle
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-accent transition">À Propos</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-accent transition">Projets</Link></li>
              <li><Link to="/skills" className="text-slate-400 hover:text-accent transition">Compétences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>douae.malak05@gmail.com</li>
              <li>LinkedIn: Doae Malak</li>
              <li>GitHub: @doaemalak</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>© 2024 Doae Malak Moumen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;