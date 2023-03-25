import React, {useCallback, useEffect} from 'react';

import dynamic from "next/dynamic";

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Fighters from '@/components/Characters';
import {useRouter} from "next/router";
import {useUnityContext} from "react-unity-webgl";
const Game = dynamic(() => import('@/components/Game'), {
    ssr: false,
})

export default function HomePage() {

    const {unityProvider, isLoaded, requestFullscreen, unload} = useUnityContext({
        loaderUrl: "/build/AptosArena.loader.js",
        dataUrl: "/build/AptosArena.data",
        frameworkUrl: "/build/AptosArena.framework.js",
        codeUrl: "/build/AptosArena.wasm"
    });

    const router = useRouter();

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

  return (
      <Layout>
          <Header />
          <Fighters
                unload={unload}
          />
          <Game
              unityProvider={unityProvider}
              isLoaded={isLoaded}
              requestFullscreen={requestFullscreen}
          />
      </Layout>
  )
}
