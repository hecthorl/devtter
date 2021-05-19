import Link from 'next/link'
import navbarStyles from './styles'
// import useDeg from '../../hooks/useDeg';

const Navbar = () => {
   return (
      <nav>
         <ul>
            <li>
               <Link href="/">
                  <a>index</a>
               </Link>
            </li>
            <li>
               <Link href="/home">
                  <a>Home</a>
               </Link>
            </li>
            <li>
               <Link href="/timeline">
                  <a>Timeline</a>
               </Link>
            </li>
            <li>
               <Link href="/reloj">
                  <a>Reloj</a>
               </Link>
            </li>
         </ul>
         <style jsx>{navbarStyles}</style>
      </nav>
   )
}

export default Navbar
