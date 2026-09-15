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
        dark: {
          base: '#05020a',       // Deepest obsidian background from image
          surface: '#0a0515',    // Slightly elevated surface
          card: '#0e081c',       // Card background
          cardHover: '#140c28',  // Hover card background
          border: '#261542',     // Subtle dark violet border
          borderLight: '#3b2066',// Highlight border
          pill: '#150d27',       // Pill button background
          pillHover: '#231442',  // Pill button hover
        },
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#996bd8',        // Designer base purple
          600: '#8b5cf6',        // Vibrant luminous purple from image glow
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#4c1d95',
          950: '#2e1065',
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
        'glow-sm': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
        'glow': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
        'glow-lg': '0 0 65px -10px rgba(168, 85, 247, 0.5)',
        'glow-white': '0 0 25px rgba(255, 255, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
