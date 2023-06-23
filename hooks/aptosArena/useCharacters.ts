import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {useAptos} from "@/contexts/AptosContext";

import {equipCharacterPayload} from "@/services/transactionBuilder";

import {TokenData} from "@/types/TokenData";
import {getAptosArenaOwnedTokens} from "@/services/ownedTokens";

const useCharacters = () => {

    const { provider } = useAptos();

    const { account } = useWallet();

    const { submitTransaction } = useAptosTransaction()

    const [characters, setCharacters] = useState<TokenData[]>([]);

    const fetchCharacters = useCallback(async () => {
        if(account?.address?.toString()) {
            const tokens = await getAptosArenaOwnedTokens(provider.indexerClient, account.address.toString());
            setCharacters(tokens);
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