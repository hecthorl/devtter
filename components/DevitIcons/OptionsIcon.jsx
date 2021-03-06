import TemplateIcon from './TemplateIcon'

const OptionsIcon = () => {
   return (
      <TemplateIcon>
         <circle fill="currentColor" cx={17} cy={12} r={1.5} />
         <circle fill="currentColor" cx={12} cy={12} r={1.5} />
         <circle fill="currentColor" cx={7} cy={12} r={1.5} />
         <path
            fill="currentColor"
            d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
         />
      </TemplateIcon>
   )
}

export default OptionsIcon
