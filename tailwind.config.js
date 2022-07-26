/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}