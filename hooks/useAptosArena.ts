import {useEffect} from "react";

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import useGame from "@/hooks/game/useGameData";

import {GameHook} from "@/types/GameHook";

const useAptosArena: GameHook = () => {

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
    }, [account?.address, isLoaded, sendMessage]);

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    }
}

export default useAptosArena