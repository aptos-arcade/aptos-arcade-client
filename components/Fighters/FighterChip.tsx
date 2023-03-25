import React from 'react';

import {Avatar, HStack, Text, useDisclosure} from "@chakra-ui/react";

import {Fighter} from "@/types/Fighter";
import FighterModal from "./FighterModal";

interface Props {
    fighter: Fighter,
    selected: boolean,
    selectFighter: () => void
}

const FighterChip: React.FC<Props> = ({ fighter, selected, selectFighter }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    const onSelect = () => {
        selectFighter();
        onClose();
    }

    return (
        <>
            <FighterModal
                fighter={fighter}
                isOpen={isOpen}
                onClose={onClose}
                onSelect={onSelect}
            />
            <HStack
                bg={selected ? 'blue.200' : 'whiteAlpha.50'}
                rounded='full'
                p={2}
                onClick={onOpen}
                cursor='pointer'
                _hover={{
                    bg: selected ? 'blue.300' : 'whiteAlpha.100'
                }}
                transition='all 0.2s ease-in-out'
            >
                <Avatar
                    size='sm'
                    src={fighter.collectionImage}
                />
                <Text
                    color={selected ? '#1A202C' : 'blue.200'}
                >
                    {fighter.collectionName}
                </Text>
            </HStack>
        </>
    );
};

export default FighterChip;
