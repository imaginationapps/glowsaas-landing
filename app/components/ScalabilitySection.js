'use client';

export default function ScalabilitySection() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark/50" id="growth">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="bg-dark-accent p-8 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent-growth"></div>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h4 className="text-white text-lg font-bold">Consolidado Nacional</h4>
                <p className="text-light-accent text-xs">8 sucursales activas</p>
              </div>
              <div className="text-right">
                <p className="text-gold-accent font-bold text-xl">+24%</p>
                <p className="text-slate-400 text-[10px] uppercase">Crecimiento Mensual</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    S1
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Sucursal Polanco</p>
                    <div className="w-32 h-1 bg-slate-700 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-gold-accent w-[92%]"></div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-mono">$42,500</p>
              </div>
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    S2
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Sucursal Condesa</p>
                    <div className="w-32 h-1 bg-slate-700 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-gold-accent w-[78%]"></div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-mono">$38,200</p>
              </div>
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    S3
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Sucursal Santa Fe</p>
                    <div className="w-32 h-1 bg-slate-700 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-gold-accent w-[65%]"></div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-mono">$31,900</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold-accent p-6 rounded-2xl shadow-xl text-dark-accent">
            <p className="text-xs uppercase font-bold opacity-80">Proyección Trimestral</p>
            <p className="text-2xl font-black">+152%</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight">
            Escala sin perder el control.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Gestiona múltiples sucursales, equipos y metas con visión empresarial desde una única interfaz de alto rendimiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-4">
            <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Comparativa entre sucursales
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
              <span className="material-symbols-outlined text-primary">group</span>
              Metas por estilista
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
              <span className="material-symbols-outlined text-primary">monitoring</span>
              Proyección de ingresos
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
              <span className="material-symbols-outlined text-primary">person_add</span>
              Análisis de clientes recurrentes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
