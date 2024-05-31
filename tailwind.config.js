/** @type {import('tailwindcss').Config} */
export default  {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        background:'#FFFFFF',
        banner:'#FFF2D0',
        secondaryColor: 'rgb(146,188,109)',
        footer:'#EBFEEA',
        fade:"#B6B6B6"
      },
      fontSize:{
        text: '0.9rem',
        subheading:'1.2rem',
        heading: '1.4rem'
      }
    },
  },
  plugins: [],
}