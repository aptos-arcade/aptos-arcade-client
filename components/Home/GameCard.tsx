import React from 'react';

import {Card, Icon, Text, VStack} from "@chakra-ui/react";

import {Game} from "@/types/Game";
import Link from "next/link";
import Button from "@/components/Utilities/Button";

interface Props {
    game: Game
}

const GameCard: React.FC<Props> = ({ game }) => {
    return (
        <Card
            shadow='lg'
            p={4}
            bg='whiteAlpha.50'
        >
            <VStack>
                <Icon
                    as={game.icon}
                    boxSize={12}
                    color='white'
                />
                <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    color='white'
                >
                    {game.title}
                </Text>
                <Text
                    fontSize='sm'
                    color='white'
                >
                    {game.description}
                </Text>
                <Link
                    href={game.href}
                >
                    <Button
                        buttonType={'primary'}
                    >
                        Play
                    </Button>
                </Link>
            </VStack>
        </Card>
    );
};

export default GameCard;
