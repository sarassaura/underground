import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { textContact } from '../constants/text'

function Contact() {
  return (
    <Flex direction="column">
      {textContact.map((item) => (
        <React.Fragment key={item.info}>
          <Icon as={item.icon} className="self-center text-2xl mb-3" />
          <Text>{item.info}</Text>
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default Contact
