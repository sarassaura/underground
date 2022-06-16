import Facts from '../components/facts'
import Features from '../components/features'
import Hero from '../components/hero'
import Testimonials from '../components/testimonials'
import variants from '../helpers/variants'
import MotionFlex from '../utils/flex'

function Home() {
  return (
    <MotionFlex
      justify="center"
      align="center"
      direction="column"
      width="100%"
      minH="fit-content"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <Hero />
      <Features />
      <Facts />
      <Testimonials />
    </MotionFlex>
  )
}

export default Home
