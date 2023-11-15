/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily:{
        primary: ['var(--font-family-primary)'],
        secondary: ['var(--font-family-secondary)'],
        tertiary: ['var(--font-family-tertiary)'],
        quaternary: ['var(--font-family-quaternary)'],
        quinary: ['var(--font-family-quinary)'],
      }
    },
  },
  plugins: [],
}

