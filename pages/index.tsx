import Head from 'next/head'
import { Button, useColorMode } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ok Tesxt</h1>
      <Button
        variant={colorMode === 'dark' ? 'solid' : 'ghost'}
        onClick={toggleColorMode}
      >
        <VscColorMode />
      </Button>
    </div>
  )
}

export default Home
