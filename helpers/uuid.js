import randomIntFromInterval from './randomIntFromInterval'
import shuffle from './shuffle'
import { WORDS_ARR as letters } from './constants'

const uuid = () => {
   const numResult = []
   const numLength = randomIntFromInterval(5, 9)

   while (numResult.length < numLength) {
      const number = randomIntFromInterval(0, 9)
      if (!numResult.includes(number)) numResult.push(number)
   }

   const lettersLength = Math.abs(numLength - 29)
   const randomLetters = shuffle(letters).slice(0, lettersLength)
   const halfMays = randomLetters.slice(0, Math.floor(randomLetters.length / 2))
   const mayus = halfMays.map(item => item.toUpperCase())
   const minus = randomLetters.slice(mayus.length, -1)
   const finalArr = shuffle([...mayus, ...minus])

   return shuffle([...finalArr, ...numResult])
      .toString()
      .replaceAll(',', '')
}

export default uuid
