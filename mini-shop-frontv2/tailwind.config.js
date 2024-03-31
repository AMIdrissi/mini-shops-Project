/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0px 3px 0px 0px rgb(7 ,89 ,133)",
      },
      fontFamily: {
        customFont: "Play, sans-serif",
        jp3d: "Aoboshi One, serif",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
