/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/home.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  
  plugins: [],
}

