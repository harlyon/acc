module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
      xl: { max: "1280px" },
      laptop: "1024px",
    },
    extend: {
      colors: {
        blue_gray: { "900_19": "#36363619" },
        gray: { 50: "#f9f9f9", 100: "#f5f5f5", 900: "#242424" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_d8": "#000000d8",
          "900_01": "#0a0a0a",
          "900_00": "#00000000",
          "900_bf": "#000000bf",
        },
        purple: { 800: "#70259b", 900: "#420863", A400: "#d100c8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "0px 2px  6px 0px #0000003f",
        bs: "0px 8px  16px 0px #36363619",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#000000d8)",
        gradient1: "linear-gradient(180deg ,#000000bf,#000000bf)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
