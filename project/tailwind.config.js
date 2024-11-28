/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-navy': {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B'
        }
      },
      backgroundColor: {
        'custom-navy': {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B'
        }
      }
    },
  },
  plugins: [],
};