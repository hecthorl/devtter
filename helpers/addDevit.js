export default async data => {
   const reply = await fetch('/api/tres', {
      method: 'POST',
      body: JSON.stringify(data)
   }).catch(console.log)
   const isOk = await reply.statusText
   console.log(isOk)
   // TO-DO: Manejar el error de fetch
}
