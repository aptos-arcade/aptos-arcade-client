import React from 'react';

import {Flex, Text, VStack} from "@chakra-ui/react";

import ConnectWallet from "@/components/Navbar/ConnectWallet";
import CircularProgress from "@/components/Utilities/CircularProgress";
import StatsItem from "@/components/AptosArena/PlayerStats/StatsItem";
import PlayerCreation from "@/components/AptosArena/PlayerCreation";

import useStats from "@/hooks/aptosArena/useStats";

const PlayerStats = () => {

    const {
        walletConnected,
        loading,
        wins,
        losses,
        eloRating,
        hasPlayerMinted
    } = useStats();

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
                    Your ranked stats are used to match you with opponents of similar skill level
                </Text>
            </VStack>
            {
                walletConnected ? (
                    loading ? (
                        <CircularProgress isIndeterminate />
                    ) : (
                        hasPlayerMinted ? (
                            <Flex
                                w='100%'
                                direction={{base: 'column', md: 'row'}}
                                alignItems={"center"}
                                gap={4}
                            >
                                <StatsItem
                                    title={"ELO Rating"}
                                    value={eloRating.toString()}
                                />
                                <StatsItem
                                    title={"Wins"}
                                    value={`${wins}-${losses}`}
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

export default PlayerStats;
