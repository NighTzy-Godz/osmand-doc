/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        gelionReg: "Gelion_Reg",
        gelionBold: "Gelion_Bold",
      },
      colors: {
        bgColor: "rgba(var(--bgColor))",
        textColor: "rgba(var(--textColor))",
        mainColor: "rgba(var(--mainColor))",
        navColor: "rgba(var(--navColor))",
        activeNavShadow: "rgba(var(--activeNavShadow))",
        mainColorDark: "rgba(var(--mainColorDark))",
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },

      screens: {
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1180px",
        "2xl": "1350px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
