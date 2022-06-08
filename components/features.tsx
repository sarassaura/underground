import { Stack } from '@chakra-ui/react'
import { textFeatures } from '../constants/text'
import Card from './card'

function Features() {
  const itemsName = textFeatures()
  return (
    <Stack
      width="90%"
      height="fit-content"
      justify="center"
      alignItems="stretch"
      direction={['column', 'column', 'row', 'row']}
      spacing="24px"
      py="10"
    >
      {itemsName.map((item) => (
        <Card title={item.title} text={item.text} key={item.id} />
      ))}
    </Stack>
  )
}

export default Features
