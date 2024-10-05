/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { green: "#52DBB2", lightGreen: "rgba(255, 255, 255, 1)" },
    },
  },
  plugins: [],
};
