import {
  Flex,
  Heading,
  Text,
  chakra,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import ModalComponent from '../components/modal'
import { Imagine, RootObject } from '../interfaces/typings'
import blurDataURLi from '../utils/blurhash'

function Trampos(posts: Imagine) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      [
        'width',
        'height',
        'alt',
        'src',
        'priority',
        'placeholder',
        'blurDataURL',
        'objectFit',
      ].includes(prop),
  })
  return (
    <Flex
      width="100%"
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      paddingY={5}
    >
      <Heading>Trampos</Heading>
      <Text marginTop={3} marginBottom={8}>
        Nenhum trabalho é ruim, ruim é ter que trabalhar
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
            className="justify-center w-full inline-grid mb-2"
          >
            <span
              onClick={onOpen}
              onKeyUp={onOpen}
              role="button"
              tabIndex={index}
            >
              <ChakraImage
                src={dog.urls.thumb}
                alt={`image out ${index}`}
                width={210}
                height={(dog.height / dog.width) * 210}
                objectFit="fill"
                placeholder="blur"
                blurDataURL={dog.real_hash}
                rounded="2xl"
              />
            </span>
          </span>
        ))}
      </Box>
      <ModalComponent
        isOpening={isOpen}
        onClosing={onClose}
        titling="title"
        alting="007"
        srcing="/pai.webp"
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
  const potato: RootObject[] = []
  posts.results!.map((cat) => {
    potato.push({
      id: cat.id,
      urls: { thumb: cat.urls.thumb, regular: cat.urls.regular },
      height: cat.height,
      width: cat.width,
      real_hash: blurDataURLi(cat.blur_hash!, cat.height / cat.width, 210),
    })
  })
  delete posts.results
  posts.results = potato
  return {
    props: posts,
  }
}

export default Trampos
