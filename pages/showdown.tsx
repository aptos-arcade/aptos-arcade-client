import React from 'react';

import GamePageLayout from "@/components/Layout/GamePage";

import useAptosShowdown from "@/hooks/useAptosShowdown";
import showdownControls from "@/data/controls/showdownControls";
import {APTOS_SHOWDOWN} from "@/data/games";


export default function HomePage() {

    const { title, description } = APTOS_SHOWDOWN;

    return (
        <GamePageLayout
            gameHook={useAptosShowdown}
            headerText={title}
            subHeaderText={description}
            controls={showdownControls}
        />
    )
}
