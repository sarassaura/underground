import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

function ImageComponent() {
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      [
        'src',
        'alt',
        'width',
        'height',
        'placeholder',
        'blurDataURL',
        'objectFit',
        'layout',
      ].includes(prop),
  })
  return ChakraImage
}

export default ImageComponent
