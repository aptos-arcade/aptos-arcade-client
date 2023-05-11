import useGame from "@/hooks/game/useGameData";
import {GameHook} from "@/types/GameHook";

const useAptosShowdown: GameHook = () => {

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    } = useGame("showdown");

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate
    }
}

export default useAptosShowdown;