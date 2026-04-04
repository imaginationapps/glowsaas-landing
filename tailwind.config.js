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
        'primary': '#0F766E',
        'accent-growth': '#2563EB',
        'dark-accent': '#14212B',
        'gold-accent': '#C59A5C',
        'light-accent': '#8FBFC7',
        'background-light': '#F3F6F5',
        'background-dark': '#0D141B',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
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
