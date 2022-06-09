import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  chakra,
  Flex,
} from '@chakra-ui/react'
import Image from 'next/image'

interface ModalTypes {
  isOpening: boolean
  onClosing: () => void
  srcing: string
}

function ModalComponent({ isOpening, onClosing, srcing }: ModalTypes) {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'alt', 'src', 'priority'].includes(prop),
  })
  return (
    <Modal
      isOpen={isOpening}
      onClose={onClosing}
      size={['xl', '2xl', '3xl', '5xl']}
      motionPreset="slideInRight"
      isCentered
      preserveScrollBarGap
      blockScrollOnMount
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="center">Title</Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignContent="center" justify="center">
            <ChakraImage
              src={srcing}
              alt="image"
              width="640px"
              height="428px"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
