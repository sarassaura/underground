import {
  Flex,
  Button,
  useColorMode,
  ButtonGroup,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Social from './social'
import ThemeButton from './themeButton'
import Logo from '../public/logo'

function MenuComponent() {
  const { colorMode } = useColorMode()
  return (
    <Flex
      width="100%"
      alignItems="center"
      justify="space-between"
      padding={1}
      bgGradient={
        colorMode === 'dark'
          ? 'linear(to-r, pink, blue)'
          : 'linear(to-r, blue, pink)'
      }
    >
      <ButtonGroup marginStart={3}>
        <Button variant="ghost">
          <Logo />
        </Button>
      </ButtonGroup>
      <Hide below="md">
        <ButtonGroup gap="1">
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <h1>Sobre</h1>
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <h1>Trampos</h1>
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <h1>Contato</h1>
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Social />
          <ThemeButton />
        </ButtonGroup>
      </Hide>
      <Show below="md">
        <HStack spacing={0} paddingInline={3}>
          <Menu>
            <ThemeButton />
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Sobre</MenuItem>
              <MenuItem>Trampos</MenuItem>
              <MenuItem>Contato</MenuItem>
              <Divider orientation="horizontal" />
              <MenuItem display="flex" justifyContent="center" gap={5}>
                <Social />
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Show>
    </Flex>
  )
}

export default MenuComponent
