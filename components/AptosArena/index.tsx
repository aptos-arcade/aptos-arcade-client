import React from 'react';

import {CircularProgress, Heading, HStack, Text, VStack} from "@chakra-ui/react";

import PlayerCreation from "@/components/AptosArena/PlayerCreation";
import Characters from "@/components/AptosArena/Characters";
import MeleeWeapons from "@/components/AptosArena/MeleeWeapons";

import usePlayer from "@/hooks/aptosArena/usePlayer";


const AptosArena = () => {

    const { createPlayer, playerTokenAddress, playerMeleeWeapon, playerCharacter, loading } = usePlayer()

    return (
        <VStack>
            <Heading>
                Your Player
            </Heading>
            {
                loading ? (
                    <CircularProgress isIndeterminate />
                ) : (
                    playerTokenAddress ? (
                        <HStack>
                            <VStack>
                                <Text>
                                    Character
                                </Text>
                                <Text>
                                    {playerCharacter?.tokenName || 'No Character'}
                                </Text>
                                <Characters />
                            </VStack>
                            <VStack>
                                <Text>
                                    Melee Weapon
                                </Text>
                                <Text>
                                    {playerMeleeWeapon?.name || 'No Melee Weapon'}
                                </Text>
                                <MeleeWeapons />
                            </VStack>
                        </HStack>
                    ) : (
                        <PlayerCreation createPlayer={createPlayer} />
                    )
                )
            }
        </VStack>
    );
};

export default AptosArena;
