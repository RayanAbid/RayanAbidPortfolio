module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "10px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      colors: {
        main: "#8B9A46",
        secondry: "#541212",
        bgPrimary: "##FFFFFFD9",
        dark: "#0f0e0e",
        disableClr: "#c4c4c4",
        bgSecondry: "#F0F0F0",
        white: "#EEEEEE",
        primaryOrange: "#EF641A",
        primaryText: "#2C4857",
        textGray: "#7D7D7D",
        secondaryText: "#A6A6A6",
        footerText: "#7197AB",
        regText: "#4D4D4D",
        bgCities: "#F0F0F0",
        bgSelectedCity: "#2C4857",
        bgAbuDhabiCity: "rgba(44, 72, 87, 0.2)",
        bgCitynotSelectedLoad: "rgba(198, 223, 244, 1)",
      },
    },
  },
  plugins: [],
};
