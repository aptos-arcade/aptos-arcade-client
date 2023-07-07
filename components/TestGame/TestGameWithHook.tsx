import React from 'react';

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import {Unity} from "react-unity-webgl";

import {useGame} from "aptos-arena-package-v1";

const TestGameWithHook = () => {

    const { signAndSubmitTransaction, account } = useWallet();

    const setConnectModalOpen = (isOpen: boolean) => {
        console.log(isOpen);
    }

    const { unityProvider } = useGame({
        accountAddress: account?.address?.toString(),
        signAndSubmitTransaction: signAndSubmitTransaction,
        setConnectModalOpen,
    });

    return (
        <Unity
            unityProvider={unityProvider}
            style={{
                width: '100%',
                aspectRatio: '16/9'
            }}
        />
    );
};

export default TestGameWithHook;