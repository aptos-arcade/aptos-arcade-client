import React from 'react'

import { HStack, Flex, Text } from '@chakra-ui/react'

import Key from './Key'

import {Controls} from "@/types/Controls";

interface Props {
    control: Controls
}

const Control: React.FC<Props> = ({ control }) => {

    return (
        <Flex
            flex={1}
            flexDirection='column'
            alignItems='center'
            gap={4}
        >
            {control.title && (
                <Text>
                    {control.title}
                </Text>
            )}
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