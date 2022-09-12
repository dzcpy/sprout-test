/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-text': '#9B9393',
        'gray-bg': '#f5f4f4',
        'gray-inactive': '#685c5b',
        'gray-pressed': '#eceaea',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
