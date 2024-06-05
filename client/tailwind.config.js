/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      pragati: ["'Pragati Narrow'", 'cursive'],
      oswald: ["'Oswald'", 'sans-serif']
      },
    },
  },
  plugins: [],
}

