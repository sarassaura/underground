import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { MdFaceRetouchingNatural } from 'react-icons/md'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { textTestimonials } from '../constants/text'

function Testimonials() {
  const testimonial = textTestimonials()
  return (
    <Splide
      options={{
        width: '100%',
        autoHeight: true,
        rewind: true,
        perPage: 4,
        gap: 10,
        breakpoints: {
          1536: {
            perpage: 5,
          },
          1280: {
            perPage: 4,
          },
          1002: {
            perPage: 3,
          },
          768: {
            perPage: 2,
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
            bgColor={useColorModeValue('darkGreen', 'lightPurple')}
            justify="center"
            align="center"
            paddingY={3}
          >
            <MdFaceRetouchingNatural className="text-8xl mr-3" />
            <Flex direction="column">
              <Heading fontSize="3xl">{item.name}</Heading>
              <Heading fontSize="xl" marginBottom={5}>
                {item.job}
              </Heading>
              <Text fontSize="md" flexWrap="wrap">
                &quot;{item.commentary}&quot;
              </Text>
            </Flex>
          </Flex>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Testimonials
