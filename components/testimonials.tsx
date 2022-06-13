import { Flex, Heading, Text, useColorModeValue, Icon } from '@chakra-ui/react'
import { MdFaceRetouchingNatural } from 'react-icons/md'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { textTestimonials } from '../constants/text'

function Testimonials() {
  const testimonial = textTestimonials()
  return (
    <Splide
      options={{
        width: '100%',
        fixedHeight: '180px',
        rewind: true,
        perPage: 3,
        gap: 10,
        breakpoints: {
          1536: {
            perpage: 4,
          },
          1280: {
            perPage: 3,
          },
          990: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
          526: {
            perPage: 1,
          },
        },
      }}
      aria-label="Testimonials"
    >
      {testimonial.map((item) => (
        <SplideSlide key={item.name}>
          <Flex
            width="100%"
            height="100%"
            bgColor={useColorModeValue('lightYellow', 'lightPurple')}
            justify="flex-start"
            position="relative"
            padding={5}
            direction={['column', 'row', 'column', 'column']}
          >
            <Flex
              width="100%"
              alignItems="center"
              justify={['flex-start', 'center', 'flex-start', 'flex-start']}
              mb={5}
            >
              <Icon
                as={MdFaceRetouchingNatural}
                className="text-6xl mr-2"
                color={useColorModeValue('crimson', 'white')}
              />
              <Flex direction="column">
                <Heading
                  fontSize={['xl']}
                  fontFamily="Arial"
                  color={useColorModeValue('crimson', 'white')}
                >
                  {item.name}
                </Heading>
                <Text
                  fontSize={['sm']}
                  as="i"
                  color={useColorModeValue('crimson', 'white')}
                >
                  {item.job}
                </Text>
              </Flex>
            </Flex>
            <Text
              fontSize={['lg', 'md']}
              flexWrap="wrap"
              alignContent={['start', 'center', 'start', 'start']}
              textAlign={['start', 'center', 'center', 'start']}
              justifyContent={['start', 'center', 'center', 'start']}
              display="flex"
              marginX="1.5"
              width="100%"
            >
              &quot;{item.commentary}&quot;
            </Text>
          </Flex>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Testimonials
