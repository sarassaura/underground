import { Button, Link } from '@chakra-ui/react'
import { AiOutlineInstagram } from 'react-icons/ai'

function Social() {
  return (
    <Link href="https://www.instagram.com/" title="Instagram" isExternal>
      <Button title="instagram">
        <AiOutlineInstagram />
      </Button>
    </Link>
  )
}

export default Social
