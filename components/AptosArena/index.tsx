import React from 'react';

import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/tabs";

import BrawlerDisplay from "@/components/AptosArena/BrawlerDisplay";
import PlayerStats from "@/components/AptosArena/PlayerStats";
import {Heading, VStack} from "@chakra-ui/react";
import Leaderboard from "@/components/AptosArena/Leaderboard";
import Achievements from "@/components/AptosArena/Achievements";


const AptosArena = () => {
    return (
        <VStack
            spacing={8}
        >
            <Heading
                size={'xl'}
                fontWeight={'bold'}
                color={'brand.200'}
            >
                Your Brawler
            </Heading>
            <Tabs
                isFitted
                colorScheme='brand'
                size='lg'
                w={'100%'}
            >
                <TabList>
                    <Tab>Brawler</Tab>
                    <Tab>Stats</Tab>
                    <Tab>Leaderboard</Tab>
                    <Tab>Achievements</Tab>
                </TabList>
                <TabPanels
                    py={8}
                >
                    <TabPanel>
                        <BrawlerDisplay />
                    </TabPanel>
                    <TabPanel>
                        <PlayerStats />
                    </TabPanel>
                    <TabPanel>
                        <Leaderboard />
                    </TabPanel>
                    <TabPanel>
                        <Achievements />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
};

export default AptosArena;
