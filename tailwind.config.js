/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{hbs,js}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
      rotate: {
        '17': '17deg',
        '10': '10deg',
      },
    },
  },
  plugins: [],
};
