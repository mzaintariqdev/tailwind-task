/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      app: ["poppins", "sans-serif"],
    },
    fontSize: {
      greeting: "5.25rem",
      greetingMob: "3.56rem",
      logoWidth: "37.5rem",
      logoHeight: "5.4rem",
      logout: "1.75rem",
    },
    extend: {
      colors: {
        "input-border": "#4A3AFF",
        "btn-color": "#1918FF",
      },
      width: {
        btnWidth: "193px",
      },
      height: {
        btnHeight: "66px",
      },
      maxWidth: {
        logoWidth: "37.5rem",
        inputWidth: "558px",
        logoMobWidth: "27.75rem",
        logoPicWidth: "27.75rem",
      },
      maxHeight: {
        logoHeight: "5.4rem",
        inputHeight: "60px",
        loginPicHeight: "5.4rem",
      },
    },
  },
  plugins: [],
};
