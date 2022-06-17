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
import Link from 'next/link'
import Social from './social'
import ThemeButton from './themeButton'
import Logo from '../public/logo'
import { textMenu, textLogo } from '../constants/text'

function MenuComponent() {
  const { colorMode } = useColorMode()
  return (
    <Flex
      width="100%"
      alignItems="center"
      justify="space-between"
      padding={1}
      bgColor={colorMode === 'dark' ? 'darkBlue' : 'lightRed'}
      as="menu"
    >
      <Link href="/">
        <ButtonGroup marginStart={3}>
          <Button
            variant="ghost"
            className="space-x-5"
            _hover={
              colorMode === 'dark'
                ? { bg: 'whiteAlpha.200' }
                : { bg: 'darkBlack' }
            }
          >
            <Logo color="#F7F2DA" />
            <h1 className="text-stone-50">{textLogo}</h1>
          </Button>
        </ButtonGroup>
      </Link>
      <Hide below="md">
        <ButtonGroup gap="1">
          {textMenu.map((item) => (
            <Link href={`/${item.route}`} key={item.route}>
              <Button
                variant={colorMode === 'dark' ? 'solid' : 'ghost'}
                key={item.name}
              >
                <h1 className="uppercase">{item.name}</h1>
              </Button>
            </Link>
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
              {textMenu.map((item) => (
                <Link href={`/${item.route}`} key={item.route}>
                  <MenuItem className="uppercase" key={item.name}>
                    {item.name}
                  </MenuItem>
                </Link>
              ))}
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
