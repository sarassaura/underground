import { Flex, useColorModeValue } from '@chakra-ui/react'
import { textFoot } from '../constants/text'

function Footer() {
  return (
    <Flex
      as="footer"
      width="100%"
      minH="3rem"
      justifyContent="center"
      align="center"
      bgColor={useColorModeValue('lightRed', 'darkBlue')}
      shrink={0}
    >
      {textFoot}
    </Flex>
  )
}

export default Footer
