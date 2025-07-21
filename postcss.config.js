const atImport = require("postcss-import");
const tailwind = require("@tailwindcss/postcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    atImport,
    tailwind,
    autoprefixer,
  ],
}
