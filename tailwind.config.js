module.exports = {
  content: ["./resources/js/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      },
      colors: {
        blueGray :{
          50: "rgba(241, 245, 249, 1)",
          100: "rgba(241, 245, 249,1)",
          200: "#e2e8f0",
          300: "#cbd5e1d9",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
        }, 
        emerald: {
          500: "rgba(16, 185, 129,1)",
        }
      },
    },

  },
  plugins: [],
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
};