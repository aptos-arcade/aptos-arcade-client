import React from 'react';

import Link from "next/link";

import {Avatar, Box} from "@chakra-ui/react";

import {Character} from "@/types/Character";
import {Token} from "@/types/Token";

interface Props {
    character: Character,
    ownedNFTs: Token[]
}

const CharacterChip: React.FC<Props> = ({ character }) => {

    return (
        <Link
            href={`/character/${character.collectionIdHash}`}
        >
            <Box
                rounded='lg'
                p={2}
                cursor='pointer'
                _hover={{
                    bg: 'whiteAlpha.100'
                }}
                transition='all 0.2s ease-in-out'
                bg={'whiteAlpha.50'}
            >
                <Avatar
                    size='xl'
                    src={character.collectionImage}

                />
            </Box>
        </Link>
    );
};

export default CharacterChip;
