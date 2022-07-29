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
        secondary: "#100E18",
        accent: "#01BDF8",
      },
      width: {
        mw: "323px",
        dw: "615px",
        mtw: "451px",
        sw: '1280px'
      },
      height: {
        mh: "310px",
        dh: "591px",
      },
    },
    fontFamily: {
      pr: ["Prompt", "sans-serif"],
      la: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
