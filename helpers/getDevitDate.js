/**
 * Retorna un objeto con la información por separado para formatear a gusto
 * @param {number} fecha Número en formato de fecha para el constructor Intl
 * @returns {object} Objeto que representa las fechas extraidas
 */
const getDevitDate = fecha => {
   const language = navigator.language
   const dia = new Intl.DateTimeFormat(language, {
      day: 'numeric'
   }).format(fecha)

   const año = new Intl.DateTimeFormat(language, {
      year: 'numeric'
   }).format(fecha)

   const mes = new Intl.DateTimeFormat(language, {
      month: 'short'
   }).format(fecha)

   const hora = new Intl.DateTimeFormat(language, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   }).format(fecha)

   return {
      dia,
      mes,
      año,
      hora
   }
}

export default getDevitDate
