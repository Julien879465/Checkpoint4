/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        haltere: "url('./assets/haltere.webp')",
        note: "url('./assets/notes.jpg')",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    colors: {
      main: "#2563eb",
      second: "#1e3a8a",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
