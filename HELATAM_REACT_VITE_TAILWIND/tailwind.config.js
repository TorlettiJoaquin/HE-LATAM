/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/assets/img/bg01.webp')"
      }
    },
  },
  plugins: [],
}

