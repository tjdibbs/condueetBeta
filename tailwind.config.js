// tailwind.config.js
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#0E2254",
        "main-blue": "#205184",
        orange: "#F88703",
        sky: "#e9effc",
        coral: "#ee6f57",
      },
      backgroundImage: {
        "cover-image": "url('src/assets/background-1.png')",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["Lato"],
    },
  },
  plugins: [],
};
