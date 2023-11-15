/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rojo-rodar':'#BA0909',
        'azul-rodar':'#21232D'
      },
      fontFamily:{
        primary:['Josefin Sans'],
        secondary:['Mooli']
      }
    },
  },
  plugins: [],
}

