import React from 'react';

import {HStack, Text} from "@chakra-ui/react";

import {Token} from "@/types/Token";

interface Props {
    token: Token
}

const OwnedNFT: React.FC<Props> = ({ token }) => {
    return (
        <HStack
            w='100%'
            justifyContent='center'
            borderWidth={1}
            rounded='lg'
            p={4}
            borderColor='blue.200'
        >
            <Text
                fontSize='lg'
                color='white'
            >
                {token.name}
            </Text>
        </HStack>
    );
};

export default OwnedNFT;
