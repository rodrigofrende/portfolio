const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "blue-dark": "#023047",
      "blue-dark-hover": "#033249",
      "blue-light": "#8ECAE6",
      "header-bar": "#219EBC",
      "header-bar-dark": "#242424",
      "orange-dark": "#ff8d00d1",
      "blue-text": "#05489c",
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: "40px" },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
