/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        desatRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        dkGrayRed: "hsl(0, 6%, 24%)",
      },
    },
  },
  plugins: [],
};
