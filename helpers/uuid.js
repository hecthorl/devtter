import randomNumInterval from './randomNumInterval'
import shuffle from './shuffle'
import { WORDS_ARR as letters } from './constants'

/**
 * Retorna un string único y aleatorio
 * @returns {String} Un conjunto de letras y números mezclados
 */
const uuid = () => {
   const numResult = []
   const numLength = randomNumInterval(5, 9)

   while (numResult.length < numLength) {
      const number = randomNumInterval(0, 9)
      if (!numResult.includes(number)) numResult.push(number)
   }

   const lettersLength = Math.abs(numLength - 29)
   const randomLetters = shuffle(letters).slice(0, lettersLength)
   const halfMays = randomLetters.slice(0, Math.floor(randomLetters.length / 2))
   const mayus = halfMays.map(item => item.toUpperCase())
   const minus = randomLetters.slice(mayus.length, -1)
   const finalLettersArr = shuffle([...mayus, ...minus])

   return shuffle([...finalLettersArr, ...numResult])
      .toString()
      .replaceAll(',', '')
}

export default uuid
