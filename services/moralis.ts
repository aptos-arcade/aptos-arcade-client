import {Token} from "@/types/Token";

import {MoralisNFTData} from "@/types/MoralisNftData";

export const getTokens = async (address: string, collectionIdHashes: string[]): Promise<Token[]> => {
    return fetch(getQueryString(address, collectionIdHashes), {
        method: 'GET',
        headers: {
            accept: 'application/json',
            "X-API-KEY": process.env.MORALIS_API_KEY as string,
        },
    })
        .then(response => response.json())
        .then(data => data.result
            .filter((nftData: MoralisNFTData) => parseInt(nftData.amount) > 0)
            .map((nftData: MoralisNFTData) => ({
                    creator: nftData.creator_address,
                    collection: nftData.collection_name,
                    name: nftData.name,
                    propertyVersion: parseInt(nftData.property_version),
                    collectionIdHash: nftData.collection_data_id_hash,
                })
            ))
        .catch(_ => []);

}


const getQueryString = (address: string, collections: string[]) => {
    const collectionWhitelist = collections.map((collection, index) => `collection_whitelist%5B${index}%5D=${collection}`).join('&');
    return `https://mainnet-aptos-api.moralis.io/wallets/nfts?limit=100&owner_addresses%5B0%5D=${address}&${collectionWhitelist}`;
}