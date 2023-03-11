/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "18px",
        base: "30px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        primary: "#fff",
        secondary: "#4285f4",
        tertiary: "#6199f5",
      },
      screens: {
        sm: "768px",
        // => @media (min-width: 576px) { ... }

        md: "868px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
};
