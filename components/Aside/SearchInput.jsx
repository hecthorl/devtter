const SearchInput = () => {
   return (
      <div className="search_input-container">
         <input
            aria-label="Búsqueda"
            type="text"
            placeholder="Buscar en Devtter"
         />
         <div>
            <span role="figure">🔍</span>
         </div>
      </div>
   )
}

export default SearchInput
