import React from 'react'

import { Heading, VStack, Text } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <VStack
      spacing={4}
    >
        <Heading
            fontSize="4xl"
            fontWeight="bold"
            color='blue.200'
        >
            Arcade Shooter Demo
        </Heading>
        <Text
          color='white'
          textAlign='center'
        >
            Jason Hedman 3D final project
        </Text>
    </VStack>
  )
}

export default Header