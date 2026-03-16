import { BrainCircuit, Sparkles, GraduationCap, Workflow, Target, ChartNoAxesCombined } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-14 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              A Propos
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white">
              Data Science au Service
              <span className="block gradient-text">de l'Impact Reel</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Je conçois des solutions de Data Science et d'Intelligence Artificielle qui relient la qualité des données,
              la performance des modèles et des décisions concrètes.
            </p>
          </header>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch mb-10">
            <article className="relative h-full rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/80 p-8 md:p-10 shadow-xl animate-in fade-in-0 slide-in-from-left-8 duration-700">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lg">
                  <BrainCircuit className="h-7 w-7" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Doae Malak Moumen</h3>
                <p className="mt-2 text-accent font-semibold">Data Science & Intelligence Artificielle</p>

                <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Je travaille à transformer la donnée en insight exploitable, puis en solution robuste: de la préparation des données
                    jusqu'au déploiement de modèles utiles.
                  </p>
                  <p>
                    Mon approche combine rigueur analytique, expérimentation et orientation produit pour créer des systèmes IA fiables,
                    mesurables et adaptés aux besoins réels.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">Machine Learning</span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">Deep Learning</span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">NLP & RAG</span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">Data Storytelling</span>
                </div>
              </div>
            </article>

            <aside className="grid sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 h-full gap-4 animate-in fade-in-0 slide-in-from-right-8 duration-700 [animation-delay:120ms]">
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent mb-3">
                  <Target className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Objectif</p>
                <h4 className="mt-1 font-bold text-slate-900 dark:text-white">Stage Data/IA</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Contribuer à des projets à fort impact métier.</p>
              </div>

              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent mb-3">
                  <Workflow className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Approche</p>
                <h4 className="mt-1 font-bold text-slate-900 dark:text-white">De la donnee a la decision</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Pipeline clair, mesures fiables, résultats exploitables.</p>
              </div>

              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent mb-3">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Parcours</p>
                <h4 className="mt-1 font-bold text-slate-900 dark:text-white">Ingénierie Informatique</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Apprentissage continu et expérimentation active.</p>
              </div>
            </aside>
          </div>

          <div className="grid md:grid-cols-3 gap-5 animate-in fade-in-0 slide-in-from-bottom-6 duration-700 [animation-delay:220ms]">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <ChartNoAxesCombined className="h-6 w-6 text-accent mb-4" />
              <h5 className="font-bold text-slate-900 dark:text-white mb-2">Analyse & Modélisation</h5>
              <p className="text-sm text-slate-600 dark:text-slate-300">Comprendre les données, sélectionner les bons modèles et optimiser les performances.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <BrainCircuit className="h-6 w-6 text-accent mb-4" />
              <h5 className="font-bold text-slate-900 dark:text-white mb-2">Systèmes IA</h5>
              <p className="text-sm text-slate-600 dark:text-slate-300">Construire des solutions IA utiles, robustes et adaptées aux usages réels.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-6 w-6 text-accent mb-4" />
              <h5 className="font-bold text-slate-900 dark:text-white mb-2">Amélioration Continue</h5>
              <p className="text-sm text-slate-600 dark:text-slate-300">Veille technologique, tests itératifs et amélioration constante de la qualité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;