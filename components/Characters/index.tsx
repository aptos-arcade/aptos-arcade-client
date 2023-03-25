import React from 'react';

import { Flex, Heading } from "@chakra-ui/react";

import CharacterChip from "./CharacterChip";

import characters from "../../data/characters";

import useOwnedNFTs from "@/hooks/useOwnedNFTs";

interface Props {
    unload: () => Promise<void>;
}

const Fighters: React.FC<Props> = ({ unload }) => {

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
                            unload={unload}
                        />
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Fighters;
