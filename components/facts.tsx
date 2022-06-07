import { Flex, Heading, HStack } from '@chakra-ui/react'
import {
  GiSpy,
  GiPaintBrush,
  GiPencilRuler,
  GiArmBandage,
} from 'react-icons/gi'

function Facts() {
  return (
    <HStack gap={[3, 7, 20, 40]} margin={5}>
      <Flex direction="column" justify="center" align="center">
        <GiSpy className="text-5xl" />
        <Heading fontSize="5xl">234</Heading>
        <Heading fontSize="xl">Clientes</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <GiPencilRuler className="text-5xl" />
        <Heading fontSize="5xl">1054</Heading>
        <Heading fontSize="xl">Desenhos</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <GiPaintBrush className="text-5xl" />
        <Heading fontSize="5xl">523</Heading>
        <Heading fontSize="xl">Pinturas</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <GiArmBandage className="text-5xl" />
        <Heading fontSize="5xl">132</Heading>
        <Heading fontSize="xl">Tatuagens</Heading>
      </Flex>
    </HStack>
  )
}

export default Facts
