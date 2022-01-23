import PusherCli from 'pusher-js'
import Pusher from 'pusher'

const appkey = process.env.NEXT_PUBLIC_APP_KEY_PUSHER
const pusherKey = process.env.PUSHER_KEY
const pusherSecret = process.env.PUSHER_SECRET
const pusherAppId = process.env.PUSHER_APP_ID

export const pusherClient = new PusherCli(appkey, {
   cluster: 'us2'
})

export const pusher = new Pusher({
   appId: pusherAppId,
   key: pusherKey,
   secret: pusherSecret,
   cluster: 'us2',
   useTLS: true
})
