import React from 'react';
import {Flex, Heading, Text, VStack} from "@chakra-ui/react";
import ConnectWallet from "@/components/Navbar/ConnectWallet";
import useStats from "@/hooks/aptosArena/useStats";
import CircularProgress from "@/components/Utilities/CircularProgress";
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
                        )
                ) : (
                    <ConnectWallet />
                )
            }
        </VStack>
    );
};

export default PlayerStats;
