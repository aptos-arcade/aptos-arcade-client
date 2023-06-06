import { createContext, ReactNode, FC, useContext, useState, useEffect, useCallback } from "react"

import { useWallet } from "@manahippo/aptos-wallet-adapter";

import { Provider } from "aptos";

import {getAptosProvider} from "@/services/aptosClients";
import { getNetworkSlug } from "@/services/network";

import { SupportedNetwork } from "@/types/SupportedNetwork";

interface ContextType {
    provider: Provider;
    network: SupportedNetwork
    updateClient: () => Promise<void>;
}

export const DEFAULT_NETWORK: SupportedNetwork = 'mainnet';

export const AptosContext = createContext<ContextType>({
    provider: getAptosProvider(),
    network: DEFAULT_NETWORK,
    updateClient: async () => {}
});

export const useAptos = () => useContext(AptosContext);

interface AptosContextProps {
    children: ReactNode;
}

export const AptosProvider : FC<AptosContextProps> = ({ children }) => {

    const { network: networkInfo } = useWallet();

    let network = getNetworkSlug(networkInfo?.name) || DEFAULT_NETWORK;

    const [provider, setProvider] = useState<Provider>(getAptosProvider());

    const updateProvider = useCallback(async () => {
        setProvider(getAptosProvider);
    }, [network])

    useEffect(() => {
        updateProvider();
    }, [networkInfo, updateProvider]);
 
    return (
        <AptosContext.Provider
            value={{
                provider,
                network,
                updateClient: updateProvider
            }}
        >
            {children}
        </AptosContext.Provider>
    )
}