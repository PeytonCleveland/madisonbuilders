module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    },
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-300px)" }
        }
      },
      animation: {
        slide: "slide 45s infinite"
      }
    }
  },
  plugins: []
};
