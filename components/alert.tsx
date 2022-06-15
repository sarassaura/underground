import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Icon,
} from '@chakra-ui/react'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function Alert({ open, close }: { open: boolean; close: () => void }) {
  const cancelRef = React.useRef(null)
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={close}
      isOpen={open}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Enviado com sucesso!</AlertDialogHeader>
        <AlertDialogCloseButton />
        <Icon
          as={BsFillCheckCircleFill}
          fontSize="7xl"
          mx="auto"
          my={3}
          color="green.300"
        />
        <AlertDialogBody my={3}>
          Recebemos sua mensagem e logo responderemos!
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert
