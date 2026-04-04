import './globals.css';

export const metadata = {
  title: 'StyleFlow - El Sistema Operativo para Negocios de Estilo',
  description:
    'Domina tu crecimiento con analíticas de alta fidelidad, retención automatizada e inteligencia de inventario. Diseñado para marcas de estilo que quieren crecer con control.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-display text-slate-900 dark:text-slate-100 antialiased">{children}</body>
    </html>
  );
}
