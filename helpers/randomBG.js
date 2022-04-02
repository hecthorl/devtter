import randomNumInterval from './randomNumInterval'

export default function randomBG() {
   const colors = [
      '#ff7a00',
      '#7856ff',
      '#1d9bf0',
      '#00ba7c',
      '#f91880',
      '#ffd400',
      '#1d9bf0'
   ]
   const randNum = randomNumInterval(0, colors.length - 1)
   return colors[randNum]
}
