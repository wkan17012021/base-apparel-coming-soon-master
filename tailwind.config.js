/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    letterSpacing: {
      custom: "0.5em",
    },
    extend: {
      colors: {
        desatRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        dkGrayRed: "hsl(0, 6%, 24%)",
        offHoverLeft: "hsl(0, 80%, 86%)",
        offHoverRight: "hsl(0, 74%, 74%)",
        onHoverLeft: "hsl(0, 60%, 90%)",
        onHoverRight: "hsl(0, 50%, 80%)",
      },
    },
  },
  plugins: [],
};
