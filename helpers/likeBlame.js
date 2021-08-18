import { devittStats } from 'firebase/cliente'
import throwError from './throwError'

const likeBlame = async (userId, devitId) => {
   const devitt = await devittStats(devitId).catch(throwError)
   const likesList = devitt.data().likesCount

   if (likesList.length === 0) return null
   const iLikeIt = likesList.some(item => item.userId === userId)
   return iLikeIt
}

export default likeBlame
