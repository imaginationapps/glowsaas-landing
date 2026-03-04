'use client';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="size-8 text-primary">
          <span className="material-symbols-outlined text-4xl">diamond</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight">
          BeautyFlow
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-10">
        <nav className="flex items-center gap-8">
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
            href="#growth"
          >
            Escalabilidad
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
            href="#ai"
          >
            Inteligencia
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors"
            href="#pricing"
          >
            Precios
          </a>
        </nav>
        <div className="flex gap-3">
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span>Empezar Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
}
