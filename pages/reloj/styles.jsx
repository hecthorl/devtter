import css from 'styled-jsx/css'

const loadingRelojStyles = css`
   .container {
      padding: 0 50px;
   }

   .loading {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: radial-gradient(farthest-side, #f03355 95%, #0000) 50% 1px/12px
            12px no-repeat,
         radial-gradient(farthest-side, #a6ffda calc(100% - 14px), #ccc 0);
      animation: s9 0.5s infinite ease;
   }
   @keyframes s9 {
      to {
         transform: rotate(1turn);
      }
   }
`

export default loadingRelojStyles
