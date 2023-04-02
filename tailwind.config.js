/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "699px" },
      Smobile: { max: "340px" },
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/src/img/background.webp')",
      }),
    },
  },
  plugins: [],
};
