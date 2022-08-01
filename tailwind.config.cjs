/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
