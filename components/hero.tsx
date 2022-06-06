import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'

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
      clipPath="polygon(55% 0%, 45% 100%, 100% 100%, 100% 0%)"
    >
      <Heading>hero</Heading>
    </Flex>
  )
}

export default Hero
