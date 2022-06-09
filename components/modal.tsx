import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface ModalTypes {
  isOpening: boolean
  onClosing: () => void
}

function ModalComponent({ isOpening, onClosing }: ModalTypes) {
  return (
    <Modal
      isOpen={isOpening}
      onClose={onClosing}
      preserveScrollBarGap
      blockScrollOnMount
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>nothingness</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
