import Head from 'next/head'

const Profile = () => {
   return (
      <>
         <Head>
            <title>Profile</title>
         </Head>
         <div className="w-full">
            <div className="bg-lime-500 w-full h-[200px]"></div>
            <div className="flex flex-col w-full h-full pt-3 p-4">
               <div className="w-full flex justify-between mb-5">
                  <div className="w-[25%] relative">
                     <div className="absolute bg-primary rounded-full -top-[90px] p-1 h-[145.5px]  w-[145.5px]">
                        <div className="bg-red-600 rounded-full w-full h-full"></div>
                     </div>
                  </div>
                  <div>
                     <button className="text-white text-base px-4 border border-white rounded-full py-1">
                        Editar Perfil
                     </button>
                  </div>
               </div>
               <div className="mt-1 mb-3">
                  <div className="text-xl font-bold text-white">Nombre</div>
                  <div className="text-white text-opacity-50">username</div>
               </div>
               <div className="mb-3">°°</div>
               <div className="mb-3 flex">
                  <div>Ubicación</div>
                  <div>sitio web</div>
                  <div>Se unió en julio de 2011</div>
               </div>
               <div className="">25 followers 5 siguiendo</div>
            </div>
            <nav className="flex">
               <div>ddd</div>
               <div>ddd</div>
               <div>ddd</div>
               <div>ddd</div>
            </nav>
         </div>
      </>
   )
}

export default Profile
