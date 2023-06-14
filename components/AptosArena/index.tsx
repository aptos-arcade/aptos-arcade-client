import React from 'react';

import BrawlerDisplay from "@/components/AptosArena/BrawlerDisplay";
import {Divider, VStack} from "@chakra-ui/react";
import PlayerStats from "@/components/AptosArena/PlayerStats";


const AptosArena = () => {

    return (
        <VStack
            spacing={8}
        >
            <BrawlerDisplay />
            <Divider />
            <PlayerStats />
        </VStack>
    )
};

export default AptosArena;
