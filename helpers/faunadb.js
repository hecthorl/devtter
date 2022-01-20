import { Client } from 'faunadb'

export default new Client({
   // secret: process.env.FAUNADB_SECRET ,
   secret: 'fnAEchopu1AAQt2m6IREDROT3gaaWa7Ht043-m9u',
   domain: 'db.us.fauna.com',
   scheme: 'https'
})
