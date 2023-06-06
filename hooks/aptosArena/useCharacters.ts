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
            const tokens = await provider.indexerClient.getAccountNFTs(account.address.toString());
            console.log(tokens.current_token_ownerships)
            const query = await provider.indexerClient.queryIndexer<TokenDataQuery>({
                query: `query TokenOwnership($owner_address: String, $token_data_id_hash: [String]) {
                  current_token_ownerships(
                    where: {token_data_id_hash: {_in: $token_data_id_hash}, owner_address: {_eq: $owner_address}}
                  ) {
                    name
                    collection_name
                    creator_address
                    property_version
                  }
                }`,
                variables: {
                    "owner_address": account.address.toString(),
                    "token_data_id_hash": [
                        "2b3602546519aa29cf9668a30a255a668b91c4814332165476fb0a78114dcd26",
                        "2ff6da7d980b29bc0a937acbfa9a15ca024037ff1913f2b9023934ec6ed6ba8b",
                        "cd70caeb1b1805aca193a635b3ddd28f58cd6011cf1cec6049d012e64623af6e",
                        "1d3cb7c3714f02cc30c74a04ab35358f9f7e029c29416fe7d9b4cf8a450555ee",
                        "4f95e93c16f7ea56d1e20067e6c28c02df2ad91fef6f517484d8b5c120c4b73b",
                        "9a5c4ae986d8d18b773e6fbad6a88abb01325fe1e40ce0d64b3b97559f297302",
                        "769cf4352de8ccf48e3d343c156a5dd942ff5ce182a43fc7c30ff8fa1fd41467",
                    ]
                }
            })
            console.log(query)
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