/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add your Figma brand colors here later
        brand: "#2563eb", 
      },
    },
  },
  plugins: [],
}