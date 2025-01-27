/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/*.{html}", "./js/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        questrial: ['"Questrial", sans-serif'],
      },
      screens: {
        'custom': '500px',
      },
    },
  },
  plugins: [],
}

