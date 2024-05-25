/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/bkkrag.jpg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1192px'
      },
    },
  },
  plugins: [],
};

