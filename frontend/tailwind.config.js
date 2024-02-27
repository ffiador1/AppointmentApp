/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container:{
      padding: "5rem",
    },
    colors: {
      brown: {
        300: '#be855f',
      },
      white:'#FFFFFF',
      yellow:{
        100:'#FEF9C3',
      },
      orange:{
        400:'#FB923C',
        500:'#F97316',
      },
  },
  plugins: [],
}
}
