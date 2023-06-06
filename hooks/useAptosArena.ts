import {useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useGame from "@/hooks/game/useGameData";

import {GameHook} from "@/types/GameHook";

const useAptosArena: GameHook = () => {

    const [walletManagerActive, setWalletManagerActive] = useState<boolean>(false);

    const { account } = useWallet();

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate,
        sendMessage
    } = useGame("arena");

    useEffect(() => {
        if(isLoaded) {
            sendMessage("WalletManager", "SetAccountAddress", account?.address?.toString() || "");
        }
    }, [account?.address, isLoaded, sendMessage, walletManagerActive]);

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    }
}

export default useAptosArena