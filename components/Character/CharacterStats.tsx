import React from 'react';

import {VStack, Text, Progress} from "@chakra-ui/react";

import {statMetrics, Stats} from "@/types/Character";

interface Props {
    stats: Stats
}

const CharacterStats: React.FC<Props> = ({ stats }) => {
    return (
        <VStack
            w='100%'
            spacing={4}
        >
            <Text
                color='blue.200'
                fontSize='2xl'
            >
                Stats
            </Text>
            <VStack
                w='100%'
                spacing={8}
            >
                {
                    statMetrics.map((stat) => (
                        <VStack
                            key={stat}
                            w='100%'
                        >
                            <Text
                                color='white'
                                flex={1}
                                textAlign={'right'}
                            >
                                {stat.charAt(0).toUpperCase() + stat.slice(1)}
                            </Text>
                            <Progress
                                value={stats[stat] * 10}
                                rounded='full'
                                bg='whiteAlpha.300'
                                fill='blue.200'
                                colorScheme='brand'
                                w={{ base: '100%', md: '50%' }}
                            />
                        </VStack>
                    ))
                }
            </VStack>
        </VStack>
    );
};

export default CharacterStats;
