const CommentBtn = () => {
   return (
      <button className="focus:outline-none group">
         <span className="relative pr-[10px]">
            <span className="absolute bg-[#1da1d4] transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-7px] left-[-9px]"></span>
            🌸
         </span>
         <span className="group-hover:text-[#1da1d4] transition-colors">
            10
         </span>
      </button>
   )
}

export default CommentBtn
