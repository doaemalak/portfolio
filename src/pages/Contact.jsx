import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const Contact = () => {
  const [qrCode, setQrCode] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    QRCode.toDataURL('http://localhost:5173/links', {
      width: 120, margin: 2,
      color: { dark: '#2563EB', light: '#ffffff' },
    }).then(setQrCode).catch(console.error);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! (Simulation)');
  };

  const links = [
    {
      href: '/CV - Doae Malak.pdf', download: true,
      label: 'Télécharger mon CV',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    },
    {
      href: '/lettre_motivation_Doae_Malak_Moumen.pdf', download: true,
      label: 'Télécharger ma lettre de motivation',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    },
    {
      href: 'https://www.linkedin.com/in/doae-malak-719298297',
      label: 'LinkedIn',
      icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
      filled: true,
    },
    {
      href: 'https://github.com/doaemalak',
      label: 'GitHub',
      icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
      filled: true,
    },
  ];

  const inputClass = 'w-full px-4 py-2.5 border border-border dark:border-dark-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition bg-white dark:bg-dark-card text-secondary dark:text-slate-200 placeholder-muted dark:placeholder-slate-500';

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Me Contacter</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="card p-8 animate-slide-up">
            <h3 className="text-base font-semibold text-primary dark:text-white mb-6">Envoyer un message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-secondary dark:text-slate-400 mb-1.5 uppercase tracking-wide">Nom</label>
                <input type="text" className={inputClass} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-secondary dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
                <input type="email" className={inputClass} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-secondary dark:text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea className={`${inputClass} resize-none`} rows="5" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <button type="submit" className="btn-primary w-full">Envoyer le message</button>
            </form>
          </div>

          {/* Links */}
          <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base font-semibold text-primary dark:text-white mb-6">Accès Rapide</h3>

            <div className="flex justify-center mb-5">
              {qrCode
                ? <img src={qrCode} alt="QR Code" className="rounded-lg border border-border dark:border-dark-border" width={110} height={110} />
                : <div className="w-[110px] h-[110px] bg-slate-100 dark:bg-dark-card rounded-lg animate-pulse" />}
            </div>
            <p className="text-center text-muted dark:text-slate-500 text-xs mb-6">Scannez pour accéder à mes liens</p>

            <div className="space-y-2.5">
              {links.map(({ href, download, label, icon, filled }, i) => (
                <a
                  key={i}
                  href={href}
                  {...(download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border dark:border-dark-border hover:border-accent/40 hover:bg-accentLight dark:hover:bg-accent/10 transition-all duration-150 group"
                >
                  <svg className="w-4 h-4 text-accent shrink-0" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} viewBox="0 0 24 24">
                    {icon}
                  </svg>
                  <span className="text-sm font-medium text-secondary dark:text-slate-300 group-hover:text-accent transition-colors">{label}</span>
                  <svg className="w-3.5 h-3.5 text-muted ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border dark:border-dark-border text-center">
              <a href="mailto:douae.malak05@gmail.com" className="text-sm text-accent hover:text-accentHover font-medium transition-colors">
                douae.malak05@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
