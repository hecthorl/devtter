/**
 * Retorna un número aleatorio dentro de los márgenes de min y max
 * @param {number} min Rango mínimo
 * @param {number} max Rango máximo
 * @returns {number}
 */
export default function randomNumInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
