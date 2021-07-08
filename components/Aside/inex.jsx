const Aside = () => {
   return (
      <div className="hidden xl:block h-full pt-1 pl-5 w-350">
         <div className="">
            <div className="fixed top-0 py-1 pb-2 bg-primary">
               <input
                  type="text"
                  className="py-2 pl-14 rounded-full bg-secondary w-350 relative"
                  placeholder="Buscar en Devtter"
               />
               <div className="absolute -top-1 pt-1 left-4 text-xl h-full flex items-center">
                  <span role="figure">🔍</span>
               </div>
            </div>
            <div className="mt-12">
               <h4>Tendencias para ti</h4>
               <div>
                  <div>❤</div>
                  <div>💙</div>
                  <div>💗</div>
                  <div>🖤</div>
                  <div>💚</div>
                  <div>🧡</div>
               </div>
            </div>
            <div>
               <h4>A quién seguir</h4>
               <div>
                  <div>🖤</div>
                  <div>💚</div>
                  <div>🧡</div>
               </div>
            </div>
            <footer>
               <p>© 2021 Devtter, Inc.</p>
            </footer>
         </div>
      </div>
   )
}

export default Aside
