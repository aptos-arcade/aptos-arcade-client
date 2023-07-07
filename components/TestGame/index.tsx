import React from 'react';

import { Game } from "aptos-arena-package-v1";

import {useWallet} from "@aptos-labs/wallet-adapter-react";

const TestGame = () => {

    const { account, signAndSubmitTransaction } = useWallet();

    const setConnectModalOpen = async (isOpen: boolean) => {
        console.log(isOpen);
    }

    return (
        <Game
            accountAddress={account?.address?.toString()}
            signAndSubmitTransaction={signAndSubmitTransaction}
            setConnectModalOpen={setConnectModalOpen}
        />
    );
};

export default TestGame;
