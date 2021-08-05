/**
 * Verifica si es del tipo de archivo que soporta la app
 * @param {string} file tipo de archivo a evauluar
 * @returns {boolean} Retorna un booleano si el tipo de archivo es soportado o no
 */
export const imgFormatSupported = file => {
   const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp'
   ]
   return formats.includes(file)
}
