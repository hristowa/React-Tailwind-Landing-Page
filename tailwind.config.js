module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      height:{
        '109': '32rem',
        '110': '35rem',
        '111': '37rem'
      },
        colors: {
          mainColor: '#687351',
          mainColorLight: '#9ba17f',
          secondarycolor: '#c9c1ae',
        },
      
    },
  },
  plugins: [],
}

