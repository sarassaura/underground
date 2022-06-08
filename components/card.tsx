import { Flex, useColorModeValue } from '@chakra-ui/react'

interface PropsType {
  title: String
  text: String
}

function Card({ title, text }: PropsType) {
  return (
    <Flex
      direction="column"
      width="100%"
      bgColor={useColorModeValue('lightGreen', 'darkPurple')}
      shadow="md"
      borderWidth="3px 0px 0px 0px"
      borderColor={useColorModeValue('#141414', 'antiquewhite')}
      borderRadius="md"
    >
      <h2 className="text-center m-3 text-2xl">{title}</h2>
      <p className="p-2 mt-2">{text}</p>
    </Flex>
  )
}

export default Card
