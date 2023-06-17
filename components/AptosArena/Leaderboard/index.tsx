import React from 'react';

import useLeaderboard from "@/hooks/aptosArena/useLeaderboard";
import {Table, TableContainer, Th, Thead, Tr} from "@chakra-ui/react";

import LeaderboardRow from "@/components/AptosArena/Leaderboard/LeaderboardRow";

interface Props {
    children: React.ReactNode
}

const HeaderEntry: React.FC<Props> = ({ children }) => (
    <Th
        textAlign={'center'}
    >
        {children}
    </Th>
);


const Leaderboard = () => {

    const { leaderboardRows } = useLeaderboard();

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <HeaderEntry>Rank</HeaderEntry>
                        <HeaderEntry>Player</HeaderEntry>
                        <HeaderEntry>Wins</HeaderEntry>
                        <HeaderEntry>Losses</HeaderEntry>
                        <HeaderEntry>ELO</HeaderEntry>
                    </Tr>
                </Thead>
                {
                    leaderboardRows.map((leaderboardRow, index) => (
                        <LeaderboardRow
                            key={leaderboardRow.name}
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
