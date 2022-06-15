import { Icon, Link, useColorModeValue } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'

function Whatsapp() {
  return (
    <Link href="https://wa.me/5511990839227" title="Whatsapp" isExternal>
      <Icon
        as={BsWhatsapp}
        position="fixed"
        fontSize="6xl"
        bottom={0}
        right={0}
        bgColor={useColorModeValue('#30E376', '#25D366')}
        borderRadius="full"
        zIndex="popover"
        margin={5}
        padding="7px"
      />
    </Link>
  )
}

export default Whatsapp
