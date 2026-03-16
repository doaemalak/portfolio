import { BrainCircuit, ChartNoAxesCombined, Code2, Database, Sparkles, Wrench } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Skills = () => {
  const skills = [
    {
      category: 'Developpement',
      icon: Code2,
      level: 'Avance',
      highlight: 'Architecture applicative et code maintenable',
      items: ['Java', 'C#', '.NET', 'PHP (Laravel)', 'Python (Django)', 'C/C++'],
    },
    {
      category: 'IA & Data',
      icon: BrainCircuit,
      level: 'Specialite',
      highlight: 'Modelisation, experimentation et systemes intelligents',
      items: ['Machine Learning', 'Deep Learning', 'Agents IA', 'RAG', 'Ollama', 'NumPy', 'Pandas'],
    },
    {
      category: 'Bases de Donnees',
      icon: Database,
      level: 'Solide',
      highlight: 'Conception de schemas et optimisation de requetes',
      items: ['MySQL', 'PostgreSQL', 'NoSQL', 'PL/SQL', 'T-SQL'],
    },
    {
      category: 'Outils',
      icon: Wrench,
      level: 'Operationnel',
      highlight: 'Workflow moderne, versioning et deploiement',
      items: ['Git', 'GitHub', 'Docker', 'Unix/Linux', 'Virtualisation'],
    },
  ];

  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 md:mb-14 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Competences
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
              Expertise Technique
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              Un stack structure autour de la Data Science et de l'Intelligence Artificielle,
              avec une approche orientee qualite, performance et impact metier.
            </p>
          </header>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 items-start">
            <Card className="border border-slate-200/80 dark:border-slate-700/70 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-xl animate-in fade-in-0 slide-in-from-left-8 duration-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <ChartNoAxesCombined className="h-5 w-5" />
                  </span>
                  Profil Technique
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Je combine competences en data, modelisation IA et ingenierie logicielle pour livrer des solutions robustes,
                    explicables et exploitables.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Focus</p>
                      <p className="mt-1 font-semibold text-slate-900 dark:text-white">Data & IA</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Approche</p>
                      <p className="mt-1 font-semibold text-slate-900 dark:text-white">Data-Driven</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full bg-accent text-white hover:bg-accent/90">ML Engineering</Badge>
                    <Badge variant="secondary" className="rounded-full">RAG Systems</Badge>
                    <Badge variant="secondary" className="rounded-full">Model Evaluation</Badge>
                    <Badge variant="secondary" className="rounded-full">Experimentation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-5 animate-in fade-in-0 slide-in-from-right-8 duration-700 [animation-delay:120ms]">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card
                  key={skillGroup.category}
                  className="h-full border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <CardHeader className="pb-1">
                    <CardTitle className="flex items-center justify-between gap-3 text-lg text-slate-900 dark:text-white">
                      <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      {skillGroup.category}
                      </span>
                      <Badge variant="outline" className="rounded-full text-[10px] uppercase tracking-wide">
                        {skillGroup.level}
                      </Badge>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      {skillGroup.highlight}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={`${skillGroup.category}-${skill}`}
                          variant="secondary"
                          className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;