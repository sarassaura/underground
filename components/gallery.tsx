import { Box, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { Imagine, ModalProps } from '../interfaces/typings'
import ChakraImage from '../utils/image'
import ModalComponent from './modal'

function Gallery({ data }: { data: Imagine }) {
  const srcModal = useRef('/pai.webp')
  const imageName = useRef('title')
  const srcBlur = useRef('anything')
  const { isOpen, onOpen, onClose } = useDisclosure()
  function OnClickModal({
    srcModalProp,
    imageNameProp,
    srcBlurProp,
  }: ModalProps) {
    srcModal.current = srcModalProp
    srcBlur.current = srcBlurProp
    imageName.current = imageNameProp
    onOpen()
  }
  return (
    <>
      <Box
        w="fit-content"
        maxW={['480px', '450px', '650px', '900px', '1100px']}
        mx="auto"
        sx={{ columnCount: [2, 2, 3, 4, 5], columnGap: '8px' }}
      >
        {data.results!.map((dog, index) => (
          <span
            key={`key prop: ${dog.id}`}
            className="justify-center w-fit flex mb-3 break-inside-avoid"
          >
            <span
              onClick={() =>
                OnClickModal({
                  srcModalProp: dog.urls.regular,
                  imageNameProp: dog.id,
                  srcBlurProp: dog.real_hash,
                })
              }
              onKeyUp={() =>
                OnClickModal({
                  srcModalProp: dog.urls.regular,
                  imageNameProp: dog.id,
                  srcBlurProp: dog.real_hash,
                })
              }
              role="button"
              tabIndex={index}
              className="flex relative"
            >
              <ChakraImage
                src={dog.urls.thumb}
                alt={`imageout${dog.id}`}
                width={210}
                height={(dog.height / dog.width) * 210}
                placeholder="blur"
                blurDataURL={dog.real_hash}
                objectFit="fill"
                rounded="2xl"
              />
              <span className="absolute h-full w-full overimage" />
            </span>
          </span>
        ))}
      </Box>
      <ModalComponent
        isOpening={isOpen}
        onClosing={onClose}
        titling={imageName.current}
        alting={imageName.current}
        srcing={srcModal.current}
        bluring={srcBlur.current}
      />
    </>
  )
}

export default Gallery
