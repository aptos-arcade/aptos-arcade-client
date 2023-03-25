import React from 'react';

import {Avatar, Box} from "@chakra-ui/react";

import {Character} from "@/types/Character";
import {Token} from "@/types/Token";
import {useRouter} from "next/router";

interface Props {
    character: Character,
    ownedNFTs: Token[]
}

interface Props {
    unload: () => Promise<void>;
}

const CharacterChip: React.FC<Props> = ({ character, unload }) => {

    const router = useRouter();
    const handleNavigate = async () => {
        await unload();
        router.push(`/character/${character.collectionIdHash}`)
    }

    return (
        <Box
            rounded='lg'
            p={2}
            cursor='pointer'
            _hover={{
                bg: 'whiteAlpha.100'
            }}
            transition='all 0.2s ease-in-out'
            bg={'whiteAlpha.50'}
            onClick={handleNavigate}
        >
            <Avatar
                size='xl'
                src={character.collectionImage}

            />
        </Box>
    );
};

export default CharacterChip;
