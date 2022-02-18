import { useRef, useState } from 'react'

// eslint-disable-next-line no-self-compare
const init = {} === {}

/**
 * Alternativa al useBoolean de chakra-UI
 * @param {boolean} initVal Por defecto el valor siempre debe ser false
 * @returns {Array<boolean, object>}
 */
const useBool = (initVal = init) => {
   const [value, setValue] = useState(initVal)

   const updateValue = useRef({
      toggle: () => setValue(oldValue => !oldValue),
      on: () => setValue(true),
      off: () => setValue(false)
   })
   return [value, updateValue.current]
}

export default useBool
