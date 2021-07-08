import { useContext } from 'react'
import { Context } from 'context/Context'

const useGlobalContext = () => useContext(Context)

export default useGlobalContext
