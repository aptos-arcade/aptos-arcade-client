import React from 'react';

import {
    Box,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

import Button from "@/components/Utilities/Button";

import {Character} from "@/types/Character";
import CharacterStats from "@/components/Character/CharacterStats";

interface Props {
    isOpen: boolean,
    onClose: () => void,
    character: Character,
    handleNavigate: () => void
}

const CharacterModal: React.FC<Props> = ({ isOpen, onClose, character, handleNavigate }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent
                bg='#1A202C'
            >
                <Box
                    position='relative'
                    rounded={'lg'}
                    overflow='hidden'
                >
                    <Image
                        src={character.collectionBackgroundImage}
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        filter='blur(0.5px)'
                        alt="Collection Background"
                    />
                    <Image
                        src={character.collectionImage}
                        alt="Collection Image"
                        position='absolute'
                        top={0}
                        zIndex={2}
                    />
                </Box>
                <ModalHeader
                    textAlign='center'
                    color='blue.200'
                    fontSize='2xl'
                >
                    {character.collectionName}
                </ModalHeader>
                <ModalBody>
                    <CharacterStats stats={character.stats} />
                </ModalBody>
                <ModalFooter
                    justifyContent='center'
                >
                    <Button
                        buttonType='outline'
                        onClick={handleNavigate}
                    >
                        See More
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    );
};

export default CharacterModal;
