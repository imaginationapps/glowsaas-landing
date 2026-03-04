'use client';

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-extrabold">BeautyFlow</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            La plataforma de gestión definitiva para negocios de belleza modernos. Diseñada para el rendimiento, creada para el lujo.
          </p>
          <div className="flex gap-4">
            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
              Producto
            </h4>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Funcionalidades
            </a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Integraciones
            </a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              API Docs
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
              Empresa
            </h4>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Sobre nosotros
            </a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Carreras
            </a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Contacto
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">
              Legal
            </h4>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Privacidad
            </a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">
              Términos
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">© 2026 BeautyFlow Technologies Inc. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="text-slate-400 text-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-accent-growth">lock</span> Conexión Segura SSL
          </span>
        </div>
      </div>
    </footer>
  );
}
