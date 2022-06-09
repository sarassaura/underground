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
  titling: string
  alting: string
}

function ModalComponent({
  isOpening,
  onClosing,
  srcing,
  titling,
  alting,
}: ModalTypes) {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      [
        'width',
        'height',
        'alt',
        'src',
        'priority',
        'layout',
        'objectFit',
      ].includes(prop),
  })
  return (
    <Modal
      isOpen={isOpening}
      onClose={onClosing}
      size={['xl', '2xl', '3xl', '5xl']}
      motionPreset="scale"
      preserveScrollBarGap
      blockScrollOnMount
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="center">{titling}</Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingX={0}>
          <Flex
            alignContent="center"
            justify="center"
            width="100%"
            height="69vh"
            position="relative"
          >
            <ChakraImage
              src={srcing}
              alt={`image ${alting}`}
              key={`key ${alting}`}
              id={`id ${alting}`}
              layout="fill"
              objectFit="contain"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
