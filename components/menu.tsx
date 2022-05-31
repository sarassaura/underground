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
} from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiTwitter } from 'react-icons/fi'
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'

function MenuComponent() {
  const { colorMode, toggleColorMode } = useColorMode()
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
        <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
          <svg
            id="SVGRoot"
            version="1.1"
            viewBox="0 0 13.536 13.536"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
          >
            <g transform="translate(-1.2322 -1.2322)">
              <path
                d="m3 3 10 10"
                fill="#3aad00"
                stroke="#ffffff"
                strokeWidth="5"
              />
            </g>
          </svg>
        </Button>
      </ButtonGroup>
      <Show above="md">
        <ButtonGroup gap="1">
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <h1>Home</h1>
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <h1>Profile</h1>
          </Button>
        </ButtonGroup>
        <ButtonGroup marginEnd={3}>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <AiOutlineInstagram />
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <AiOutlineYoutube />
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <AiOutlineFacebook />
          </Button>
          <Button variant={colorMode === 'dark' ? 'solid' : 'ghost'}>
            <FiTwitter />
          </Button>
          <Button
            variant={colorMode === 'dark' ? 'outline' : 'ghost'}
            colorScheme={colorMode === 'dark' ? 'pink' : 'blue'}
            onClick={toggleColorMode}
          >
            <VscColorMode />
          </Button>
        </ButtonGroup>
      </Show>
      <Show below="md">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
            marginEnd={3}
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </Flex>
  )
}

export default MenuComponent
