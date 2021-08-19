/**
 * Función para mapear la colección de devits.
 * @param {object} doc Documento de Firebase para la extracción de datos
 * @returns Retorna la colección completa de devits en un objecto
 */
export const mapDevitfromFirebase = doc => {
   const data = doc.data()
   return {
      id: doc.id,
      ...data
   }
}
