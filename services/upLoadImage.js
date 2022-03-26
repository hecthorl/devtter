/**
 *
 * @param {File} file
 * @returns {Promise<object>}
 */
const upLoadImage = async file => {
   const formData = new FormData()
   const cloudinaryURI = process.env.NEXT_PUBLIC_CloudinaryURI
   const cldCredentialsURI = process.env.NEXT_PUBLIC_CredentialsURI

   const signatureRes = await fetch(cldCredentialsURI).catch(console.error)
   const signatureData = await signatureRes.json()

   formData.append('file', file)
   formData.append('api_key', signatureData.api_key)
   formData.append('timestamp', signatureData.timestamp)
   formData.append('signature', signatureData.signature)
   formData.append('folder', 'Devtter')
   formData.append('colors', true)
   formData.append('upload_preset', signatureData.upload_preset)

   const res = await fetch(cloudinaryURI, {
      method: 'POST',
      body: formData
   })

   return await res.json()
}

export default upLoadImage
