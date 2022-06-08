import { Button, useColorMode } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'

function ThemeButton() {
  const { toggleColorMode } = useColorMode()
  return (
    <Button
      onClick={toggleColorMode}
      marginX={2}
      data-testid="custom-element"
      title="Color Mode"
    >
      <VscColorMode data-testid="custom-element-2" className="rotate-45" />
    </Button>
  )
}

export default ThemeButton
