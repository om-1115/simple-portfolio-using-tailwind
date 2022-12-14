/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   // Configure your color palette here
    //   'cyan': colors.cyan,
    //   'teal' : colors.teal
    // },

    extend: {
      fontFamily:{
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}
