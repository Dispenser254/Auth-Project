/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0766ff",
        "primary-content": "#ffffff",
        "primary-dark": "#0051d3",
        "primary-light": "#3a85ff",

        secondary: "#ff073d",
        "secondary-content": "#ffffff",
        "secondary-dark": "#d3002e",
        "secondary-light": "#ff3a65",

        background: "#eeeff2",
        foreground: "#fbfbfc",
        border: "#dbdee3",

        copy: "#21252b",
        "copy-light": "#596373",
        "copy-lighter": "#7e899b",

        success: "#07ff07",
        warning: "#ffff07",
        error: "#ff0707",

        "success-content": "#000700",
        "warning-content": "#070700",
        "error-content": "#ffffff",
      },
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
