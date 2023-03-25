import React from 'react';

import {
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Box, Button
} from "@chakra-ui/react";

import FighterStats from "./FighterStats";

import { Fighter } from "@/types/Fighter";

interface Props {
    fighter: Fighter,
    isOpen: boolean,
    onClose: () => void
    onSelect: () => void
}

const FighterModal: React.FC<Props> = ({ fighter, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                bg='#1A202C'
                overflow='hidden'
            >
                <Box
                    position='relative'
                >
                    <Image
                        src={fighter.collectionBackgroundImage}
                        position='absolute'
                        top={0}
                        left={0}
                        objectFit='cover'
                        zIndex={-1}
                        filter='blur(0.5px)'
                        alt="Collection Background"
                    />
                    <Image
                        src={fighter.collectionImage}
                        alt="Collection Image"
                    />
                </Box>
                <ModalHeader>
                    <Heading
                        color='blue.200'
                        fontSize='2xl'
                    >
                        {fighter.collectionName}
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <FighterStats
                        stats={fighter.stats}
                    />
                </ModalBody>
                <ModalFooter
                    justifyContent='center'
                >
                    <a
                        href={fighter.marketplaceURL}
                        target='_blank'
                    >
                        <Button
                            size='sm'
                            bg='blue.200'
                        >
                            Browse
                        </Button>
                    </a>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FighterModal;
