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
  const itemName = ['SOBRE', 'TRAMPOS', 'CONTATO']
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
          {itemName.map((item) => (
            <Button
              variant={colorMode === 'dark' ? 'solid' : 'ghost'}
              key={item}
            >
              <h1>{item}</h1>
            </Button>
          ))}
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
              <MenuItem>SOBRE</MenuItem>
              <MenuItem>TRAMPOS</MenuItem>
              <MenuItem>CONTATO</MenuItem>
              <Divider orientation="horizontal" />
              <Flex justifyContent="center" my={2} gap={5}>
                <Social />
              </Flex>
            </MenuList>
          </Menu>
        </HStack>
      </Show>
    </Flex>
  )
}

export default MenuComponent
