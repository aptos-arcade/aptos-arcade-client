import React from 'react';

import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'
import useLeaderboard from "@/hooks/leaderboard/useLeaderboard";
import LeaderboardRow from "@/components/Leaderboard/LeaderboardRow";

const LeaderboardTable = () => {

    const { leaderboardRows } = useLeaderboard();

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Player</Th>
                        <Th>Wins</Th>
                        <Th>Losses</Th>
                        <Th>Win %</Th>
                    </Tr>
                </Thead>
                {
                    leaderboardRows.map((leaderboardRow, index) => (
                        <LeaderboardRow
                            key={index}
                            leaderboardRow={leaderboardRow}
                            rank={index + 1}
                        />
                    ))
                }
            </Table>
        </TableContainer>
    );
};

export default LeaderboardTable;
