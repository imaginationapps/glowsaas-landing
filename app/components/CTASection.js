'use client';

export default function CTASection() {
  return (
    <section className="px-6 md:px-20 py-24 bg-dark-accent relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10 relative z-10">
        <h2 className="text-white text-4xl md:text-7xl font-black tracking-tight leading-none">
          El crecimiento no es suerte.<br />
          <span className="text-primary">Es estrategia.</span>
        </h2>
        <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
          Únete a los líderes que ya están transformando la industria. Toma el mando hoy mismo.
        </p>
        <button className="w-full md:w-auto flex min-w-[320px] cursor-pointer items-center justify-center rounded-2xl h-20 px-12 bg-primary text-white text-2xl font-black shadow-[0_20px_50px_rgba(184,50,128,0.4)] hover:-translate-y-2 transition-all">
          <span>Quiero Escalar Mi Salón</span>
        </button>
        <div className="flex gap-8 items-center pt-4">
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold">1,500+</span>
            <span className="text-slate-400 text-xs uppercase">Salones Elite</span>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold">94%</span>
            <span className="text-slate-400 text-xs uppercase">Retención</span>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#B83280_0%,transparent_70%)] opacity-10"></div>
    </section>
  );
}
