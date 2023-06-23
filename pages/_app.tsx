import React, {useEffect, useState} from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/press-start-2p";

import theme from "@/theme";

import { AptosWalletAdapterProvider, Wallet } from "@aptos-labs/wallet-adapter-react";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";

import type { AppProps } from 'next/app'
import Head from "next/head";
import {AptosProvider} from "@/contexts/AptosContext";

export default function App({ Component, pageProps }: AppProps) {

    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setWallets([
            new PontemWallet(),
            new RiseWallet(),
            new PetraWallet(),
            new MartianWallet(),
        ])
        setLoaded(true);
    }, [])

    if (!loaded) {
        return null;
    }

  return (
      <AptosWalletAdapterProvider
          plugins={wallets}
          autoConnect={true}
      >
          <AptosProvider>
              <ChakraProvider theme={theme}>
                  <Head>
                      <title>Aptos Arcade</title>
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                      <meta name="description" content="Arcade-style multiplayer games on Aptos" />
                      <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <Component {...pageProps} />
              </ChakraProvider>
          </AptosProvider>
    </AptosWalletAdapterProvider>
  )
}
