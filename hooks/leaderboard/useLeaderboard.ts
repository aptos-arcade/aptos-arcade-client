import {useState} from "react";

import {LeaderboardRow} from "@/types/LeaderboardRow";

import leaderboardItems from "@/data/leaderboardItems";

const useLeaderboard = () => {

    const [leaderboardRows, _setLeaderboardRows] = useState<LeaderboardRow[]>(leaderboardItems);

    return {
        leaderboardRows
    }
}

export default useLeaderboard;