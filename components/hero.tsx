import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { textHero } from '../constants/text'

function Hero() {
  return (
    <Flex
      width="100%"
      height="70vh"
      minH="20rem"
      bgColor={useColorModeValue('lightBlue', 'darkCyan')}
      align="center"
      justify="center"
      position="relative"
      as="header"
    >
      <Heading position="absolute" left="0%" top="0%" className="m-5">
        {textHero.name}
      </Heading>
      <Heading position="absolute">{textHero.slogan}</Heading>
      <Flex
        width="100%"
        height="100%"
        align="center"
        justify="center"
        bgColor={useColorModeValue('lightYellow', 'lightPurple')}
        clipPath="polygon(calc(50% + 10vw) 0%, calc(50% - 10vw) 100%, 100% 100%, 100% 0%)"
      >
        <Heading position="absolute" right="0%" bottom="0%" className="m-5">
          {textHero.brand}
        </Heading>
        <Heading>{textHero.slogan}</Heading>
      </Flex>
    </Flex>
  )
}

export default Hero
