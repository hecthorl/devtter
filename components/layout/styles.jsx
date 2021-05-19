import css from 'styled-jsx/css'
import { fonts } from 'styles/theme'

export const globalStyles = css.global`
   html,
   body {
      padding: 0;
      margin: 0;
      font-family: ${fonts.base};
      background-image: radial-gradient(#09f, 1px, transparent 1px),
         radial-gradient(#09f, 1px, transparent 1px);
      background-position: 0 0, 25px 25px;
      background-size: 50px 50px;
   }

   * {
      box-sizing: border-box;
   }
`
