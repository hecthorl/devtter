export const imgFormatSupported = file => {
   const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp'
   ]
   return formats.includes(file)
}
