import { v2 as cloudinary } from 'cloudinary'

export default (req, res) => {
   cloudinary.config({
      api_key: process.env.Cloudinary_API_KEY,
      api_secret: process.env.Cloudinary_API_SECRET,
      secure: true
   })

   const paramsToSign = {
      timestamp: new Date().getTime(),
      folder: 'Devtter',
      colors: true,
      upload_preset: 'punk'
   }

   const apiSecret = cloudinary.config().api_secret
   const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret)

   res.json({
      timestamp: paramsToSign.timestamp,
      signature,
      api_key: cloudinary.config().api_key,
      upload_preset: paramsToSign.upload_preset
   })
}
