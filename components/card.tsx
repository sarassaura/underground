import { Flex } from '@chakra-ui/react'
import React from 'react'

interface PropsType {
  title: String
  text: String
  key: number
}

function Card({ title, text, key }: PropsType) {
  return (
    <React.Fragment key={key}>
      <Flex direction="column">
        <h1>{title}</h1>
        <p>{text}</p>
      </Flex>
    </React.Fragment>
  )
}

export default Card
