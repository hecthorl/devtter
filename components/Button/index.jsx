const Button = ({ children, onClick, disabled }) => {
   return (
      <>
         <button
            className="p-3 text-lg bg-white text-black w-full rounded-full"
            disabled={disabled}
            onClick={onClick}
         >
            {children}
         </button>
      </>
   )
}

export default Button
