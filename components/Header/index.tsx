import React from 'react'

import { Heading, VStack, Text } from '@chakra-ui/react'

interface Props {
    headerText: string,
    subHeaderText: string,
}

const Header: React.FC<Props> = ({ headerText, subHeaderText }) => {
  return (
    <VStack
      spacing={4}
    >
        <Heading
            fontSize="48px"
            fontWeight="bold"
            color='blue.200'
        >
            {headerText}
        </Heading>
        <Text
          color='white'
          textAlign='center'
        >
            {subHeaderText}
        </Text>
    </VStack>
  )
}

export default Header