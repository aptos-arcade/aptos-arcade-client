import {useUnityContext} from "react-unity-webgl";

const useAptosShowdown = () => {

    const {
        unityProvider: showdownUnityProvider,
        isLoaded: showdownIsLoaded,
        requestFullscreen: showdownRequestFullscreen,
        unload: showdownUnload,
    } = useUnityContext({
        loaderUrl: "/build/showdown/Web.loader.js",
        dataUrl: "/build/showdown/Web.data",
        frameworkUrl: "/build/showdown/Web.framework.js",
        codeUrl: "/build/showdown/Web.wasm"
    });

    return {
        showdownUnityProvider,
        showdownIsLoaded,
        showdownRequestFullscreen,
        showdownUnload
    }
}

export default useAptosShowdown;