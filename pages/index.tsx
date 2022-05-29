import Head from 'next/head'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen">
        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          className="h-screen"
        />
        <SkeletonCircle size="16" />
        <SkeletonText mt="7" noOfLines={10} spacing="3" />
      </div>
    </div>
  )
}

export default Home
