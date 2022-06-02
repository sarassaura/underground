import { Flex } from '@chakra-ui/react'

interface PropsType {
  title: String
  text: String
}

function Card({ title, text }: PropsType) {
  return (
    <Flex
      direction="column"
      margin={5}
      width="100%"
      height={['25vh', '20vh', '35vh', '30vh']}
      bgColor="blueviolet"
    >
      <h1 className="text-center m-3">{title}</h1>
      <p className="p-2">{text}</p>
    </Flex>
  )
}

export default Card
