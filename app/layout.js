import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'GlowSaaS - El Sistema Operativo para Imperios de Belleza',
  description: 'Domina tu crecimiento con analíticas de alta fidelidad, retención automatizada e inteligencia de inventario. Diseñado para CEOs que no aceptan la mediocridad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="font-display text-slate-900 dark:text-slate-100 antialiased">{children}</body>
    </html>
  );
}
