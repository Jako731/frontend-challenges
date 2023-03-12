/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{hbs,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
};
