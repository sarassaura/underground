import { Flex, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex
      as="footer"
      width="100%"
      height="10vh"
      minH="3rem"
      justifyContent="center"
      align="center"
      bgColor={useColorModeValue('#aa2222', '#4501cc')}
    >
      @It&apos;s me!
    </Flex>
  )
}

export default Footer
