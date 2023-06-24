import React from 'react';
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import {Box, Image, SimpleGrid, VStack} from "@chakra-ui/react";
import games from "@/data/games";
import GameCard from "@/components/Home/GameCard";

const Home = () => {
    return (
        <Layout>
            <VStack
                spacing={8}
            >
                <Box
                    w={{base: '100%', sm: "70%", md: '50%'}}
                    rounded={'xl'}
                    borderWidth={4}
                    borderColor={'blue.200'}
                >
                    <Image
                        src={'/banner.png'}
                        rounded={'xl'}
                        alt={'Aptos Arcade Banner'}
                    />
                </Box>
                <Header
                    headerText={"Aptos Arcade"}
                    subHeaderText={"NFT-powered web3 gaming super-app"}
                />
                <SimpleGrid
                    columns={{base: 1, sm: 2}}
                    spacing={8}
                >
                    {
                        games.map((game, index) => (
                            <GameCard
                                game={game}
                                key={index}
                            />
                        ))
                    }
                </SimpleGrid>
            </VStack>
        </Layout>
    );
};

export default Home;
