/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "426px" },

      md: "767px",

      lg: "1023px",
    },
  },
  plugins: [],
};
