import React from 'react';

import {VStack, Text} from "@chakra-ui/react";

interface Props {
    title: string,
    value: string
}

const StatsItem: React.FC<Props> = ({ title, value}) => {
    return (
        <VStack
            spacing={4}
            borderWidth={2}
            borderRadius={8}
            p={4}
            flex={1}
            borderColor='blue.200'
            w={'100%'}
        >
            <Text
                fontSize={'xl'}
                fontWeight={'bold'}
            >
                {title}
            </Text>
            <Text>
                {value}
            </Text>
        </VStack>
    );
};

export default StatsItem;
