import Head from 'next/head'
import Menu from '../components/menu'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Underground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
    </div>
  )
}

export default Home
