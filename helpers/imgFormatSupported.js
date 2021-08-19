/**
 * Verifica si es del tipo de archivo que soporta la app
 * @param {string} ext tipo de archivo a evauluar
 * @returns {boolean} Retorna un booleano si el tipo de archivo es soportado o no
 */
export const imgFormatSupported = ext => {
   const formats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
   return formats.includes(ext)
}
