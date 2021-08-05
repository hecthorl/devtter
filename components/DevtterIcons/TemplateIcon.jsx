const TemplateIcon = ({ className, children }) => {
   return (
      <svg
         aria-hidden
         viewBox="0 0 24 24"
         className={className || ' fill-current'}
      >
         <g>{children}</g>
      </svg>
   )
}

export default TemplateIcon
