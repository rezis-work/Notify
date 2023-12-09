/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      myBlue: "#0A327B",
    },
    extend: {},
  },
  plugins: [],
};
