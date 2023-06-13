/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#555A88",
        secondary: "#D85D5D"
      },
      gridTemplateColumns: {
        'min-300-max-320': 'repeat(auto-fit, minmax(300px, 320px))',
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}

