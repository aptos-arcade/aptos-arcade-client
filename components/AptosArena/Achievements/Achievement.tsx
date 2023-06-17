import React from 'react';

import {VStack, Text, HStack, Progress, Image} from "@chakra-ui/react";
import {Achievement} from "@/types/Achievements";

interface Props {
    achievement: Achievement
    value: number
}

const Achievement: React.FC<Props> = ({ achievement, value}) => {

    const nextTier = achievement.tiers.find(tier => tier.threshold > value);

    return (
        <HStack
            w={'100%'}
            borderWidth={0.5}
            borderColor={'brand.200'}
            rounded={'md'}
            p={4}
            spacing={4}
        >
            <VStack
                w={'100%'}
                alignItems={'flex-start'}
                flex={1}
            >
                <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                >
                    <Text>
                        {achievement.name}
                    </Text>
                    <Text>
                        {
                            nextTier ? `Next Tier: ${nextTier.name}` : `Complete`
                        }
                    </Text>
                </HStack>
                <HStack
                    w={'100%'}
                    spacing={4}
                >
                    <Text>{value}{nextTier && `/${nextTier.threshold}`}</Text>
                    <Progress
                        value={value}
                        max={nextTier?.threshold || value}
                        flex={1}
                    />
                </HStack>
            </VStack>
            <Image
                alt={achievement.name}
                src={nextTier?.image || achievement.tiers[achievement.tiers.length - 1].image}
                boxSize={20}
            />
        </HStack>
    );
};

export default Achievement;
