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
            const tokens = await provider.indexerClient.getAccountNFTs(account.address.toString());
            console.log(tokens);
            setCharacters(tokens.current_token_ownerships
                .map((token) => ({
                        creatorAddress: token.current_token_data?.creator_address || "",
                        collectionName: token.current_token_data?.collection_name || "",
                        tokenName: token.current_token_data?.name || "",
                        propertyVersion: token.property_version
                    })
                ));
        }
    }, [account?.address, provider.indexerClient])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    const equipCharacter = async (character: TokenData) => {
        await submitTransaction(equipCharacterPayload(
            character.creatorAddress,
            character.collectionName,
            character.tokenName,
            character.propertyVersion
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