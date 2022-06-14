import {
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Button,
  Textarea,
} from '@chakra-ui/react'
import Contact from '../components/contact'
import { textContato } from '../constants/text'

function Contato() {
  const textGenerics = textContato()
  return (
    <Flex
      width="100%"
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      paddingY={5}
    >
      <Heading>{textGenerics.title}</Heading>
      <Text marginY={5}>{textGenerics.phrase}</Text>
      <Flex
        width={['90%', '90%', '90%', '80%']}
        minH="fit-content"
        direction={['column', 'column', 'row', 'row']}
      >
        <Flex
          width={['100%', '100%', '50%', '50%']}
          justifyContent="center"
          alignItems="center"
          direction="column"
          marginY={[4, 4, 0, 0]}
        >
          <Heading fontSize="2xl" marginBottom={3}>
            {textGenerics.subtitle}
          </Heading>
          <Contact />
        </Flex>
        <Flex
          width={['100%', '100%', '50%', '50%']}
          direction="column"
          height="100%"
          alignItems="center"
          justifyContent="center"
          marginTop={3}
        >
          <Stack spacing={4}>
            <Input
              placeholder="Nome"
              variant="flushed"
              _placeholder={{ opacity: 0.7, color: 'inherit' }}
              isRequired
            />
            <Input
              placeholder="Email"
              variant="flushed"
              _placeholder={{ opacity: 0.7, color: 'inherit' }}
              isRequired
            />
            <Input
              type="tel"
              placeholder="Telefone"
              variant="flushed"
              _placeholder={{ opacity: 0.7, color: 'inherit' }}
              isRequired
            />
            <Textarea
              placeholder="Escreva pedido aqui"
              resize="vertical"
              _placeholder={{ opacity: 0.7, color: 'inherit' }}
              variant="flushed"
              isRequired
            />
            <Button colorScheme="blue">
              <h1>Enviar</h1>
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contato
