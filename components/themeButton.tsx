import { Button, useColorMode } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'

function ThemeButton() {
  const { toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} marginX={2}>
      <VscColorMode />
    </Button>
  )
}

export default ThemeButton
