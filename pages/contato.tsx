import { Flex, Heading, Text } from '@chakra-ui/react'
import Contact from '../components/contact'
import Form from '../components/form'
import { textContato } from '../constants/text'
import Container from '../utils/flex'

function Contato() {
  return (
    <Container>
      <Heading>{textContato.title}</Heading>
      <Text marginY={5}>{textContato.phrase}</Text>
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
            {textContato.subtitle}
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
          <Form />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Contato
