const defaultTheme = require('tailwindcss/defaultTheme');

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
      screens: {
        xs: '568px',
        iPad: { raw: '(width: 768px) and (height: 1024px)' },
        iPadWidescreen: { raw: '(width: 1024px) and (height: 768px)' },
        iPadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        iPadProWidescreen: { raw: '(width: 1366px) and (height: 1024px)' },
        ...defaultTheme.screens,
      },
      backgroundImage: (theme) => ({
        'hero-image': "url('/hero.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
