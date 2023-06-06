import React from 'react';

import {VStack, Text} from "@chakra-ui/react";

interface Props {
    title: string,
    value: string,
    button: React.ReactNode,
}

const BrawlerItem: React.FC<Props> = ({ title, value, button}) => {
    return (
        <VStack
            spacing={4}
            borderWidth={2}
            borderRadius={8}
            p={4}
            borderColor='blue.200'
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
            {button}
        </VStack>
    );
};

export default BrawlerItem;
