/**
 * Simula el middle-click del anchor tag.
 * @param {string} e Objeto evento
 * @param {string} id Id del devit
 */
export const handleMouseUp = (e, id) => {
   const btn = e.button

   if (btn === 1) open(`/status/${id}`, '_blank')
}
