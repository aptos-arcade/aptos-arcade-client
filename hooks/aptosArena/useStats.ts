import { useState, useEffect, useCallback } from 'react'

import {useWallet} from "@manahippo/aptos-wallet-adapter";
import {getPlayerEloRatingData} from "@/services/viewFunctionBuilder";
import {useAptos} from "@/contexts/AptosContext";

const useStats = () => {

    const { provider } = useAptos();

    const { account } = useWallet();

    const [loading, setLoading] = useState<boolean>(true);
    const [wins, setWins] = useState<number>(0);
    const [losses, setLosses] = useState<number>(0);
    const [eloRating, setEloRating] = useState<number>(0);

    const fetchPlayerStats = useCallback(async () => {
        if(account?.address?.toString() !== undefined) {
            setLoading(true);
            let playerEloRatingData = await getPlayerEloRatingData(provider.aptosClient, account?.address?.toString());
            console.log(playerEloRatingData);
            if(playerEloRatingData.length > 0) {
                setEloRating(playerEloRatingData[0]);
                setWins(playerEloRatingData[1]);
                setLosses(playerEloRatingData[2]);
            }
            setLoading(false);
        }
    }, [account?.address, provider.aptosClient],);


    useEffect(() => {
        fetchPlayerStats();
    }, [fetchPlayerStats]);

    return {
        walletConnected: account?.address?.toString() !== undefined,
        loading,
        wins,
        losses,
        eloRating
    }

}

export default useStats