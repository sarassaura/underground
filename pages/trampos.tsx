import { Heading, Text } from '@chakra-ui/react'
import Gallery from '../components/gallery'
import { textTrampos } from '../constants/text'
import { Imagine, RootObject } from '../interfaces/typings'
import blurDataURLi from '../utils/blurhash'
import Container from '../utils/flex'

function Trampos(posts: Imagine) {
  return (
    <Container>
      <Heading>{textTrampos.title}</Heading>
      <Text marginTop={3} marginBottom={8}>
        {textTrampos.phrase}
      </Text>
      <Gallery data={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const AccessKey = process.env.NEXT_PUBLIC_API_KEY_UNSPLASH
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=tattoo&client_id=${AccessKey}`,
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    }
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
