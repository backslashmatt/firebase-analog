/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  daisyui: {
    themes: ["dark"]
  }
};
