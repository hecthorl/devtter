import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const WordsCounter = ({ words, maxValue }) => {
   const limitColor = words >= maxValue ? 'red' : '#17bf63'
   const textExceeded = words >= maxValue ? maxValue - words : ''

   const estilos = buildStyles({
      strokeLinecap: 'round',
      pathColor: limitColor,
      trailColor: '#38444d',
      textColor: 'red',
      textSize: '45px'
   })
   if (!words) return null
   return (
      <>
         <span className="w-7 h-7 bg-transparent inline-block">
            <CircularProgressbar
               value={words}
               strokeWidth={7}
               text={textExceeded + ''}
               minValue={0}
               maxValue={maxValue}
               styles={estilos}
            />
         </span>
         <span className="bg-gray-400 w-[1px] inline-block h-[31px]"></span>
      </>
   )
}

export default WordsCounter
