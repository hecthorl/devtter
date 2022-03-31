import { useRef } from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { BsImage } from 'react-icons/bs'

export default function ImgUploadBtn({ onChange }) {
   const inputRef = useRef(null)
   return (
      <>
         <input
            ref={inputRef}
            onChange={onChange}
            type="file"
            style={{ display: 'none' }}
         />
         <Box
            as="button"
            onClick={() => {
               inputRef.current.click()
            }}
         >
            <Icon color="leela.500" as={BsImage} />
         </Box>
      </>
   )
}
