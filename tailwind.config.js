/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Work Sans", "serif"],
        base: ["Work Sans", "sans-serif"],
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
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
