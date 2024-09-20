/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        emerald: {
          500: "hsl(158, 36%, 37%)",
          700: "hsl(158, 36%, 17%)",
        },
        navy: {
          600: "hsl(228, 12%, 48%)",
          900: "hsl(212, 21%, 14%)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
