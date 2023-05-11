import {UnityProvider} from "react-unity-webgl/distribution/types/unity-provider";

export type GameHook = () => {
    unityProvider: UnityProvider;
    isLoaded: boolean;
    requestFullscreen: (enabled: boolean) => void;
    navigate: (path: string) => void;
};