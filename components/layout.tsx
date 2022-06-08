import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import MenuComponent from './menu'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Underground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-fit flex-col items-center">
        <MenuComponent />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
