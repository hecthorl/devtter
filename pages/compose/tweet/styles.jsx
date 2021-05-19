import css from 'styled-jsx/css'

export const stylesTweet = css`
   form {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      min-width: 300px;
      width: 100%;
      margin: 0 auto;
      margin-top: 50px;
   }
   textarea {
      resize: none;
      outline: none;
      font-family: inherit;
      padding: 10px;
      height: 200px;
      font-size: 16px;
      border-radius: 5px;
   }
   textarea:focus {
      outline: none;
   }
   img {
      max-height: 384px;
      max-width: 500px;
   }
   .img-button {
      border: none;
      border-radius: 50%;
      background-color: rgb(0 0 0 / 80%);
      padding-top: 4px;
      height: 40px;
      width: 40px;
      position: absolute;
      top: 0;
      right: 10px;
      cursor: pointer;
   }
   section {
      position: relative;
      width: inherit;
      display: flex;
      justify-content: center;
      background-color: #1b1b1b;
      margin-bottom: 10px;
   }
`
