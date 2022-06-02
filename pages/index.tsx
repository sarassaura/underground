import Head from 'next/head'
import Features from '../components/features'
import Hero from '../components/hero'
import MenuComponent from '../components/menu'

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden items-center">
      <Head>
        <title>Underground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuComponent />
      <Hero />
      <Features />
    </div>
  )
}

export default Home
