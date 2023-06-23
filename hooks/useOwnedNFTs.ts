import { useState, useEffect, useCallback } from 'react'

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import {Token} from "@/types/Token";

const useOwnedNFTs = (collectionIdHash = "") => {
    const { account } = useWallet();

    const [loading, setLoading] = useState<boolean>(true);
    const [ownedNFTs, setOwnedNFTs] = useState<Token[]>([]);

    const fetchOwnedNFTs = useCallback(async (address: string) => {
        setLoading(true);
        const response = await fetch(`/api/nfts/${address}`)
        const json = await response.json();
        const ownedNFTs = json.tokens
            .filter((token: Token) => collectionIdHash === "" || token.collectionIdHash === collectionIdHash)
        setOwnedNFTs(ownedNFTs);
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