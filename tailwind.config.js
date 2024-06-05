/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#6FD943",
      // secondary: "",
    },
  },
  plugins: ["preline/plugin"],
};
