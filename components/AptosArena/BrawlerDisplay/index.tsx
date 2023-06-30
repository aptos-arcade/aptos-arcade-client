import React from 'react';

import {Flex, Text, VStack} from "@chakra-ui/react";

import PlayerCreation from "@/components/AptosArena/PlayerCreation";
import Characters from "@/components/AptosArena/CharacterSelect/Characters";
import MeleeWeapons from "@/components/AptosArena/MeleeWeaponSelect/MeleeWeapons";

import usePlayer from "@/hooks/aptosArena/usePlayer";
import BrawlerItem from "@/components/AptosArena/BrawlerDisplay/BrawlerItem";
import ConnectWallet from "@/components/Navbar/ConnectWallet";
import CircularProgress from "@/components/Utilities/CircularProgress";
import RangedWeapons from "@/components/AptosArena/RangedWeaponSelect/RangedWeapons";

import {meleeWeaponNames} from "@/data/meleeWeapons";
import {rangedWeaponNames} from "@/data/rangedWeapons";


const BrawlerDisplay = () => {

    const {
        playerTokenAddress,
        playerMeleeWeapon,
        playerRangedWeapon,
        playerCharacter,
        loading,
        walletConnected
    } = usePlayer()

    return (
        <VStack
            spacing={8}
        >
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
                            <Flex
                                gap={4}
                                direction={{base: 'column', md: 'row'}}
                                w={'100%'}
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
                                    value={playerMeleeWeapon ? meleeWeaponNames[playerMeleeWeapon.type - 1] : 'No Melee Weapon'}
                                    button={
                                        <MeleeWeapons/>
                                    }
                                />
                                <BrawlerItem
                                    title={"Ranged Weapon"}
                                    value={playerRangedWeapon ? rangedWeaponNames[playerRangedWeapon.type - 1] : 'No Ranged Weapon'}
                                    button={
                                        <RangedWeapons />
                                    }
                                />
                            </Flex>
                        ) : (
                            <PlayerCreation />
                        )
                    )
                ) : (
                    <ConnectWallet />
                )
            }
        </VStack>
    );
};

export default BrawlerDisplay;
