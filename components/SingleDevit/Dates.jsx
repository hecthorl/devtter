import getDevitDate from 'helpers/getDevitDate'

const Dates = ({ date }) => {
   const { año, dia, hora, mes } = getDevitDate(date)
   return (
      <span className="space-x-1 hover:underline">
         <span>{hora}</span>
         <span>·</span>
         <span>{`${dia} ${mes}. ${año}`}</span>
      </span>
   )
}

export default Dates
