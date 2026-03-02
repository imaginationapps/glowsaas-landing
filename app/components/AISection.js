'use client';

export default function AISection() {
  return (
    <section className="px-6 md:px-20 py-24 bg-dark-accent relative overflow-hidden" id="ai">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B83280_0%,transparent_50%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-light-accent text-xs font-bold uppercase tracking-wider w-fit">
            Motor GlowAI Activo
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Tu competencia trabaja.<br />
            <span className="text-primary">Tú predices.</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Utiliza inteligencia artificial para anticipar ventas, optimizar inventario y detectar oportunidades antes que los demás.
          </p>
          <ul className="space-y-5">
            <li className="flex gap-4 items-start">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              </div>
              <div>
                <p className="text-white font-bold">Predicción de días fuertes</p>
                <p className="text-slate-400 text-sm">Ajusta tu personal basado en la demanda proyectada por IA.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">inventory_2</span>
              </div>
              <div>
                <p className="text-white font-bold">Alertas de inventario críticas</p>
                <p className="text-slate-400 text-sm">Reabastece solo lo que necesitas antes del desabasto.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">troubleshoot</span>
              </div>
              <div>
                <p className="text-white font-bold">Segmentación automática de clientes</p>
                <p className="text-slate-400 text-sm">Identifica perfiles de alto valor sin mover un dedo.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">ads_click</span>
              </div>
              <div>
                <p className="text-white font-bold">Promociones inteligentes</p>
                <p className="text-slate-400 text-sm">Campañas personalizadas que convierten 3 veces más.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-4">
                <div className="size-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <div>
                  <p className="text-white font-bold">IA Analytics Suite</p>
                  <p className="text-gold-accent text-xs">Motor de Predicción en Vivo</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full border border-gold-accent/50 text-gold-accent text-[10px] font-bold uppercase">
                Optimizado
              </div>
            </div>
            <div className="h-64 flex items-end gap-2 mb-8">
              <div className="flex-1 bg-primary/40 rounded-t-lg h-[40%]"></div>
              <div className="flex-1 bg-primary/60 rounded-t-lg h-[60%]"></div>
              <div className="flex-1 bg-primary/80 rounded-t-lg h-[85%] relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  Pico esperado: Sáb
                </div>
              </div>
              <div className="flex-1 bg-primary rounded-t-lg h-[95%]"></div>
              <div className="flex-1 bg-primary/70 rounded-t-lg h-[50%]"></div>
              <div className="flex-1 bg-primary/40 rounded-t-lg h-[30%]"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-400 text-xs uppercase mb-1">Confianza</p>
                <p className="text-white text-xl font-bold">98.2%</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-400 text-xs uppercase mb-1">Insights</p>
                <p className="text-white text-xl font-bold">14 Nuevos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
