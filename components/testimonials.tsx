import { Flex, Heading, Text } from '@chakra-ui/react'
import { MdFaceRetouchingNatural } from 'react-icons/md'
import { Splide, SplideSlide } from '@splidejs/react-splide'

function Testimonials() {
  return (
    <Splide
      className="w-full"
      options={{
        rewind: true,
        perPage: 5,
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
          480: {
            perPage: 1,
          },
        },
      }}
      aria-label="Testimonials"
    >
      <SplideSlide>
        <Flex
          width="100%"
          height={['200px', '200px', '150px', '150px']}
          bgColor="green"
          justify="center"
          align="center"
        >
          <MdFaceRetouchingNatural className="text-8xl mr-3" />
          <Flex direction="column">
            <Heading fontSize="3xl">Sarah Lins</Heading>
            <Heading fontSize="xl" marginBottom={5}>
              Engenheira
            </Heading>
            <Text fontSize="md" flexWrap="wrap">
              &quot;Comentário legal sobre produto&quot;
            </Text>
          </Flex>
        </Flex>
      </SplideSlide>

      <SplideSlide>
        <Flex
          width="100%"
          height={['200px', '200px', '150px', '150px']}
          bgColor="green"
          justify="center"
          align="center"
        >
          <MdFaceRetouchingNatural className="text-8xl mr-3" />
          <Flex direction="column">
            <Heading fontSize="3xl">Sarah Lins</Heading>
            <Heading fontSize="xl" marginBottom={5}>
              Engenheira
            </Heading>
            <Text fontSize="md" flexWrap="wrap">
              &quot;Comentário legal sobre produto&quot;
            </Text>
          </Flex>
        </Flex>
      </SplideSlide>

      <SplideSlide>
        <Flex
          width="100%"
          height={['200px', '200px', '150px', '150px']}
          bgColor="green"
          justify="center"
          align="center"
        >
          <MdFaceRetouchingNatural className="text-8xl mr-3" />
          <Flex direction="column">
            <Heading fontSize="3xl">Sarah Lins</Heading>
            <Heading fontSize="xl" marginBottom={5}>
              Engenheira
            </Heading>
            <Text fontSize="md" flexWrap="wrap">
              &quot;Comentário legal sobre produto&quot;
            </Text>
          </Flex>
        </Flex>
      </SplideSlide>

      <SplideSlide>
        <Flex
          width="100%"
          height={['200px', '200px', '150px', '150px']}
          bgColor="green"
          justify="center"
          align="center"
        >
          <MdFaceRetouchingNatural className="text-8xl mr-3" />
          <Flex direction="column">
            <Heading fontSize="3xl">Sarah Lins</Heading>
            <Heading fontSize="xl" marginBottom={5}>
              Engenheira
            </Heading>
            <Text fontSize="md" flexWrap="wrap">
              &quot;Comentário legal sobre produto&quot;
            </Text>
          </Flex>
        </Flex>
      </SplideSlide>

      <SplideSlide>
        <Flex
          width="100%"
          height={['200px', '200px', '150px', '150px']}
          bgColor="green"
          justify="center"
          align="center"
        >
          <MdFaceRetouchingNatural className="text-8xl mr-3" />
          <Flex direction="column">
            <Heading fontSize="3xl">Sarah Lins</Heading>
            <Heading fontSize="xl" marginBottom={5}>
              Engenheira
            </Heading>
            <Text fontSize="md" flexWrap="wrap">
              &quot;Comentário legal sobre produto&quot;
            </Text>
          </Flex>
        </Flex>
      </SplideSlide>
    </Splide>
  )
}

export default Testimonials
