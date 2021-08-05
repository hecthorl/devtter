const CommentBtn = () => {
   return (
      <button
         onClick={e => e.stopPropagation()}
         className="focus:outline-none group"
      >
         <span className="relative pr-[10px]">
            <span className="absolute bg-brand transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-7px] left-[-9px]"></span>
            🌸
         </span>
      </button>
   )
}

export default CommentBtn

// <span className="group-hover:text-brand transition-colors">10</span>
