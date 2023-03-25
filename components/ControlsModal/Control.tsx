import React from 'react'

import { HStack, Flex } from '@chakra-ui/react'

import { Controls } from './controls'
import Key from './Key'

interface Props {
    control: Controls
}

const Control: React.FC<Props> = ({ control }) => {

    return (
        <Flex
            flex={1}
            justifyContent='center'
        >
            <HStack>
                {
                    control.keys.map((key) => (
                        <Key
                            keyData={key}
                            key={key.key}
                        />
                    ))
                }
            </HStack>
        </Flex>
    )
}

export default Control