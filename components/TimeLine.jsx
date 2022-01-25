import Devit from 'components/Devit'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { mapDevitfromFirebase } from 'helpers/devitsFromFirestore'
import useWindowSize from 'hooks/useWindowSize'
import { useEffect, useState } from 'react'
import { db } from 'services/firebaseClient'
import Avatar from './Avatar'
import DevitInput from './DevitInput'

const TimeLine = () => {
   const [timeline, setTimeline] = useState([])
   const { width } = useWindowSize()

   useEffect(() => {
      const queryDevits = query(
         collection(db, 'devits'),
         orderBy('createdAt', 'desc')
      )
      const unSubscribe = onSnapshot(queryDevits, querySnapshot => {
         const newDevits = querySnapshot.docs.map(mapDevitfromFirebase)
         setTimeline(newDevits)
      })
      return () => unSubscribe()
   }, [])

   return (
      <main className="timeline-container">
         <div className="timeline-heading">
            <div className="timeline-heading__avatar">
               <Avatar />
            </div>
            <span className="timeline-heading__title">Inicio</span>
            <span role="figure" aria-hidden className="text-lg">
               ✨
            </span>
         </div>
         {!(width <= 500) && (
            <>
               <DevitInput />
               <div className="timeline__separator"></div>
            </>
         )}
         {timeline.length !== 0
            ? timeline.map(item => {
                 const {
                    avatar,
                    img,
                    content,
                    username,
                    id,
                    userId,
                    createdAt,
                    likesCount
                 } = item
                 return (
                    <Devit
                       key={id}
                       img={img}
                       avatar={avatar}
                       content={content}
                       username={username}
                       userId={userId}
                       createdAt={createdAt}
                       likesCount={likesCount}
                       id={id}
                    />
                 )
              })
            : [...Array(8).keys()].map((_, i) => <SkeletonDevit key={i} />)}
      </main>
   )
}

export default TimeLine
