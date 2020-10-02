module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
      colors: {
        'light-black': '#27282C',
        'hero-blend': '#FEFEFE',
        'dark-bg': '#0A0526',
        'light-bg': '#7E7AA2',
        'normal-bg': '#140E34',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
      },
      backgroundImage: (theme) => ({
        'hero-image':
          "url('https://res.cloudinary.com/dow1i4bxf/image/upload/q_auto/v1601482034/oscar-willow-khan/hero_awusmu.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
