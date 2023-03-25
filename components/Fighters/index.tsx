import React from 'react';

import { Flex, Heading } from "@chakra-ui/react";

import FighterChip from "./FighterChip";

import fighters from "../../data/fighters";

import {Fighter} from "@/types/Fighter";


const Fighters = () => {

    const [selectedFighter, setSelectedFighter] = React.useState<Fighter | null>(null);

    const selectFighter = (fighter: Fighter) => {
        setSelectedFighter(fighter);
    }

    return (
        <Flex
            flexDirection='column'
            gap={4}
            alignItems='center'
        >
            <Heading
                fontSize="xl"
                fontWeight="bold"
                color='blue.200'
            >
                Fighters
            </Heading>
            <Flex
                flexWrap='wrap'
                gap={4}
                justifyContent='center'
            >
                {
                    fighters.map(fighter => (
                        <FighterChip
                            key={fighter.collectionName}
                            fighter={fighter}
                            selected={selectedFighter?.collectionName === fighter.collectionName}
                            selectFighter={() => selectFighter(fighter)}
                        />
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Fighters;
