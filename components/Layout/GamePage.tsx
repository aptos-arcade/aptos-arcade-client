import React from 'react';


import Layout from "@/components/Layout/index";
import Header from "@/components/Header";
import Game from "@/components/Game";

import { Controls } from "@/types/Controls";
import {GameHook} from "@/types/GameHook";
import {Divider} from "@chakra-ui/react";

interface Props {
    gameHook: GameHook
    headerText: string,
    subHeaderText: string,
    controls: Controls[]
    beforeGame?: React.ReactNode,
    afterGame?: React.ReactNode,
}

const GamePageLayout: React.FC<Props> = ({ gameHook, headerText, subHeaderText, controls, beforeGame, afterGame  }) => {

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
    } = gameHook();

    return (
        <Layout>
            <Header
                headerText={headerText}
                subHeaderText={subHeaderText}
            />
            <Divider />
            {beforeGame}
            {beforeGame && <Divider />}
            <Game
                unityProvider={unityProvider}
                isLoaded={isLoaded}
                requestFullscreen={requestFullscreen}
                controls={controls}
            />
            {afterGame && <Divider />}
            {afterGame}
        </Layout>
    );
};

export default GamePageLayout;
