/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    'rotating',
    'paused'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
