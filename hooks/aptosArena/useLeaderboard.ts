import { useEffect, useState, useCallback } from 'react';

import {useAptos} from "@/contexts/AptosContext";

import {getProfileCollectionAddress, getPlayerStats} from "@/services/viewFunctions";

import {LeaderboardRow} from "@/types/LeaderboardRow";
import {OwnersByCollection} from "@/types/Queries";

const useLeaderboard = () => {

    const { provider } = useAptos();

    const [leaderboardRows, setLeaderboardRows] = useState<LeaderboardRow[]>([]);

    const fetchLeaderboardRows = useCallback(async () => {
        const profileCollectionAddress = await getProfileCollectionAddress(provider.aptosClient);
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
                collection_id: profileCollectionAddress,
            }
        })).current_collection_ownership_v2_view.map((row) => row.owner_address);
        let eloRatings: LeaderboardRow[] = (await Promise.all(owners.map(async (owner) => {
            const eloRatingData = await getPlayerStats(provider.aptosClient, owner);
            return {
                name: owner,
                ...eloRatingData
            }
        }))).sort((a, b) => b.eloRating - a.eloRating);
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