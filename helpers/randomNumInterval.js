/**
 * Retorna un número aleatorio dentro de los márgenes de min y max
 * @param {number} min Rango mínimo 'Required'
 * @param {number} max Rango máximo 'Required'
 * @returns {number}
 */
export default function randomNumInterval(min, max) {
   const errMsg = `Required values min and max, instead got min:${min}, max:${max}`
   if (typeof min !== 'number' || typeof max !== 'number') throw Error(errMsg)
   return Math.floor(Math.random() * (max - min + 1) + min)
}
