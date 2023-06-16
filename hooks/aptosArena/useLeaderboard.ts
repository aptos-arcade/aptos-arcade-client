import { useEffect, useState, useCallback } from 'react';

import {useAptos} from "@/contexts/AptosContext";

import {getEloRatingCollectionAddress, getPlayerEloRatingData} from "@/services/viewFunctionBuilder";

import {LeaderboardRow} from "@/types/LeaderboardRow";
import {OwnersByCollection} from "@/types/Queries";

const useLeaderboard = () => {

    const { provider } = useAptos();

    const [leaderboardRows, setLeaderboardRows] = useState<LeaderboardRow[]>([]);

    const fetchLeaderboardRows = useCallback(async () => {
        const eloCollectionAddress = await getEloRatingCollectionAddress(provider.aptosClient);
        const owners = (await provider.queryIndexer<OwnersByCollection>({
            query: `
                query MyQuery($collection_id: String) {
                    current_collection_ownership_v2_view(
                        where: {collection_id: {_eq: $collection_id}}
                        limit: 10
                    ) {
                        owner_address
                    }
                }
            `,
            variables: {
                collection_id: eloCollectionAddress,
            }
        })).current_collection_ownership_v2_view.map((row) => row.owner_address);
        let eloRatings: LeaderboardRow[] = (await Promise.all(owners.map(async (owner) => {
            const eloRatingData = await getPlayerEloRatingData(provider.aptosClient, owner);
            if (eloRatingData.length === 0) {
                return {
                    name: owner,
                    elo: 0,
                    wins: 0,
                    losses: 0,
                }
            }
            return {
                name: owner,
                elo: eloRatingData[0],
                wins: eloRatingData[1],
                losses: eloRatingData[2],
            }
        }))).sort((a, b) => b.elo - a.elo);
        setLeaderboardRows(eloRatings);
    }, [provider]);

    useEffect(() => {
        fetchLeaderboardRows();
    }, [fetchLeaderboardRows, provider]);


    return {
        leaderboardRows,
    }
}

export default useLeaderboard;