import { devittStats } from 'ownFirebase/cliente'
import throwError from './throwError'

/**
 * Función que retorna un booleano, para saber si el usuario actual está o no en la lista de likes
 * @param {string} userId ID del usuario actual
 * @param {string} devitId ID del devitt
 * @returns {boolean} True o False si el usuario actual le ha dado like o no al devit actual
 */
const likeBlame = async (userId, devitId) => {
   const devitt = await devittStats(devitId).catch(throwError)
   const likesList = devitt.data().likesCount

   if (likesList.length === 0) return null
   const iLikeIt = likesList.some(item => item.userId === userId)
   return iLikeIt
}

export default likeBlame
