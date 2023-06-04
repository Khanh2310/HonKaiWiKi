/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Epilogue", "sans-serif;"],
      },
      colors: {
        GraySoft: "#2d2d2d",
        Gray: "#bababa",
        Graytext: "#8e8686",
      },
    },
  },
  plugins: [],
};
