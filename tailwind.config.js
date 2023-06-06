/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      maxWidth: {
        "page": "1280px",
      },
      padding: {
        "screen-edge": "1.5rem",
      },
    },
  },
  plugins: [],
}
