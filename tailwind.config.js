/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#040404",
        secondary: "#FFC914", // primary "rgb(250 204 21)"
        tertiary: "#FFCF33",
        "black-100": "#0e1123",
        "black-200": "#000008",
        "white-100": "bg-slate-400",
      },
      boxShadow: {
        card: "0px 25px 35px -20px #FFCF33 ",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

