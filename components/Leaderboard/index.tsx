import React from 'react';

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import LeaderboardTable from "@/components/Leaderboard/LeaderboardTable";

const Leaderboard = () => {
    return (
        <Layout>
            <Header
                headerText={"Leaderboard"}
                subHeaderText={"See how you stack up against other players"}
            />
            <LeaderboardTable />
        </Layout>
    );
};

export default Leaderboard;
