/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc-regular': ['"Amatic SC"', 'sans-serif'],
        'amatic-sc-bold': ['"Amatic SC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

