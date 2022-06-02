import { Flex } from '@chakra-ui/react'
import Card from './card'

function Features() {
  const itemsName = [
    {
      id: 0,
      title: 'Empreendedor',
      text: 'Comecei minha empresa em minha garagem e só estou começando',
    },
    {
      id: 1,
      title: 'Visionário',
      text: 'Meu dinheiro vira dois e cada um vira três e assim por diante',
    },
    {
      id: 2,
      title: 'Expert',
      text: 'Mais de 20 anos de experiência na faculdade da vida com amor',
    },
  ]
  return (
    <Flex width="90%" bgColor="blueviolet" justify="center" align="center">
      {itemsName.map((item) => (
        <Card title={item.title} text={item.text} key={item.id} />
      ))}
    </Flex>
  )
}

export default Features
