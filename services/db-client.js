import { MongoClient } from 'mongodb'

export default new MongoClient(process.env.MONGO_URI)
