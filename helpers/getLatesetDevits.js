// import { query } from 'faunadb'
import {
   Collection,
   Create,
   Documents,
   Get,
   Lambda,
   Map,
   Paginate
} from 'faunadb'
import fdbCli from './faunadb'

// const { Ref, Collection } = query

const getLatesetDevits = async () => {
   const devits = Map(
      Paginate(Documents(Collection('Devits'))),
      Lambda(i => Get(i))
   )
   // fdbCli.stream
   //    .document(devits)
   //    .on('snapshot', (data, event) => {
   //       console.log({ data, event })
   //    })
   //    .on('error', err => {
   //       console.log(err)
   //    })
   //    .start()
   const data = await fdbCli.query(devits).catch(console.log)
   // console.log({ data })
}

export default getLatesetDevits
