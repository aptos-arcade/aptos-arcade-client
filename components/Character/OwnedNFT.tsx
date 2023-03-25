import React from 'react';

import {HStack, Text} from "@chakra-ui/react";

import Button from "@/components/Utilities/Button";

import {Token} from "@/types/Token";
import CasualCapabilityModal from "@/components/Character/CasualCapabilityModal";

interface Props {
    token: Token
}

const OwnedNFT: React.FC<Props> = ({ token }) => {
    return (
        <HStack
            w='100%'
            justifyContent='space-between'
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
            <HStack>
                <CasualCapabilityModal token={token} />
                <Button
                    buttonType='primary'
                >
                    Ranked
                </Button>
            </HStack>

        </HStack>
    );
};

export default OwnedNFT;
