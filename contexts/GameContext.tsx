import { createContext, ReactNode, FC, useContext, useState } from "react"

import {UnityProvider} from "react-unity-webgl/distribution/types/unity-provider";
import useGameData from "@/hooks/game/useGameData";

interface ContextType {
    unityProvider: UnityProvider | null;
    isLoaded: boolean;
    requestFullscreen: (enabled: boolean) => void;
    navigate: (path: string) => void;
}
export const GameContext = createContext<ContextType>({
    unityProvider: null,
    isLoaded: false,
    requestFullscreen: () => {},
    navigate: () => {}
});

export const useGame = () => useContext(GameContext);

interface GameContextProps {
    children: ReactNode;
}

export const GameProvider : FC<GameContextProps> = ({ children }) => {

    const [gameSlug, _setGameSlug] = useState<string>("");

    const { unityProvider, isLoaded, requestFullscreen, navigate } = useGameData(gameSlug);

    return (
        <GameContext.Provider
            value={{
                unityProvider,
                isLoaded,
                requestFullscreen,
                navigate
            }}
        >
            {children}
        </GameContext.Provider>
    )
}