import { pusherClient } from 'services/pusher'

export const getLatesetDevits = async setTimeline => {
   const res = await fetch('/api/tres')
   const devits = await res.json()
   const devitsParsed = devits.map(doc => {
      const { _id, ...rest } = doc
      return {
         id: _id,
         ...rest
      }
   })
   setTimeline(devitsParsed)
   const channel = pusherClient.subscribe('my-chann')
   console.log(channel.name)
   channel.bind('my-event', data => {
      console.log(data)
   })
}
