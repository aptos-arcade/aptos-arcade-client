import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useGame from "@/hooks/game/useGameData";
import useOwnedNFTs from "@/hooks/useOwnedNFTs";

import {getCharacterEnumValueByCollectionIdHash} from "@/data/characters";

import {GameHook} from "@/types/GameHook";

const useAptosArena: GameHook = () => {

    const [walletManagerActive, setWalletManagerActive] = useState<boolean>(false);

    const { account } = useWallet();

    const { ownedNFTs } = useOwnedNFTs();

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate,
        addEventListener,
        removeEventListener,
        sendMessage
    } = useGame("arena");

    const updateRankedCharacters = useCallback(async () => {
        if(account?.address?.toString() !== undefined) {
            sendMessage("RankedCharacterSelectManager", "RemoveCharacters");
            const characterEnums = ownedNFTs
                .map((nft) => getCharacterEnumValueByCollectionIdHash(nft.collectionIdHash))
                .filter((characterEnum) => characterEnum > -1)
            // @ts-ignore
            const uniqueCharacterEnums = [...new Set(characterEnums)];
            uniqueCharacterEnums.forEach((characterEnum) => {
                sendMessage("RankedCharacterSelectManager", "AddCharacter", characterEnum);
            });
        }
    }, [account?.address, sendMessage, ownedNFTs]);

    const handleWalletScreenLoad = useCallback(() => {
        setWalletManagerActive(true);
    }, []);

    const handleRankedCharacterSelectScreenLoad = useCallback(() => {
        updateRankedCharacters();
    }, [updateRankedCharacters]);

    useEffect(() => {
        addEventListener("WalletScreenLoad", handleWalletScreenLoad);
        addEventListener("RankedCharacterSelectScreenLoad", handleRankedCharacterSelectScreenLoad);

        return () => {
            removeEventListener("WalletScreenLoad", handleWalletScreenLoad);
            removeEventListener("RankedCharacterSelectScreenLoad", handleRankedCharacterSelectScreenLoad);
        };
    }, [addEventListener, handleRankedCharacterSelectScreenLoad, handleWalletScreenLoad, removeEventListener]);

    useEffect(() => {
        if(walletManagerActive && account?.address?.toString() !== undefined) {
            sendMessage("WalletManager", "SetAccountAddress", account.address.toString());
        }
    }, [account?.address, sendMessage, updateRankedCharacters, walletManagerActive]);

    useEffect(() => {
        updateRankedCharacters();
    }, [ownedNFTs, updateRankedCharacters]);

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    }
}

export default useAptosArena