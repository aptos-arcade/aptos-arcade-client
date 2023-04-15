import React, {useEffect, useState} from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/press-start-2p";

import theme from "@/theme";

import {
    WalletProvider,
    AptosWalletAdapter,
    MartianWalletAdapter,
    PontemWalletAdapter,
    RiseWalletAdapter,
    WalletAdapter
} from "@manahippo/aptos-wallet-adapter";

import type { AppProps } from 'next/app'
import Head from "next/head";
import {AptosProvider} from "@/contexts/AptosContext";

export default function App({ Component, pageProps }: AppProps) {

    const [wallets, setWallets] = useState<WalletAdapter[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setWallets([
            new PontemWalletAdapter(),
            new RiseWalletAdapter(),
            new AptosWalletAdapter(),
            new MartianWalletAdapter(),
        ])
        setLoaded(true);
    }, [])

    if (!loaded) {
        return null;
    }

  return (
      <WalletProvider
          wallets={wallets}
          autoConnect={true}
      >
          <AptosProvider>
              <ChakraProvider theme={theme}>
                  <Head>
                      <title>Shooter Demo</title>
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                      <meta name="description" content="Online multiplayer FPS game" />
                      <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <Component {...pageProps} />
              </ChakraProvider>
          </AptosProvider>
    </WalletProvider>
  )
}
