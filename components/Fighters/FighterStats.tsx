import React from 'react';

import {HStack, VStack, Text, Progress} from "@chakra-ui/react";

import {statMetrics, Stats} from "@/types/Fighter";

interface Props {
    stats: Stats
}

const FighterStats: React.FC<Props> = ({ stats }) => {
    return (
        <VStack
            w='100%'
            align='flex-start'
        >
            <Text
                color='blue.200'
                fontSize='xl'
            >
                Stats
            </Text>
            <VStack
                w='100%'
            >
                {
                    statMetrics.map((stat) => (
                        <HStack
                            key={stat}
                            w='100%'
                        >
                            <Text
                                fontSize='xs'
                                color='white'
                                flex={1}
                            >
                                {stat.charAt(0).toUpperCase() + stat.slice(1)}
                            </Text>
                            <Progress
                                value={stats[stat] * 10}
                                flex={1}
                                rounded='full'
                                bg='whiteAlpha.50'
                                fill='blue.200'
                                colorScheme='brand'
                            />
                        </HStack>
                    ))
                }
            </VStack>
        </VStack>
    );
};

export default FighterStats;
