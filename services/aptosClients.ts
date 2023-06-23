import {Network, Provider} from "aptos";

export const getAptosClient = (network: Network) => new Provider(network).aptosClient;

export const getAptosProvider = (network: Network) => new Provider(network);