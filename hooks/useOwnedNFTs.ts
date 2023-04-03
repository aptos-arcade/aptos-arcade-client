import { useState, useEffect, useCallback } from 'react'

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import {Token} from "@/types/Token";

const useOwnedNFTs = (collectionIdHash = "") => {
    const { account } = useWallet();

    const [loading, setLoading] = useState<boolean>(true);
    const [ownedNFTs, setOwnedNFTs] = useState<Token[]>([]);

    const getOwnedNFTs = async (address: string): Promise<Token[]> => {
        const response = await fetch(`/api/nfts/${address}`)
        const json = await response.json();
        return json.tokens
            .filter((token: Token) => collectionIdHash === "" || token.collectionIdHash === collectionIdHash)
    }

    const fetchOwnedNFTs = useCallback(async (address: string) => {
        setLoading(true);
        const ownedNFTs = await getOwnedNFTs(address);
        setOwnedNFTs(ownedNFTs);
        setLoading(false);
    }, [collectionIdHash])

    useEffect(() => {
        if(account?.address) {
            fetchOwnedNFTs(account.address.toString())
        }
    }, [account, fetchOwnedNFTs])

    return {
        getOwnedNFTs,
        ownedNFTs,
        loading
    };
}

export default useOwnedNFTs