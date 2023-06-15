import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {useAptos} from "@/contexts/AptosContext";

import {equipCharacterPayload} from "@/services/transactionBuilder";

import {TokenData} from "@/types/TokenData";

const useCharacters = () => {

    const { provider } = useAptos();

    const { account } = useWallet();

    const { submitTransaction } = useAptosTransaction()

    const [characters, setCharacters] = useState<TokenData[]>([]);

    const fetchCharacters = useCallback(async () => {
        if(account?.address?.toString()) {
            const supportedCollections = [
                '0xda59e5f610419f274a20341fb198bf98415712de11a4468cfd45cbe495600c2a',
                '0xe6a7399d10406b993e25d8a3bf24842413ba8f1a08444dbfa5f1c31b09f0d16e',
                '0xb0c10aba073b4ed474fa9615df596f9e9a689b8b9482bae5ae2832fab970a42d',
                '0xbc79c099fc7d0f853d8b9d69f34138c07bbb0caf3b75ee70d163e524153c8561',
                '0x7ac8cecb76edbbd5da40d719bbb9795fc5744e4098ee0ce1be4bb86c90f42301',
                '0xaece05d29c0b543be608d73c44d8bb46a09e18e06097f7fdec078689e52ed118',
                '0xa23b49b39acacce0adbcc328f94b910eb4adf7aa3258e7362cfbf2be505e1ec7'
            ]
            const tokens = await provider.indexerClient.getOwnedTokens(account.address.toString());
            setCharacters(tokens
                .current_token_ownerships_v2
                .filter((token) => {
                    let collection_id = token.current_token_data?.current_collection?.collection_id;
                    return collection_id && supportedCollections.includes(collection_id);
                })
                .map((token) => ({
                    name: token.current_token_data?.token_name || "",
                    collection_name: token.current_token_data?.current_collection?.collection_name || "",
                    creator_address: token.current_token_data?.current_collection?.creator_address || "",
                    property_version: token.property_version_v1 || 0
                }))
            );
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
            title: `You successfully equipped ${character.name}!`,
        });
    }

    return {
        characters,
        equipCharacter
    }
}

export default useCharacters