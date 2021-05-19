import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

const buttonStyles = css`
   button {
      margin: 0 auto;
      padding: 8px 24px;
      cursor: pointer;
      background-color: ${colors.black};
      border-radius: 50px;
      color: white;
      width: fit-content;
      font-size: 16px;
      outline: none;
      border: 1px solid transparent;
      transition: background ease 0.3s, color ease 0.3s, opacity ease 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
   }
   button[disabled] {
      opacity: 0.3;
      pointer-events: none;
   }
   button > :global(svg) {
      font-size: 20px;
      margin-right: 5px;
   }
   button:hover {
      background-color: transparent;
      color: ${colors.black};
      border: 1px solid ${colors.black};
   }
`
export default buttonStyles
