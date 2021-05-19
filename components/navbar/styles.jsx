import css from 'styled-jsx/css'

const navbarStyles = css`
   li {
      list-style: none;
      color: white;
   }
   a {
      color: white;
      text-decoration: none;
   }
   ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      padding: 20px 0;
      background-image: linear-gradient(
         248deg,
         #6a1dc9,
         #ff6263,
         #e21893,
         #8753c6,
         #1f74d6,
         #2cdd93
      );
      animation: loco 10s ease forwards;
      animation-iteration-count: infinite;
      background-size: 300% 300%;
      background-repeat: no-repeat;
   }
   @keyframes loco {
      0% {
         background-position: 0% 86%;
      }
      50% {
         background-position: 100% 15%;
      }
      100% {
         background-position: 0 86%;
      }
   }
`

export default navbarStyles
