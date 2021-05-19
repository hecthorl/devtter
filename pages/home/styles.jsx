import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export const homeStyles = css`
   ::-webkit-scrollbar {
      width: 10px;
   }
   ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 10px;
   }

   section {
      max-width: 500px;
      min-width: 300px;
      box-shadow: 0px 0px 6px 1px #333333;
      width: 100%;
      height: 650px;
      margin: 30px auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      overflow-y: scroll;
      border-radius: 8px;
   }

   main {
      padding: 5px;
   }
   .border-top-style {
      height: 1px;
      width: 100%;
      background-color: ${colors.border};
   }

   header,
   footer {
      /* height: 50px; */
      /* position: sticky; */
      width: inherit;
      background: rgb(255 255 255 / 23%);
      backdrop-filter: blur(4px);
   }
   header {
      top: 0;
      position: sticky;
   }
   footer {
      bottom: 0;
      position: sticky;
      z-index: 10;
   }
   .for-button {
      position: relative;
   }

   .new-tweet {
      position: absolute;
      color: #00adff;
      font-size: 32px;
      top: -85px;
      right: 10px;
      width: 70px;
      height: 70px;
      box-shadow: 3px 4px 6px 2px rgb(0 0 0 / 44%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 20;
      background: rgb(255 255 255 / 23%);
      /* backdrop-filter: blur(4px); */
      transition: background 0.3s ease;
   }
   .new-tweet:hover {
      background: rgb(255 255 255 / 95%);
   }
`
// backdrop-filter: blur(4px);
export default homeStyles
