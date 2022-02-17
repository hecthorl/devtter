/**
 * Retorna true si la extensión del archivo esta en la lista (array)
 * @param {string} ext Extensión del archivo a evaluar
 * @returns {boolean}
 */
export default function imgFormatSupported(ext) {
   const formats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
   return formats.includes(ext)
}
