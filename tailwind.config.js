// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Prime: "#127780",
        lightBlack: "#161616",
        greyscale: "#424242",
        yellow: "#FFD300",
        lightBlue: "#F6FAFD",
        darkPink: "#F75555",
        lavender: "#E0E0E0",
        softPeach: "#EEEEEE",
        gunsmoke: "#81848A",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};