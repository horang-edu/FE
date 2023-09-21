module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      width: {
        92: "5.75rem",
        417: "26.0625rem",
        542: "33.875rem",
        40: "2.5rem",
      },
      height: {
        79: "4.9375rem",
        40: "2.5rem",
      },
      fontSize: {
        12: "0.75rem",
        16: "1rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
      },
      spacing: {
        4: "0.25rem",
        10: "0.625rem",
        12: "0.75rem",
        16: "1rem",
        17: "1.0625rem",
        19: "1.1875rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        31: "1.9375rem",
        40: "2.5rem",
        45: "2.8125rem",
      },
      colors: {
        color1: "rgba(144, 126, 255, 1)",
        color2: "rgba(231, 231, 255, 1)",
        color3: "rgba(207, 205, 255, 1)",
        color4: "rgba(220, 219, 255, 1)",
        color5: "rgba(159, 156, 240, 1)",
        color6: "rgba(96, 90, 241, 1)",
        white: "rgba(255, 255, 255, 1)",
        bgcolor: "rgba(248, 248, 249, 1)",
      },
      boxShadow: {
        custom: "0rem .25rem .25rem 0rem rgba(159, 156, 240, 0.15)",
      },
      borderRadius: {
        custom: "0.625rem",
      },
    },
  },
  plugins: [],
};
