import { Flex, Heading, Stack, Icon } from '@chakra-ui/react'
import { textFacts } from '../constants/text'

function Facts() {
  const itemName = textFacts()
  return (
    <Stack marginY={5} direction="row" width="100%">
      {itemName.map((item) => (
        <Flex
          direction="column"
          justify="center"
          align="center"
          width="100%"
          key={item.name}
        >
          <Icon as={item.icon} fontSize={['6xl', '6xl', '6xl', '7xl']} />
          <Heading fontSize={['4xl', '5xl', '5xl', '5xl']}>
            {item.number}
          </Heading>
          <Heading fontSize={['lg', 'xl', 'xl', 'xl']}>{item.name}</Heading>
        </Flex>
      ))}
    </Stack>
  )
}

export default Facts
