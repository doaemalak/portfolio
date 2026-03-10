const Certifications = () => {
  const certs = [
    {
      title: "Python for Data Science, AI & Development", 
      issuer: "IBM / Coursera", 
      date: "25 Avril 2025", 
      link: "https://coursera.org/verify/SZVVAMSZZFTX" 
    },
    {
      title: "Software Engineering: Software Design and Project Management", 
      issuer: "The Hong Kong University of Science and Technology / Coursera", 
      date: "23 Mars 2025", 
      link: "https://coursera.org/verify/302TSABNXAZR" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Certifications & Formations</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 bg-accent text-white px-4 py-2 rounded hover:bg-blue-600 transition">
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