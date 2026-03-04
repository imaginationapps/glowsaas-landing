'use client';

export default function PricingSection() {
  return (
    <section className="px-6 md:px-20 py-24 bg-slate-50 dark:bg-slate-900/40" id="pricing">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center max-w-2xl">
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black mb-6">
            Invierte en control. Multiplica tus resultados.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Planes escalables diseñados para cada etapa de tu negocio de belleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          <div className="pricing-card bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col">
            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Basic</h3>
            <p className="text-slate-500 text-sm mb-8">
              Ideal para comenzar con lo esencial sin complicaciones.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$29</span>
              <span className="text-slate-500 text-sm">/mes</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                1 Sucursal
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Hasta 3 estilistas
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Facturación Inicial de 100 DTEs /Mes
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Agenda Inteligente
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Probar Básico
            </button>
          </div>
          <div className="pricing-card bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col">
            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-8">
              Para salones boutique que inician su digitalización.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-slate-900 dark:text-white">$49</span>
              <span className="text-slate-500 text-sm">/mes</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                1 Sucursal
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Hasta 5 estilistas
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Facturación Básica de 350 DTEs /Mes
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Agenda Inteligente
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Empezar Ahora
            </button>
          </div>
          <div className="pricing-card bg-white dark:bg-slate-900 p-10 rounded-3xl border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-bl-xl">
              Recomendado
            </div>
            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Pro</h3>
            <p className="text-slate-500 text-sm mb-8">
              La potencia total para dueñas de negocio ambiciosas.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-primary">$99</span>
              <span className="text-slate-500 text-sm">/mes</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Hasta 3 Sucursales
              </li>
              <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Estilistas ilimitados
              </li>
              <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Módulo IA de Predicción
              </li>
              <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Dashboard Multicentro
              </li>
              <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm font-bold">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Facturación Ilimitada + Soporte VIP
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
              Impulsar Mi Crecimiento
            </button>
          </div>
          <div className="pricing-card bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col">
            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-slate-500 text-sm mb-8">
              Soluciones personalizadas para cadenas y franquicias.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-slate-900 dark:text-white">A Medida</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Sucursales Ilimitadas
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                API para Integraciones
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Consultoría de Estrategia
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
                Account Manager Dedicado
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Contactar Ventas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
