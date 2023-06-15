import React, {useMemo} from 'react';

import {Text, useDisclosure, VStack} from "@chakra-ui/react";

import EquipCharacter from "@/components/AptosArena/CharacterSelect/EquipCharacter";
import Modal from "@/components/Utilities/Modal";
import Button from "@/components/Utilities/Button";

import useCharacters from "@/hooks/aptosArena/useCharacters";
import {TokenData} from "@/types/TokenData";

interface Props {
    selectedCharacter?: TokenData
}

const Characters: React.FC<Props> = ({ selectedCharacter }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { characters, equipCharacter } = useCharacters();

    let availableCharacters = useMemo(() => {
        return characters.filter(character => character.name !== selectedCharacter?.name)
    }, [characters, selectedCharacter])

    const onSelect = async (character: TokenData) => {
        await equipCharacter(character)
        onClose()
    }

    return (
        <>
            <Button buttonType={'primary'} onClick={onOpen}>
                Select
            </Button>
            <Modal
                modalHeader={
                    <Text
                        fontSize={'4xl'}
                        textAlign={'center'}
                    >
                        Characters
                    </Text>
                }
                modalBody={
                    <VStack>
                        {
                            availableCharacters.length > 0 ? (
                                characters
                                    .filter(character => character.name !== selectedCharacter?.name)
                                    .map((character, index) => (
                                    <EquipCharacter
                                        key={index}
                                        character={character}
                                        equipCharacter={() => onSelect(character)}
                                    />
                                ))
                            ) : (
                                <Text>
                                    No characters available
                                </Text>
                            )
                        }
                    </VStack>
                }
                isOpen={isOpen}
                onClose={onClose}
                size={'xl'}
            />
        </>
    );
};

export default Characters;
