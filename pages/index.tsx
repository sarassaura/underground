import Head from 'next/head'
import { Button } from '@chakra-ui/react'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="invented">poo</h1>
      <Button colorScheme="teal">Button</Button>
    </div>
  )
}

export default Home
