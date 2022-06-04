import { Stack } from '@chakra-ui/react'
import Card from './card'

function Features() {
  const itemsName = [
    {
      id: 0,
      title: 'Empreendedor',
      text: 'Comecei minha start-up em minha garagem, igualzinho Steve Jobs, e a minha jornada ainda está só começando',
    },
    {
      id: 1,
      title: 'Visionário',
      text: 'Faço o meu dinheiro virar dois dinheiros e cada um deles vira três e assim por diante, e isso não tem nada a ver com pirâmide',
    },
    {
      id: 2,
      title: 'Expert',
      text: 'Mais de 20 anos de experiência na faculdade da vida, compre o curso de auto-ajuda e saiba mais (não é coach)',
    },
  ]
  return (
    <Stack
      width="90%"
      justify="center"
      align="center"
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
