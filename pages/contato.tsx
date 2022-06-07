import { Flex, Heading, Text } from '@chakra-ui/react'

function Contato() {
  return (
    <Flex
      width="100%"
      height="90vh"
      minH="20rem"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading>Contato</Heading>
      <Text margin={5}>Se quiser saber como me chamar, me chame de deuso</Text>
    </Flex>
  )
}

export default Contato
