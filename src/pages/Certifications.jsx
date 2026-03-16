import { ArrowUpRight, Award, Building2, CalendarDays, GraduationCap } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Certifications = () => {
  const certs = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM / Coursera',
      date: '25 Avril 2025',
      level: 'Data & IA',
      link: 'https://coursera.org/verify/SZVVAMSZZFTX',
    },
    {
      title: 'Software Engineering: Software Design and Project Management',
      issuer: 'The Hong Kong University of Science and Technology / Coursera',
      date: '23 Mars 2025',
      level: 'Software Engineering',
      link: 'https://coursera.org/verify/302TSABNXAZR',
    },
  ];

  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Award className="h-3.5 w-3.5" />
              Certifications
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
              Certifications & Formations
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              Parcours de formation continue pour renforcer mes competences en Data Science,
              Intelligence Artificielle et ingenierie logicielle.
            </p>
          </header>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-7 items-start">
            <Card className="border border-slate-200/80 dark:border-slate-700/70 bg-white/90 dark:bg-slate-800/90 shadow-xl animate-in fade-in-0 slide-in-from-left-8 duration-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  Mon Parcours
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  J'investis dans des certifications reconnues pour consolider une base solide en IA,
                  data et software engineering, avec une approche orientee pratique.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Certificats</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">{certs.length}</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Plateforme</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">Coursera</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-5 animate-in fade-in-0 slide-in-from-right-8 duration-700 [animation-delay:120ms]">
              {certs.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
                        <Badge variant="outline" className="mt-2 rounded-full text-[10px] uppercase tracking-wide">
                          {cert.level}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                      <div className="rounded-xl bg-slate-50 dark:bg-slate-700/40 p-3 border border-slate-200 dark:border-slate-700">
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">
                          <Building2 className="h-3.5 w-3.5" />
                          Organisme
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{cert.issuer}</p>
                      </div>

                      <div className="rounded-xl bg-slate-50 dark:bg-slate-700/40 p-3 border border-slate-200 dark:border-slate-700">
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">
                          <CalendarDays className="h-3.5 w-3.5" />
                          Date
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{cert.date}</p>
                      </div>
                    </div>

                    <Button asChild className="rounded-xl bg-accent text-white hover:bg-accent/90">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Voir le certificat
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;