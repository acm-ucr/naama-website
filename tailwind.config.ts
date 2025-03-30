/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--playfair-font)"],
      },
      colors: {
        naama: {
          "blue-100": "#86ADEA",
          "blue-200": "#25459A",
          "blue-300": "#0A2469",
          "ivory-100": "#F7F2EB",
        },
      },
    },
  },
  plugins: [],
};
