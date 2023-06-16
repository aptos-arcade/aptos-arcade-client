import React from 'react';

import {Td, Tr} from "@chakra-ui/react";

import {ellipsize} from "@/services/utils";

import {LeaderboardRow as LeaderboardRowType} from "@/types/LeaderboardRow";

interface Props {
    leaderboardRow: LeaderboardRowType;
    rank: number;
}

const LeaderboardRow: React.FC<Props> = ({ leaderboardRow, rank }) => {

    const { name, wins, losses, elo } = leaderboardRow;

    return (
        <Tr>
            <Td>{rank}</Td>
            <Td>{ellipsize(name,4, 4)}</Td>
            <Td>{wins}</Td>
            <Td>{losses}</Td>
            <Td>{elo}</Td>
        </Tr>
    );
};

export default LeaderboardRow;
