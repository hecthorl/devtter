import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export const devitStyles = css`
   article {
      border-top-style: none;
      border-right: 1px solid ${colors.border};
      border-bottom: 1px solid ${colors.border};
      border-left: 1px solid ${colors.border};
      display: grid;
      grid-template-columns: auto 1fr;
      width: 100%;
      color: #2d2d2d;
      transition: background-color 0.2s ease;
   }
   article:hover {
      background-color: rgb(0 0 0 / 13%);
      cursor: pointer;
   }

   h2 {
      margin: 0;
      text-transform: capitalize;
      font-size: 16px;
      font-bold: bold;
   }

   img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 5px;
   }

   time {
      color: #808080;
      font-size: 14px;
   }

   .content {
      width: 100%;
   }
   .content-heading {
      display: flex;
      gap: 5px;
      align-items: baseline;
   }

   .content-body {
      margin: 5px;
   }
   .img-body {
      width: 100%;
      height: 400px;
      border-radius: 10px;
      object-fit: cover;
   }
`
