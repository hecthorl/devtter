/**
 * @param {Array} list Lista conocida de elementos
 * @param {Array} list2 Lista desconocida para comparar contra la primera
 * @returns {Boolean}
 */
export default function modalTrigger(list, list2) {
   if (!Array.isArray(list) || !Array.isArray(list2)) {
      const strFy = arg => JSON.stringify(arg)
      throw Error(
         `Required values list and list2, instead got list:${strFy(
            list
         )}, list2:${strFy(list2)}`
      )
   }

   const toCompare = [...new Set(list2)]
   const result = []

   for (let i = 0; list.length > i; i++) {
      const items = toCompare.includes(list[i])
      result.push(items)
   }
   return result.some(item => item)
}
