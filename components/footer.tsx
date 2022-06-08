import { Flex, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex
      as="footer"
      width="100%"
      minH="3rem"
      justifyContent="center"
      align="center"
      bgColor={useColorModeValue('lightRed', 'darkBlue')}
    >
      @It&apos;s me!
    </Flex>
  )
}

export default Footer
