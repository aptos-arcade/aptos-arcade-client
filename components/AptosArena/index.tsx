import React from 'react';

import {CircularProgress, Heading, HStack, Text, VStack} from "@chakra-ui/react";

import PlayerCreation from "@/components/AptosArena/PlayerCreation";
import Characters from "@/components/AptosArena/CharacterSelect/Characters";
import MeleeWeapons from "@/components/AptosArena/MeleeWeaponSelect/MeleeWeapons";

import usePlayer from "@/hooks/aptosArena/usePlayer";
import BrawlerItem from "@/components/AptosArena/BrawlerDisplay/BrawlerItem";
import ConnectWallet from "@/components/Navbar/ConnectWallet";


const AptosArena = () => {

    const { createPlayer, playerTokenAddress, playerMeleeWeapon, playerCharacter, loading, walletConnected } = usePlayer()

    return (
        <VStack
            spacing={8}
        >
            <Heading
                color={'blue.200'}
            >
                Your Brawler
            </Heading>
            <VStack
                spacing={4}
            >
                <Text
                    textAlign={'center'}
                >
                    Your brawler is used to play ranked mode, where you can earn rewards and compete for the highest ELO rating
                </Text>
                <Text
                    textAlign={'center'}
                >
                    Start composing your brawler by selecting your favorite NFT and equipping a melee weapon
                </Text>
            </VStack>
            {
                walletConnected ? (
                    loading ? (
                        <CircularProgress isIndeterminate />
                    ) : (
                        playerTokenAddress ? (
                            <HStack
                                spacing={4}
                            >
                                <BrawlerItem
                                    title={"Character"}
                                    value={playerCharacter?.name || 'No Character'}
                                    button={
                                        <Characters
                                            selectedCharacter={playerCharacter}
                                        />
                                    }
                                />
                                <BrawlerItem
                                    title={"Melee Weapon"}
                                    value={playerMeleeWeapon?.name || 'No Melee Weapon'}
                                    button={
                                        <MeleeWeapons

                                        />
                                    }
                                />
                            </HStack>
                        ) : (
                            <PlayerCreation createPlayer={createPlayer} />
                        )
                    )
                ) : (
                    <ConnectWallet />
                )
            }
        </VStack>
    );
};

export default AptosArena;
