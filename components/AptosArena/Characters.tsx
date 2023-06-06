import React from 'react';

import {Text, useDisclosure, VStack} from "@chakra-ui/react";

import useCharacters from "@/hooks/aptosArena/useCharacters";
import EquipCharacter from "@/components/AptosArena/EquipCharacter";
import Modal from "@/components/Utilities/Modal";
import Button from "@/components/Utilities/Button";

const Characters = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { characters, equipCharacter } = useCharacters();

    return (
        <>
            <Button buttonType={'primary'} onClick={onOpen}>
                Equip Character
            </Button>
            <Modal
                modalHeader={
                    <Text>
                        Characters
                    </Text>
                }
                modalBody={
                    <VStack>
                        {characters.map((character, index) => (
                            <EquipCharacter
                                key={index}
                                character={character}
                                equipCharacter={() => equipCharacter(character)}
                            />
                        ))}
                    </VStack>
                }
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};

export default Characters;
