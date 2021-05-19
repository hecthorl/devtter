import buttonStyles from './styles'

const Button = ({ children, onClick, disabled }) => {
   return (
      <>
         <button disabled={disabled} onClick={onClick}>
            {children}
         </button>
         <style jsx>{buttonStyles}</style>
      </>
   )
}

export default Button
