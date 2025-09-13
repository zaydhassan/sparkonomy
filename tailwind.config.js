/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#fbe7f4',
        'brand-purple': '#a855f7',
        'brand-light-purple': '#ede9fe',
      },
    },
  },
  plugins: [],
}