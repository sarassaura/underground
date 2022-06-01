import { Button } from '@chakra-ui/react'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

function Social() {
  return (
    <>
      <Button>
        <AiOutlineInstagram />
      </Button>
      <Button>
        <AiOutlineLinkedin />
      </Button>
    </>
  )
}

export default Social
