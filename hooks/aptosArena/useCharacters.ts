import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {useAptos} from "@/contexts/AptosContext";

import {equipCharacterPayload} from "@/services/transactionBuilder";

import {TokenData, TokenDataQuery} from "@/types/TokenData";

const useCharacters = () => {

    const { provider } = useAptos();

    const { account } = useWallet();

    const { submitTransaction } = useAptosTransaction()

    const [characters, setCharacters] = useState<TokenData[]>([]);

    const fetchCharacters = useCallback(async () => {
        if(account?.address?.toString()) {
            const query = await provider.indexerClient.queryIndexer<TokenDataQuery>({
                query: `query TokenOwnership($owner_address: String, $collection_data_id_hash: [String]) {
                  current_token_ownerships(
                    where: {collection_data_id_hash: {_in: $collection_data_id_hash}, owner_address: {_eq: $owner_address}}
                  ) {
                    name
                    collection_name
                    creator_address
                    property_version
                  }
                }`,
                variables: {
                    "owner_address": account.address.toString(),
                    "collection_data_id_hash": [
                        'da59e5f610419f274a20341fb198bf98415712de11a4468cfd45cbe495600c2a',
                        'e6a7399d10406b993e25d8a3bf24842413ba8f1a08444dbfa5f1c31b09f0d16e',
                        'b0c10aba073b4ed474fa9615df596f9e9a689b8b9482bae5ae2832fab970a42d',
                        'bc79c099fc7d0f853d8b9d69f34138c07bbb0caf3b75ee70d163e524153c8561',
                        '7ac8cecb76edbbd5da40d719bbb9795fc5744e4098ee0ce1be4bb86c90f42301',
                        'aece05d29c0b543be608d73c44d8bb46a09e18e06097f7fdec078689e52ed118',
                        'a23b49b39acacce0adbcc328f94b910eb4adf7aa3258e7362cfbf2be505e1ec7'
                    ]
                }
            })
            setCharacters(query.current_token_ownerships);
        }
    }, [account?.address, provider.indexerClient])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    const equipCharacter = async (character: TokenData) => {
        await submitTransaction(equipCharacterPayload(
            character.creator_address,
            character.collection_name,
            character.name,
            character.property_version
        ), {
            title: "Character equipped",
            description: "Character equipped"
        });
    }

    return {
        characters,
        equipCharacter
    }
}

export default useCharacters