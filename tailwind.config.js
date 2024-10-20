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
        bg_focus:'#2D2F31',
        bg_submit:'#2f87eb',
        bg_submith:'#035f90',
        bg_google:'#e033f5',
        bg_googleh:'#5f0390'
      }
    },
  },
  plugins: [],
}
