/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B83280',
        'accent-growth': '#2D6A4F',
        'dark-accent': '#4A154B',
        'gold-accent': '#D4AF37',
        'light-accent': '#E8A0BF',
        'background-light': '#f8f6f7',
        'background-dark': '#20121a',
      },
      fontFamily: {
        'display': ['var(--font-manrope)', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
