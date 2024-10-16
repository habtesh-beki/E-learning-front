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
        color_text:'#81878C',
        bg_btn:'#E4E8EB',
        bg_hover:'',
        bg_focus:'#2D2F31'
      }
    },
  },
  plugins: [],
}
