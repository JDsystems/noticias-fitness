/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'news': "url('../img/news.png')"
      }
    },
  },
  plugins: [
  ],
}
