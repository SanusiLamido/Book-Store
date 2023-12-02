/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#3D30A2",
        backgroundColor:  "#0171E8",
      },
    },
  },
  plugins: [],
};