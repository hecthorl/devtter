import useImageColor from 'use-image-color'

const useDominatColor = imgUrl => {
   const { colors } = useImageColor(imgUrl, {
      cors: true,
      format: 'rgb',
      windowSize: 80
   })
   return colors ? colors[0].toString() : '0,0,0'
}

export default useDominatColor
