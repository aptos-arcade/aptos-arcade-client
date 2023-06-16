import React from 'react';

import useLeaderboard from "@/hooks/aptosArena/useLeaderboard";
import {Table, TableContainer, Th, Thead, Tr} from "@chakra-ui/react";

import LeaderboardRow from "@/components/AptosArena/Leaderboard/LeaderboardRow";

const Leaderboard = () => {

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
                        <Th>ELO</Th>
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

export default Leaderboard;
