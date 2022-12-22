/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: { expensePill: "120px" },
      minHeight: { expensePill: "110px" },
    },
  },
  plugins: [],
};
