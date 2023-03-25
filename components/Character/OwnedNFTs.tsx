import React from 'react';

import {Text, VStack} from "@chakra-ui/react";

import OwnedNFT from "@/components/Character/OwnedNFT";

import useOwnedNFTs from "@/hooks/useOwnedNFTs";

interface Props {
    collectionHash: string;
}

const OwnedNFTs: React.FC<Props> = ({ collectionHash }) => {

    const { ownedNFTs } = useOwnedNFTs(collectionHash);

    return (
        <VStack
            w='100%'
            spacing={4}
        >
            <Text
                color='blue.200'
                fontSize='2xl'
            >
                Your NFTs
            </Text>
            {
                ownedNFTs.length === 0 && (
                    <Text
                        color='white'
                        fontSize='xs'
                    >
                        You don&apos;t own any NFTs in this collection
                    </Text>
                )
            }
            {
                ownedNFTs.map((token) => (
                    <OwnedNFT
                        token={token}
                        key={token.name}
                    />
                ))
            }
        </VStack>
    );
};

export default OwnedNFTs;
