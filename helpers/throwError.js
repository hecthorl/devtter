/**
 * Manejador de errores v.1
 * @param {string} err Mensaje de error
 * @returns Tira un error y su mensaje
 */
const throwError = err => {
   return new Error(err)
}

export default throwError
