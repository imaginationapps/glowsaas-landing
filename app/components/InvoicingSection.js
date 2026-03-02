'use client';

export default function InvoicingSection() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        <div className="max-w-3xl">
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight mb-6">
            Cumple con Hacienda sin frenar tu crecimiento.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
            Factura electrónicamente desde cada venta y mantén tu negocio en regla sin procesos manuales.
          </p>
        </div>
        <div className="w-full max-w-4xl bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent-growth/10 flex items-center justify-center text-accent-growth">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold">Certificación Fiscal Oficial</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent-growth/10 flex items-center justify-center text-accent-growth">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold">Sincronización en Tiempo Real</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent-growth/10 flex items-center justify-center text-accent-growth">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold">Archivo Digital de 5 Años</p>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 rotate-2 group-hover:rotate-0 transition-transform">
                <div className="flex justify-between items-start mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Factura Electrónica</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">FE-2024-0892</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[8px] bg-accent-growth/10 text-accent-growth font-bold uppercase tracking-wider">
                    Emitida
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Balayage Pro</span>
                    <span className="font-bold text-slate-900 dark:text-white">$145.00</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Tratamiento Hidratación</span>
                    <span className="font-bold text-slate-900 dark:text-white">$35.00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Total con Impuestos</p>
                  <p className="text-lg font-black text-primary">$180.00</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-300">qr_code_2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
