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
      shrink={0}
    >
      @It&apos;s me!
    </Flex>
  )
}

export default Footer
