import ImageKit from 'imagekit'

const imagekit = new ImageKit({
   publicKey: 'public_Bzq8oUoOLM9KK07U2qPuw6V0LEQ=',
   privateKey: 'private_1ONm0YKPTw3NQoNeqD/1oEcvBfw=',
   urlEndpoint: 'https://ik.imagekit.io/xu5iwk94yzf'
})

export default (req, res) => {
   const token = req.query.token
   const expiration = req.query.expire || parseInt(Date.now() / 1000) + 60 * 10
   const firma = imagekit.getAuthenticationParameters(token, expiration)
   res.json(firma)
}
