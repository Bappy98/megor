/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        majorbg: '#1C1C1C',
        contact:'#F6F6F6',
      },
    },
  },
  plugins: [],
}
