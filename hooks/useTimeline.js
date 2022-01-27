import { useEffect, useState } from 'react'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from 'services/firebaseClient'

const useTimeline = () => {
   const [timeline, setTimeline] = useState([])

   useEffect(() => {
      const queryDevits = query(
         collection(db, 'devits'),
         orderBy('createdAt', 'desc')
      )
      const unSubscribe = onSnapshot(queryDevits, querySnapshot => {
         const newDevits = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
         }))
         setTimeline(newDevits)
      })

      return () => unSubscribe()
   }, [])

   return timeline
}

export default useTimeline
