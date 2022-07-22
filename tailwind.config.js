/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAF8FF",
        secondary: "#00E18",
        accent: "#01BDF8",
      },
    },
    fontFamily: {
      al: ["Alegreya Sans", "sans-serif"],
      la: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
