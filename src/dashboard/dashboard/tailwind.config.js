module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f5f5f5", 500: "#a5a5a5", 700: "#5d5d5d", 800: "#473d53", 900: "#232323", "900_01": "#141414" },
        white: { A700: "#ffffff" },
        blue_gray: { 800: "#433159" },
        deep_purple: { 100: "#cfabff", A400: "#7c17ff" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
