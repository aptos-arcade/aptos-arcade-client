import { SUPPORTED_NETWORKS } from "@/data/supportedNetworks";

import { SupportedNetwork } from "@/types/SupportedNetwork";

export const getNetworkSlug = (networkName: string | undefined): SupportedNetwork | undefined => {
    if (!networkName) return undefined;
    for(const network of SUPPORTED_NETWORKS) {
        if (networkName.toLowerCase().includes(network)) {
            return network;
        }
    }
    return undefined;
}