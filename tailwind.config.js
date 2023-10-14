/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      pry: "rgba(127, 86, 217, 1)",
      bg_pry: "rgba(12, 17, 29, 1)",
      white: "#fff",
      text_primary: "rgba(245, 245, 246, 1)",
      text_tertiary: "rgba(148, 150, 156, 1)",
      text_sec: "rgba(206, 207, 210, 1)",
      text_quarterary_500: "rgba(148, 150, 156, 1)",
      text_placeholder: "rgba(133, 136, 142, 1)",
      border_pry: "rgba(51, 55, 65, 1)",
      bg_secondary_subtle: "rgba(22, 27, 38, 1)",
      border_secondary: "rgba(31, 36, 47, 1)",
      success_secondary: "rgba(71, 205, 137, 1)",
      utility_success_50: "rgba(5, 51, 33, 1)",
      utility_success_200: "rgba(8, 93, 58, 1)",
      utility_success_700: "rgba(117, 224, 167, 1)",
      utility_success_500: "rgba(23, 178, 106, 1)",
      utility_error_500: "rgba(240, 68, 56, 1)",
      utility_error_50: "rgba(85, 22, 12, 1)",
      utility_error_200: "rgba(145, 32, 24, 1)",
      utility_error_700: "rgba(253, 162, 155, 1)",
    },
  },
  plugins: [],
};
