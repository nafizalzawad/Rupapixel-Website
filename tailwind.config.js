/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf7fd',
          100: '#f3ecfa',
          200: '#e7dbf5',
          300: '#d3bded',
          400: '#b796e4',
          500: '#996bd8', // Base color specified by user
          600: '#844fd0',
          700: '#703dc1',
          800: '#5d33a1',
          900: '#4c2c82',
          950: '#2d1754',
          dark: '#0f091a',
          surface: '#171026',
          card: '#1e1533',
          pill: '#2a1e45'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(153, 107, 216, 0.35)',
        'glow-lg': '0 0 60px -15px rgba(153, 107, 216, 0.45)',
      }
    },
  },
  plugins: [],
}
