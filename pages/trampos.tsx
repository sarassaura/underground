import { Flex, Heading, Text, chakra, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import ModalComponent from '../components/modal'

function Trampos() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'alt', 'src', 'priority'].includes(prop),
  })
  return (
    <Flex
      width="100%"
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      paddingY={5}
    >
      <Heading>Trampos</Heading>
      <Text margin={5}>Nenhum trabalho é ruim, ruim é ter que trabalhar</Text>
      <Flex>
        <>
          <span onClick={onOpen} onKeyUp={onOpen} role="button" tabIndex={0}>
            <ChakraImage
              src="/pai.webp"
              alt="image"
              width="320px"
              height="214px"
              rounded="2xl"
            />
          </span>
          <ModalComponent
            isOpening={isOpen}
            onClosing={onClose}
            titling="title"
            alting="007"
            srcing="/pai.webp"
          />
        </>
      </Flex>
    </Flex>
  )
}

export default Trampos
