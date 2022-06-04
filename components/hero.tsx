import { Flex, useColorModeValue } from '@chakra-ui/react'

function Hero() {
  return (
    <Flex
      width="100%"
      height="70vh"
      minH="20rem"
      bgColor={useColorModeValue('lightBlue', 'darkCyan')}
      justify="center"
      align="center"
      as="header"
    >
      <p>hero</p>
    </Flex>
  )
}

export default Hero
