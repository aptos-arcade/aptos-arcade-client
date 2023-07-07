import {useEffect, useCallback} from "react";

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import useGame from "@/hooks/game/useGameData";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {GameHook} from "@/types/GameHook";

const useAptosArena: GameHook = () => {

    const { account } = useWallet();

    const { submitTransaction } = useAptosTransaction();

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate,
        sendMessage,
        addEventListener,
        removeEventListener
    } = useGame("arena");

    useEffect(() => {
        if(isLoaded) {
            sendMessage("WalletManager", "SetAccountAddress", account?.address?.toString() || "");
        }
    }, [account?.address, isLoaded, sendMessage]);

    const onTransactionRequest = useCallback(async (func: string, args: string, typeArgs: string) => {
        const success = await submitTransaction({
            type: "entry_function_payload",
            function: func,
            arguments: args ? args.split(",") : [],
            type_arguments: typeArgs ? typeArgs.split(",") : []
        }, {
            title: "Transaction Submitted!",
        })
        sendMessage("TransactionHandler", "SendTransactionResult", success ? 1 : 0);
    }, [sendMessage, submitTransaction])

    const onSetConnectModalOpen = useCallback(async (isOpen: number) => {
        console.log("onSetConnectModalOpen", isOpen);
    }, [])

    useEffect(() => {
        addEventListener("OnTransactionRequest", onTransactionRequest);
        addEventListener("SetConnectModalOpen", onSetConnectModalOpen);
        return () => {
            removeEventListener("OnTransactionRequest", onTransactionRequest);
            removeEventListener("SetConnectModalOpen", onSetConnectModalOpen);
        };
    }, [addEventListener, onTransactionRequest, onSetConnectModalOpen, removeEventListener]);

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    }
}

export default useAptosArena