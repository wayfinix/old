/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2e4b37",
        secondary: "#669e77",
        tertiary: "#f7e7b6",
        quaternary: "#ebc970",
        lightGreen: "#7aad56",
      },
      fontFamily: {
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
