import {useCallback, useEffect} from "react";

import {useRouter} from "next/router";

import {useUnityContext} from "react-unity-webgl";

const useGameData = (gameSlug: string) => {

    const router = useRouter();

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        unload,
        sendMessage,
        addEventListener,
        removeEventListener
    } = useUnityContext({
        loaderUrl: `/build/${gameSlug}/Web.loader.js`,
        dataUrl: `/build/${gameSlug}/Web.data`,
        frameworkUrl: `/build/${gameSlug}/Web.framework.js`,
        codeUrl: `/build/${gameSlug}/Web.wasm`
    });

    const navigate = async (path: string) => {
        await unload();
        await router.push(path);
    }

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

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        navigate,
        sendMessage,
        addEventListener,
        removeEventListener
    }
}

export default useGameData;