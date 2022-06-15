/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'maitree': ['Maitree', 'sans-serif'],
      },
      color: {
        'light-gray': '#464646',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
