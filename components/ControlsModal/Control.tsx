import React from 'react'

import {HStack, Flex, Text, VStack} from '@chakra-ui/react'

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
                <Text
                    fontSize='lg'
                    fontWeight='bold'
                >
                    {control.title}
                </Text>
            )}
            <VStack>
                {
                    control.keys.map((controlsSet, index) => (
                        <HStack
                            key={index}
                        >
                            {
                                controlsSet.map((key) => (
                                    <Key
                                        keyData={key}
                                        key={key.key}
                                    />
                                ))
                            }
                        </HStack>
                    ))
                }
            </VStack>

        </Flex>
    )
}

export default Control