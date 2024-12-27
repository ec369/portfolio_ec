module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      ssm: {'min': '360px', 'max': '639px'},
      sm: {'min': '640px', 'max': '767px'},
      md: {'min': '768px', 'max': '959px'},
      lg: {'min': '960px', 'max': '1199px'},

 

    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg3.jpg')",
        about: "url('./assets/about.png')",
        services: "",
        mandala: "url('./assets/mandala.png')",
        cv: "url('./assets/foto_cv.jpeg')",
       
      },
    },
  },
  plugins: [],
};
