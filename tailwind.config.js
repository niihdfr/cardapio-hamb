/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/images/bg.png')"
      }
     ,
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],

        'title': ['url("/assets/fonts/title.otf")', 'sans-serif']
        
      }

    },
  },
  plugins: [],
}

