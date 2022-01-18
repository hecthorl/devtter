import { Client } from 'faunadb'

export default new Client({
   secret: process.env.FAUNADB_SECRET,
   domain: 'db.us.fauna.com'
})
