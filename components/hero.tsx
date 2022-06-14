import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { textHero } from '../constants/text'

function Hero() {
  const itemText = textHero()
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
        {itemText.name}
      </Heading>
      <Heading position="absolute">{itemText.slogan}</Heading>
      <Flex
        width="100%"
        height="100%"
        align="center"
        justify="center"
        bgColor={useColorModeValue('lightYellow', 'lightPurple')}
        clipPath="polygon(calc(50% + 10vw) 0%, calc(50% - 10vw) 100%, 100% 100%, 100% 0%)"
      >
        <Heading position="absolute" right="0%" bottom="0%" className="m-5">
          {itemText.brand}
        </Heading>
        <Heading>{itemText.slogan}</Heading>
      </Flex>
    </Flex>
  )
}

export default Hero
