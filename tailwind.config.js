/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "./src/components/**/*.{html,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 8px rgba(141, 211, 187, 0.40)', // Define your custom shadow here
      },
    },
  },
  plugins: [],
}