import {
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Button,
  Textarea,
} from '@chakra-ui/react'

function Contato() {
  return (
    <Flex
      width="100%"
      height="90vh"
      minH={['40rem', '40rem', '30rem', '30rem']}
      maxH={['40rem', '40rem', '60rem', '60rem']}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading>Contato</Heading>
      <Text margin={5}>Se quiser saber como me chamar, me chame de deuso</Text>
      <Flex
        width="70%"
        height=""
        direction={['column', 'column', 'row', 'row']}
      >
        <Flex
          width={['100%', '100%', '50%', '50%']}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Heading fontSize="2xl" marginBottom={3}>
            Chama
          </Heading>
          <Flex direction="column">
            <p>Endereço: Rua d tal</p>
            <p>Telefone: +55 11 99123-4563</p>
            <p>Whatsapp: +55 11 99874-4619</p>
            <p>E-mail: eumim@gmail.com</p>
          </Flex>
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
