module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : "#91C788 ",
        'light-green' : "#DDFFBC ",
      },
      fontFamily : {
        'poppins' : ['Poppins'],
        'montserrat' : ['Montserrat'],
      },
      fontWeight : {
        'superbold' : 1000,
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ],
}