import { useState, useEffect, useCallback } from 'react'

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import {Token} from "@/types/Token";

const useOwnedNFTs = (collectionIdHash = "") => {
    const { account } = useWallet();

    const [loading, setLoading] = useState<boolean>(true);
    const [ownedNFTs, setOwnedNFTs] = useState<Token[]>([]);

    const fetchOwnedNFTs = useCallback(async (address: string) => {
        const response = await fetch(`/api/nfts/${address}`)
        const json = await response.json()
        setOwnedNFTs(json.tokens
            .filter((token: Token) => collectionIdHash === "" || token.collectionIdHash === collectionIdHash)
        )
        setLoading(false);
    }, [collectionIdHash])

    useEffect(() => {
        if(account?.address) {
            fetchOwnedNFTs(account.address.toString())
        }
    }, [account, fetchOwnedNFTs])

    return {
        ownedNFTs,
        loading
    };
}

export default useOwnedNFTs