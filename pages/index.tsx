import Facts from '../components/facts'
import Features from '../components/features'
import Hero from '../components/hero'
import Testimonials from '../components/testimonials'
import Container from '../utils/flex'

function Home() {
  return (
    <Container y={0}>
      <Hero />
      <Features />
      <Facts />
      <Testimonials />
    </Container>
  )
}

export default Home
