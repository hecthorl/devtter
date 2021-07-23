import useSendDevit from 'hooks/useSendDevit'

const DevitInputBtn = ({ message, setMessage, file }) => {
   const { handleSubmit, isButtonDisable } = useSendDevit({
      message,
      setMessage,
      file
   })
   return (
      <button
         onClick={handleSubmit}
         disabled={isButtonDisable}
         className="py-2 px-3 bg-green-500 rounded-full disabled:bg-opacity-40 text-white font-semibold disabled:text-opacity-40 disabled:cursor-default"
      >
         Devitterar
      </button>
   )
}

export default DevitInputBtn
