import { Flex, Button, useColorMode, ButtonGroup } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex alignItems="center" justify="space-around" gap="2">
      <ButtonGroup gap="2">
        <Button
          variant={colorMode === 'dark' ? 'solid' : 'ghost'}
          onClick={toggleColorMode}
        >
          <VscColorMode />
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="2">
        <Button
          variant={colorMode === 'dark' ? 'solid' : 'ghost'}
          onClick={toggleColorMode}
        >
          <VscColorMode />
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="2">
        <Button
          variant={colorMode === 'dark' ? 'outline' : 'ghost'}
          colorScheme={colorMode === 'dark' ? 'pink' : 'blue'}
          onClick={toggleColorMode}
        >
          <VscColorMode />
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Menu
