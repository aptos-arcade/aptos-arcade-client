import React from 'react';
import {Heading, HStack, Text, VStack} from "@chakra-ui/react";
import ConnectWallet from "@/components/Navbar/ConnectWallet";
import useStats from "@/hooks/aptosArena/useStats";
import CircularProgress from "@/components/Utilities/CircularProgress";
import BrawlerItem from "@/components/AptosArena/BrawlerDisplay/BrawlerItem";
import StatsItem from "@/components/AptosArena/PlayerStats/StatsItem";

const PlayerStats = () => {

    const {
        walletConnected,
        loading,
        wins,
        losses,
        eloRating
    } = useStats();

    return (
        <VStack
            spacing={8}
        >
            <Heading
                color={'blue.200'}
            >
                Your Stats
            </Heading>
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
                            <HStack
                                w='100%'
                            >
                                <StatsItem
                                    title={"ELO Rating"}
                                    value={eloRating.toString()}
                                />
                                <StatsItem
                                    title={"Wins"}
                                    value={`${wins}-${losses}`}
                                />

                            </HStack>
                        )
                ) : (
                    <ConnectWallet />
                )
            }
        </VStack>
    );
};

export default PlayerStats;
