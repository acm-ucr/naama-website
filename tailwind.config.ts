/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--playfair-font)"],
      },
    },
  },
  plugins: [],
};
