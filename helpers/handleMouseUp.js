// import { useRouter } from 'next/router'

/**
 * Simula el middle-click del anchor tag.
 * @param {string} e Objeto evento
 * @param {string} id Id del devit
 */
export const handleMouseUp = (e, id) => {
   const btn = e.button
   // const { push } = useRouter()

   if (btn === 1) open(`/status/${id}`, '_blank')
   // if (btn === 0) history.pushState({}, '', `/status/${id}`)
}
