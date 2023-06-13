/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lato", "serif"],
        base: ["Lato", "sans-serif"],
      },
      maxWidth: {
        page: "1280px",
      },
      margin: {
        "screen-edge": "1.5rem",
      },
      padding: {
        "screen-edge": "1.5rem",
      },
      gridTemplateColumns: {
        theme: "0.0625fr 1fr 1fr 0.0625fr",
        themelg: "0.125fr 1fr 1fr 0.125fr",
        themexl: "0.175fr 1fr 1fr 0.175fr",
      },
      screens: {
        xs: "480px",
        md2: "896px",
        "2lg": "1096px",
        "3lg": "1176px",
        "4lg": "1216px",
      },
    },
  },
  plugins: [],
};
