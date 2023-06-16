import React from 'react';

import GamePageLayout from "@/components/Layout/GamePage";
import AptosArena from "@/components/AptosArena";

import useAptosArena from "@/hooks/useAptosArena";

import arenaControls from "@/data/controls/arenaControls";
import {APTOS_ARENA} from "@/data/games";

export default function HomePage() {

    const { title, description } = APTOS_ARENA

    return (
        <GamePageLayout
            gameHook={useAptosArena}
            headerText={title}
            subHeaderText={description}
            controls={arenaControls}
            beforeGame={<AptosArena />}
        />
    )
}
