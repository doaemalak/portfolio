const Certifications = () => {
  const certs = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM / Coursera',
      date: '25 Avril 2025',
      link: 'https://coursera.org/verify/SZVVAMSZZFTX',
    },
    {
      title: 'Software Engineering: Software Design and Project Management',
      issuer: 'The Hong Kong University of Science and Technology / Coursera',
      date: '23 Mars 2025',
      link: 'https://coursera.org/verify/302TSABNXAZR',
    },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-eyebrow">Formation</p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {certs.map((cert, index) => (
            <div key={index} className="card p-6 flex flex-col md:flex-row md:items-center gap-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-grow">
                <h3 className="text-sm font-semibold text-primary dark:text-white mb-1">{cert.title}</h3>
                <p className="text-xs text-muted dark:text-slate-400">{cert.issuer} · {cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 btn-primary text-xs py-2 px-4"
              >
                Voir le certificat
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
