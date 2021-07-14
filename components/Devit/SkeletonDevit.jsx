const SkeletonDevit = () => {
   return (
      <div className="flex space-x-4 px-4 py-3">
         <div className="rounded-full bg-blue-400 h-12 w-12"></div>
         <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
               <div className="h-4 bg-blue-400 rounded"></div>
               <div className="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
         </div>
      </div>
   )
}

export default SkeletonDevit
