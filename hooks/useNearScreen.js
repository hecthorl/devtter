import { useEffect } from 'react'
import useZtndStore from 'ztndStore'

const useNearScreen = ref => {
   const show = useZtndStore(state => state.show)
   const setShow = useZtndStore(state => state.setShow)

   useEffect(() => {
      function onChange(entries) {
         const [el] = entries
         setShow(el.isIntersecting)
      }
      const observer = new IntersectionObserver(onChange, {
         rootMargin: '-6%'
      })
      observer.observe(ref.current)
      return () => {
         if (ref.current) observer.unobserve(ref.current)
      }
   }, [])

   return [show]
}

export default useNearScreen
