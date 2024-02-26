/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hoverbase': '#E78895',
        'bgbase': '#fcf9f0',
        'redbox': '#fb595e',
        'bgboxbase': '#143549'
      },
    },
  },
    plugins: [require("daisyui")],
}

