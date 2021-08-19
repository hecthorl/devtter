import { useContext } from 'react'
import { Context } from 'context/Context'

/**
 * Hook para devolver el contexto global
 * @returns {import('react').ReactElement} Contexto global
 */
const useGlobalContext = () => useContext(Context)

export default useGlobalContext
