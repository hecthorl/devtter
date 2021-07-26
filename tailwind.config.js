/* eslint-disable */

module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   mode: 'jit',
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            primary: '#15202b',
            secondary: '#38444d',
            tertiary: '#192734'
         }
      },
      screens: {
         sm: '500px',
         md: '987px',
         xl: '1004px',
         '2xl': '1282px'
      }
   },
   variants: {
      extend: { opacity: ['disabled'] }
   },
   plugins: []
}
