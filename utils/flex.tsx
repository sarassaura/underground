import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import variants from '../helpers/variants'

const MotionFlex = motion<FlexProps>(Flex)

interface LayoutProps {
  children: React.ReactNode
  y?: number
}

function Container({ children, y = 5 }: LayoutProps) {
  return (
    <MotionFlex
      width="100%"
      minH="fit-content"
      justify="center"
      align="center"
      direction="column"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      paddingY={y}
    >
      {children}
    </MotionFlex>
  )
}

export default Container
