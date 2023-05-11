import React from 'react';
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import {SimpleGrid} from "@chakra-ui/react";
import games from "@/data/games";
import GameCard from "@/components/Home/GameCard";

const Home = () => {
    return (
        <Layout>
            <Header
                headerText={"Aptos Arcade"}
                subHeaderText={"NFT-powered web3 gaming super-app"}
            />
            <SimpleGrid
                columns={2}
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
        </Layout>
    );
};

export default Home;
