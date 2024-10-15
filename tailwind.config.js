/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_photo:'#F8F9FB',
        color_text:'#81878C'
      }
    },
  },
  plugins: [],
}
