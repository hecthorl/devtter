// import Navbar from 'components/navbar'
import { globalStyles } from './styles'

const Layout = ({ children }) => {
   return (
      <>
         {/* <Navbar /> */}
         <div>{children}</div>
         <style jsx global>
            {globalStyles}
         </style>
      </>
   )
}

export default Layout
