'use client';

export default function HeroSection() {
  return (
    <section className="px-6 md:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Gestión de Belleza de Próxima Generación
          </div>
          <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            El Sistema Operativo para <span className="text-primary">Imperios</span> del Sector Belleza
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
            Domina tu crecimiento con analíticas de alta fidelidad, retención automatizada e inteligencia de inventario. Diseñado para CEOs que no aceptan la mediocridad.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all">
              <span>Quiero Escalar Mi Salón</span>
            </button>
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              <span>Ver Demo</span>
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-light-accent/20 rounded-[2rem] blur-2xl group-hover:opacity-75 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="bg-slate-900 p-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-amber-500"></div>
                <div className="size-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="mx-auto text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                GlowSaaS - Panel Multi-Sucursal
              </div>
            </div>
            <img
              alt="Dashboard"
              className="w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3QwFPD0mwFdN5VOz3MzwuxjS6MrHu6_ftVvsvZVyZe3KcSkxRH8kW1-ev0g2BZHNHO5meC8rS9Gx3p41oYHdBTJjTSIk0RnasHDRSHY7JgvGLCWSQEsef4vKrdj5n8-zXgmLmFs3_1MgXcuQJxEKQzSdW4C0SIxkJzGVFm6MHDUr7oRDWaC7yEtNa_LFcfa2PMYwlTSKsRX3u-6C5_BkLPGFd6cAuc-9aIGoH0jouvduDEvzlXbFTLzSBHepWa60famA6TwB_F5k"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
