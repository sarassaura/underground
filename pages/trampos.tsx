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
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      paddingY={5}
    >
      <Heading>Trampos</Heading>
      <Text margin={5}>Nenhum trabalho é ruim, ruim é ter que trabalhar</Text>
      <Flex>
        <ChakraImage
          src="/pai.webp"
          alt="image"
          width="320px"
          height="214px"
          rounded="2xl"
        />
      </Flex>
    </Flex>
  )
}

export default Trampos
