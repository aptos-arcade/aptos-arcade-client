import React from 'react';

import {Avatar, Box, useDisclosure} from "@chakra-ui/react";

import {Character} from "@/types/Character";
import {Token} from "@/types/Token";
import {useRouter} from "next/router";
import CharacterModal from "@/components/CharacterModal";

interface Props {
    character: Character,
    ownedNFTs: Token[]
}

interface Props {
    unload: () => Promise<void>;
}

const CharacterChip: React.FC<Props> = ({ character, unload }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const router = useRouter();

    const handleNavigate = async () => {
        await unload();
        await router.push(`/character/${character.collectionIdHash}`)
    }

    return (
        <>
            <CharacterModal
                isOpen={isOpen}
                onClose={onClose}
                character={character}
                handleNavigate={handleNavigate}
            />
            <Box
                rounded='lg'
                p={2}
                cursor='pointer'
                _hover={{
                    bg: 'whiteAlpha.100'
                }}
                transition='all 0.2s ease-in-out'
                bg={'whiteAlpha.50'}
                onClick={onOpen}
            >
                <Avatar
                    size='xl'
                    src={character.collectionImage}
                />
            </Box>
        </>
    );
};

export default CharacterChip;
