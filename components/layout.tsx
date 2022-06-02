import Head from 'next/head'
import React from 'react'
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
      <main className="flex min-h-screen flex-col items-center">
        <MenuComponent />
        {children}
      </main>
    </>
  )
}

export default Layout
