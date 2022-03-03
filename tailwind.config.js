module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      buttercream: "#F6E0A6",
      apricot: "#F28B00",
      peony: "#FAB6C5",
      white: "#FFFFFF",
      black: "#000000",
    },

    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
    },
    extend: {
      backgroundImage: {
        hero: "url('/img/hero.png')",
        heromobil: "url('/img/heromobil.png')",
        baggrund: "url('/img/baggrund.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
