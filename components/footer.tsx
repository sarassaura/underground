import { Flex, useColorModeValue } from '@chakra-ui/react'
import { textFoot } from '../constants/text'

function Footer() {
  const textFooter = textFoot()
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
      {textFooter}
    </Flex>
  )
}

export default Footer
