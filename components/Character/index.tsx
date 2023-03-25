import React, { useState, useEffect } from 'react';

import {VStack} from "@chakra-ui/react";

import CharacterHeader from "@/components/Character/CharacterHeader";
import CharacterStats from "@/components/Character/CharacterStats";
import OwnedNFTs from "@/components/Character/OwnedNFTs";

import {getCharacterByCollectionIdHash} from "@/data/characters";

import {Character} from "@/types/Character";


interface Props {
    collectionHash: string;
}

const Character: React.FC<Props> = ({ collectionHash }) => {

    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        const character = getCharacterByCollectionIdHash(collectionHash);
        if(character) {
            setCharacter(character);
        }
    }, [collectionHash])

    if(!character) {
        return null;
    }

    return (
        <VStack
            spacing={8}
        >
            <CharacterHeader
                character={character}
            />
            <CharacterStats
                stats={character.stats}
            />
            <OwnedNFTs
                collectionHash={character.collectionIdHash}
            />
        </VStack>
    );
};

export default Character;
