/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // sans: "Roboto Mono, monospace",
      sans: "Rubik",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        pinky: "#FFC0CB",
      },
    },
  },
  plugins: [],
};
