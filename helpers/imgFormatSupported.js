const imgFormatSupported = ext => {
   const formats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
   return formats.includes(ext)
}

export default imgFormatSupported
