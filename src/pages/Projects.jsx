import { ArrowUpRight, Boxes, BrainCircuit, Code2, Smartphone } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "IA : Generateur d'Hypotheses (RAG)",
      icon: BrainCircuit,
      type: 'Data & IA',
      tech: ['Python', 'Ollama', 'ChromaDB', 'LangChain'],
      desc: "Outil d'IA generative hors ligne pour la recherche scientifique avec un pipeline Multi-Agents et architecture RAG.",
      link: 'https://github.com/doaemalak',
    },
    {
      title: 'PFA : Gestion de Stock',
      icon: Boxes,
      type: 'Web App',
      tech: ['Laravel', 'React', 'MySQL'],
      desc: 'Application web complete pour gerer stocks, fournisseurs et commandes de maniere fluide et automatisee.',
      link: 'https://github.com/Calimero66/PFA-3iir-EMSI',
    },
    {
      title: 'App Mobile : Gestion de Taches',
      icon: Smartphone,
      type: 'Mobile',
      tech: ['Java', 'Android SDK', 'XML'],
      desc: 'Application Android native avec interface Material Design et communication via API REST.',
      link: 'https://github.com/doaemalak',
    },
    {
      title: 'Gestion de Boutique (Desktop)',
      icon: Code2,
      type: 'Desktop',
      tech: ['Java', 'Swing', 'MySQL'],
      desc: 'Solution de gestion commerciale pour suivre les produits, clients et stocks avec fiabilite.',
      link: 'https://github.com/doaemalak',
    },
  ];

  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <span className="inline-flex rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Projets
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
              Projets Realises
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              Une selection de projets concrets en Data Science, IA et developpement logiciel avec un objectif: creer de la valeur utile.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className="h-full border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent mt-0.5">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                          <Badge variant="outline" className="mt-2 rounded-full text-[10px] uppercase tracking-wide">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={`${project.title}-${tech}`}
                          variant="secondary"
                          className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild className="rounded-xl bg-accent text-white hover:bg-accent/90">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Voir le code
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;