import React from 'react';

import GamePageLayout from "@/components/Layout/GamePage";

import useAptosShowdown from "@/hooks/useAptosShowdown";


export default function HomePage() {

    const {
        showdownUnityProvider,
        showdownIsLoaded,
        showdownRequestFullscreen,
        showdownUnload,
    } = useAptosShowdown();

    return (
        <GamePageLayout
            unload={showdownUnload}
            isLoaded={showdownIsLoaded}
            unityProvider={showdownUnityProvider}
            requestFullscreen={showdownRequestFullscreen}
            headerText={"Aptos Showdown"}
            subHeaderText={"3D First Person Shooter"}
        />
    )
}
