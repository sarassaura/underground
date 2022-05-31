import Head from 'next/head'
import MenuComponent from '../components/menu'

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>Underground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuComponent />
    </div>
  )
}

export default Home
