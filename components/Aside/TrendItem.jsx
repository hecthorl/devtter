import { Flex, Icon, Text } from '@chakra-ui/react'

const TrendItem = () => (
   <Flex
      borderBottom="1px"
      borderBottomColor="#38444d"
      textColor="rgba(255 255 255 / 50%)"
      direction="column"
      px="16px"
      py="12px"
   >
      <Flex align="center" justify="space-between">
         <Text fontSize="sm">Tendencias en Perukistan</Text>
         <Icon />
      </Flex>
      <Text fontSize="md" fontWeight="bold" textColor="white">
         TEMA
      </Text>
      <Text fontSize="sm">4k Devits xddd</Text>
   </Flex>
)
export default TrendItem
