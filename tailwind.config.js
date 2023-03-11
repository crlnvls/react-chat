/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "18px",
        base: "50px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        primary: "#fff",
        secondary: "#56c5f9e6",
        tertiary: "#54a5cae0",
      },
    },
  },
  plugins: [],
};
