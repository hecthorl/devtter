export const mapDevitfromFirebase = doc => {
   const data = doc.data()
   return {
      id: doc.id,
      ...data
   }
}
