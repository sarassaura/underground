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
import { textAlert } from '../constants/text'

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
        <AlertDialogHeader>{textAlert.title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <Icon
          as={textAlert.icon}
          fontSize="7xl"
          mx="auto"
          my={3}
          color="green.300"
        />
        <AlertDialogBody my={3}>{textAlert.body}</AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert
