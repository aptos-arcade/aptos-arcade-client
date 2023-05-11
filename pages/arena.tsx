import React from 'react';

import useAptosArena from "@/hooks/useAptosArena";

import GamePageLayout from "@/components/Layout/GamePage";
import arenaControls from "@/data/controls/arenaControls";
import {APTOS_ARENA} from "@/data/games";
import Fighters from "@/components/Characters";

export default function HomePage() {

    const { title, description } = APTOS_ARENA

    return (
        <GamePageLayout
            gameHook={useAptosArena}
            headerText={title}
            subHeaderText={description}
            controls={arenaControls}
        >
            <Fighters unload={async () => {}} />
        </GamePageLayout>
    )
}
