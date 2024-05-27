/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: {
          light: '#FDB38D',
          DEFAULT: '#FF9900'
        },
        gray: {
          light: '#F1F3F3',
          DEFAULT: '#A0AEC0',
          dark: '#D4DADA'
        },
        black: '#232F3E',
        white: '#FFFFFF',
        pink: '#F46EBB',
        blue: '#005276',
        teal: '#007FAA',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

