const emojis = ['💄', '🏆', '🪁', '🏀', '🍖']

const DevitInputIcons = ({ content = emojis }) => {
   return (
      <>
         {content.map((item, i) => (
            <span
               key={i}
               className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer"
            >
               {item}
            </span>
         ))}
      </>
   )
}

export default DevitInputIcons
