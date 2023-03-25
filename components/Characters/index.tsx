import React from 'react';

import { Flex, Heading } from "@chakra-ui/react";

import CharacterChip from "./CharacterChip";

import characters from "../../data/characters";

import useOwnedNFTs from "@/hooks/useOwnedNFTs";


const Fighters = () => {

    const { ownedNFTs } = useOwnedNFTs();

    return (
        <Flex
            flexDirection='column'
            gap={4}
            alignItems='center'
        >
            <Heading
                fontSize="xl"
                fontWeight="bold"
                color='blue.200'
            >
                Characters
            </Heading>
            <Flex
                flexWrap='wrap'
                gap={4}
                justifyContent='center'
            >
                {
                    characters.map(character => (
                        <CharacterChip
                            key={character.collectionName}
                            character={character}
                            ownedNFTs={ownedNFTs.filter(nft => nft.collectionIdHash === character.collectionIdHash)}
                        />
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Fighters;
