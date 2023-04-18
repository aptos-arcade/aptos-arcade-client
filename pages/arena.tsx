import React from 'react';

import useAptosArena from "@/hooks/useAptosArena";

import GamePageLayout from "@/components/Layout/GamePage";

export default function HomePage() {

    const {
        arenaUnityProvider,
        arenaIsLoaded,
        arenaRequestFullscreen,
        arenaUnload,
    } = useAptosArena();

    return (
        <GamePageLayout
            unload={arenaUnload}
            isLoaded={arenaIsLoaded}
            unityProvider={arenaUnityProvider}
            requestFullscreen={arenaRequestFullscreen}
            headerText={"Aptos Arena"}
            subHeaderText={"2D platform fighter game"}
        />
    )
}
