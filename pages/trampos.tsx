import { Flex, Heading, Text, useDisclosure, Box } from '@chakra-ui/react'
import { useRef } from 'react'
import ModalComponent from '../components/modal'
import { textTrampos } from '../constants/text'
import { Imagine, RootObject, ModalProps } from '../interfaces/typings'
import blurDataURLi from '../utils/blurhash'
import ImageComponent from '../utils/image'

function Trampos(posts: Imagine) {
  const srcModal = useRef('/pai.webp')
  const imageName = useRef('title')
  const srcBlur = useRef('anything')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ChakraImage = ImageComponent()
  const textGeneric = textTrampos()
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
    <Flex
      width="100%"
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      paddingY={5}
    >
      <Heading>{textGeneric.title}</Heading>
      <Text marginTop={3} marginBottom={8}>
        {textGeneric.phrase}
      </Text>
      <Box
        w="fit-content"
        maxW={['480px', '450px', '650px', '900px', '1100px']}
        mx="auto"
        sx={{ columnCount: [2, 2, 3, 4, 5], columnGap: '8px' }}
      >
        {posts.results!.map((dog, index) => (
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
    </Flex>
  )
}

export async function getStaticProps() {
  const AccessKey = process.env.NEXT_PUBLIC_API_KEY_UNSPLASH
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=tattoo&client_id=${AccessKey}`
  )
  const posts: Imagine = await res.json()
  const tempPosts: RootObject[] = []
  posts.results!.map((item) => {
    tempPosts.push({
      id: item.id,
      urls: { thumb: item.urls.thumb, regular: item.urls.regular },
      height: item.height,
      width: item.width,
      real_hash: blurDataURLi(item.blur_hash!, item.height / item.width, 210),
    })
  })
  delete posts.results
  posts.results = tempPosts
  return {
    props: posts,
  }
}

export default Trampos
