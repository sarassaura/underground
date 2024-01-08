import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Fonts from '../styles/fonts'
import theme from '../styles/theme'
import Layout from '../components/layout'
import '@splidejs/react-splide/css/sea-green'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <DefaultSeo
          title={`underground${router.route}`}
          description={router.route}
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://underground-navy.vercel.app/',
            site_name: 'Underground',
            images: [
              {
                url: './pai.webp',
                width: 320,
                height: 214,
                alt: 'Joe Doe',
                type: 'image/webp',
              },
            ],
          }}
          twitter={{
            handle: '@joedoe',
            site: '@undergroundtattoo',
            cardType: 'summary_large_image',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: './favicon.ico',
            },
          ]}
        />
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
