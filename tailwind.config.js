module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'baskerville': ['"Libre Baskerville"'],
      'roboto':['"Roboto"'],
      'poppins':['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
