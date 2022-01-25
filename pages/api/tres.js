export default async (req, res) => {
   await dbClient.connect()
   const devitsColl = dbClient.db().collection('Devits')

   const allDevits = await devitsColl
      .find({})
      .sort({
         createdAt: -1
      })
      .limit(5)
      .toArray()
   res.status(200).send(allDevits)
}
