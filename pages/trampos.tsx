import { Flex, Heading, Text, chakra } from '@chakra-ui/react'
import Image from 'next/image'

function Trampos() {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'alt', 'src'].includes(prop),
  })
  return (
    <Flex
      width="100%"
      height="90vh"
      minH="20rem"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading>Trampos</Heading>
      <Text margin={5}>Nenhum trabalho é ruim, ruim é ter que trabalhar</Text>
      <ChakraImage
        src="/pai.webp"
        alt="image"
        width="320px"
        height="214px"
        rounded="2xl"
      />
    </Flex>
  )
}

export default Trampos
