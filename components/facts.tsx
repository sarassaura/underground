import { Flex, Heading, Stack } from '@chakra-ui/react'
import {
  GiSpy,
  GiPaintBrush,
  GiPencilRuler,
  GiArmBandage,
} from 'react-icons/gi'

function Facts() {
  return (
    <Stack marginY={5} direction="row" width="100%">
      <Flex direction="column" justify="center" align="center" width="100%">
        <GiSpy className="text-5xl" />
        <Heading fontSize="5xl">234</Heading>
        <Heading fontSize="xl">Clientes</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" width="100%">
        <GiPencilRuler className="text-5xl" />
        <Heading fontSize="5xl">1054</Heading>
        <Heading fontSize="xl">Desenhos</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" width="100%">
        <GiPaintBrush className="text-5xl" />
        <Heading fontSize="5xl">523</Heading>
        <Heading fontSize="xl">Pinturas</Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" width="100%">
        <GiArmBandage className="text-5xl" />
        <Heading fontSize="5xl">132</Heading>
        <Heading fontSize="xl">Tatuagens</Heading>
      </Flex>
    </Stack>
  )
}

export default Facts
