import { FiSettings } from 'react-icons/fi'
const TrendsItem = () => {
   return (
      <div className="px-4 py-2 cursor-pointer">
         <div className="text-sm font-normal text-white text-opacity-40">
            Tendencias en blabla
         </div>
         <div className="text-base">💙</div>
         <div className="text-sm font-normal text-white text-opacity-40">
            Número de Devitts
         </div>
      </div>
   )
}
//
const FollowersItem = ({ img, content }) => {
   return (
      <div className="flex justify-between w-full items-center px-4 py-3 border-b border-secondary">
         <div className="flex">
            <img
               src={img}
               alt={img}
               className="h-12 w-12 rounded-full overflow-hidden"
            />
            <p className="flex flex-col text-base justify-center ml-2">
               <span className="hover:underline cursor-pointer">{content}</span>
               <span className="text-white text-opacity-30 font-normal">
                  @{content}
               </span>
            </p>
         </div>
         <button className="text-base px-4 font-semibold py-1 rounded-full text-green-500 border border-green-500 bg-green-500 transition-colors bg-opacity-0 hover:bg-opacity-10">
            Seguir
         </button>
      </div>
   )
}

const Aside = () => {
   return (
      <aside className="hidden xl:block h-1075 pt-1 ml-7 sticky -top-60 text-xl">
         <div className="">
            <div className="fixed top-0 py-1 pb-2 bg-primary">
               <input
                  type="text"
                  className="py-2 pl-14 rounded-full bg-tertiary w-350 relative"
                  placeholder="Buscar en Devtter"
               />
               <div className="absolute -top-1 pt-1 left-4 text-xl h-full flex items-center">
                  <span role="figure">🔍</span>
               </div>
            </div>
            <div className="mt-16 rounded-2xl bg-tertiary flex flex-col py-2 font-bold w-350">
               <div className="flex justify-between border-b border-secondary px-4 py-2">
                  <h2>Tendencias para ti</h2>
                  <span role="button" className="text-green-500 cursor-pointer">
                     <FiSettings className="pointer-events-none" />
                  </span>
               </div>
               <div className="divide-y divide-secondary">
                  <TrendsItem />
                  <TrendsItem />
                  <TrendsItem />
                  <TrendsItem />
                  <TrendsItem />
                  <div className="px-4 py-2 text-green-500 text-base font-normal">
                     Mostrar más
                  </div>
               </div>
            </div>
            <div className="rounded-2xl bg-tertiary flex flex-col py-2 font-bold w-ful mt-6">
               <h4 className="px-4 py-2 border-b border-secondary">
                  A quién Seguir
               </h4>
               <div className="text-sm break-words">
                  <FollowersItem
                     img="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                     content="ReactJS"
                  />
                  <FollowersItem
                     img="https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
                     content="Dan"
                  />
                  <div className="px-4 py-2 text-green-500 text-base font-normal">
                     Mostrar más
                  </div>
               </div>
            </div>
            <div className="w-full h-1 border-b border-secondary my-2 border-opacity-30"></div>
            <footer className="text-center text-sm text-white text-opacity-30 font-normal">
               <p>© 2021 Devtter, Inc.</p>
            </footer>
         </div>
      </aside>
   )
}

export default Aside
