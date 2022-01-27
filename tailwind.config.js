module.exports = {
   content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#15202b',
            secondary: '#38444d',
            tertiary: '#192734',
            brand: '#1a91da',
         },
         boxShadow: {
            float: 'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
         },
      },
      screens: {
         sm: '500px',
         md: '987px',
         xl: '1004px',
         '2xl': '1282px',
      },
   },
   plugins: [],
}
