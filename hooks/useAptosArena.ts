import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import {useUnityContext} from "react-unity-webgl";
import useOwnedNFTs from "@/hooks/useOwnedNFTs";
import {getCharacterEnumValueByCollectionIdHash} from "@/data/characters";

const useGame = () => {

    const [walletManagerActive, setWalletManagerActive] = useState<boolean>(false);

    const { account } = useWallet();

    const { ownedNFTs } = useOwnedNFTs();

    const {
        unityProvider: arenaUnityProvider,
        isLoaded: arenaIsLoaded,
        requestFullscreen: arenaRequestFullscreen,
        unload: arenaUnload,
        addEventListener: arenaAddEventListener,
        removeEventListener: arenaRemoveEventListener,
        sendMessage: arenaSendMessage
    } = useUnityContext({
        loaderUrl: "/build/arena/Web.loader.js",
        dataUrl: "/build/arena/Web.data",
        frameworkUrl: "/build/arena/Web.framework.js",
        codeUrl: "/build/arena/Web.wasm"
    });

    const updateRankedCharacters = useCallback(async () => {
        if(account?.address?.toString() !== undefined) {
            arenaSendMessage("RankedCharacterSelectManager", "RemoveCharacters");
            const characterEnums = ownedNFTs
                .map((nft) => getCharacterEnumValueByCollectionIdHash(nft.collectionIdHash))
                .filter((characterEnum) => characterEnum > -1)
            // @ts-ignore
            const uniqueCharacterEnums = [...new Set(characterEnums)];
            uniqueCharacterEnums.forEach((characterEnum) => {
                arenaSendMessage("RankedCharacterSelectManager", "AddCharacter", characterEnum);
            });
        }
    }, [account?.address, ownedNFTs, arenaSendMessage]);

    const handleWalletScreenLoad = useCallback(() => {
        setWalletManagerActive(true);
    }, []);

    const handleRankedCharacterSelectScreenLoad = useCallback(() => {
        updateRankedCharacters();
    }, [updateRankedCharacters]);

    useEffect(() => {
        arenaAddEventListener("WalletScreenLoad", handleWalletScreenLoad);
        arenaAddEventListener("RankedCharacterSelectScreenLoad", handleRankedCharacterSelectScreenLoad);

        return () => {
            arenaRemoveEventListener("WalletScreenLoad", handleWalletScreenLoad);
            arenaRemoveEventListener("RankedCharacterSelectScreenLoad", handleRankedCharacterSelectScreenLoad);
        };
    }, [arenaAddEventListener, arenaRemoveEventListener, handleRankedCharacterSelectScreenLoad, handleWalletScreenLoad]);

    useEffect(() => {
        if(walletManagerActive && account?.address?.toString() !== undefined) {
            arenaSendMessage("WalletManager", "SetAccountAddress", account.address.toString());
        }
    }, [account?.address, arenaSendMessage, updateRankedCharacters, walletManagerActive]);

    useEffect(() => {
        updateRankedCharacters();
    }, [ownedNFTs, updateRankedCharacters]);

    return {
        arenaUnityProvider,
        arenaIsLoaded,
        arenaRequestFullscreen,
        arenaUnload,
    }
}

export default useGame