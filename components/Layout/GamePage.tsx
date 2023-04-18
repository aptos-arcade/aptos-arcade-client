import React, {useCallback, useEffect} from 'react';

import {useRouter} from "next/router";

import Layout from "@/components/Layout/index";
import Header from "@/components/Header";
import Game from "@/components/Game";

import {UnityProvider} from "react-unity-webgl/distribution/types/unity-provider";

import { Controls } from "@/types/Controls";

interface Props {
    unload: () => Promise<void>;
    isLoaded: boolean;
    unityProvider: UnityProvider;
    requestFullscreen: (fullscreen: boolean) => void;
    headerText: string,
    subHeaderText: string,
    controls: Controls[]
    preGameComponent?: React.ReactNode,
    postGameComponent?: React.ReactNode,
}

const GamePageLayout: React.FC<Props> = ({ unload, isLoaded, unityProvider, requestFullscreen, headerText, subHeaderText, controls, preGameComponent, postGameComponent}) => {

    const router = useRouter();

    const handleUnload = useCallback(async () => {
        await unload();
        router.back();
    }, [router, unload]);

    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                if (isLoaded) {
                    handleUnload();
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [handleUnload, router, isLoaded]);

    return (
        <Layout>
            <Header
                headerText={headerText}
                subHeaderText={subHeaderText}
            />
            {preGameComponent}
            <Game
                unityProvider={unityProvider}
                isLoaded={isLoaded}
                requestFullscreen={requestFullscreen}
                controls={controls}
            />
            {postGameComponent}
        </Layout>
    );
};

export default GamePageLayout;
