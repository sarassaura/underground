import React from 'react'
import Footer from './footer'
import MenuComponent from './menu'
import Whatsapp from './whatsapp'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex min-h-fit flex-col items-center grow shrink-0 basis-auto">
        <MenuComponent />
        {children}
        <Whatsapp />
      </main>
      <Footer />
    </>
  )
}

export default Layout
