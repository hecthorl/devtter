import useUser from 'hooks/useUser'
import OnImage from './OnImage'
import WordsCounter from './WordsCounter'
import useTextarea from 'hooks/useTextarea'
import DevitInputBtn from './DevitInputBtn'
import DevitInputIcons from './DevitInputIcons'
import DevitInputTextarea from './DevitInputTextarea'
import useGlobalContext from 'hooks/useGlobalContext'

const DevitInput = () => {
   const { imgURL, setImgURL } = useTextarea()
   const { message, setMessage } = useGlobalContext()
   const user = useUser()

   return (
      <>
         <div className="px-4 py-2 flex gap-x-2">
            <div className="ml-2 w-14 rounded-full overflow-hidden h-[fit-content]">
               {user?.avatar ? (
                  <img loading="lazy" src={user.avatar} alt="user avatar" />
               ) : (
                  <div className="rounded-full bg-secondary h-10 w-10"></div>
               )}
            </div>
            <div className="w-full">
               <DevitInputTextarea setMessage={setMessage} message={message} />
               <div className="flex justify-between items-center pt-2 border-t border-secondary">
                  <div className="flex text-lg gap-x-2">
                     <DevitInputIcons />
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                     <WordsCounter words={message.length} maxValue={280} />
                     <DevitInputBtn message={message} imgURL={imgURL} />
                  </div>
               </div>
               <OnImage imgURL={imgURL} setImgURL={setImgURL} />
            </div>
         </div>
      </>
   )
}

export default DevitInput
