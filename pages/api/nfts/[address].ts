import type { NextApiRequest, NextApiResponse } from 'next'

import fighters from "@/data/fighters";

import {Token} from "@/types/Token";

type Data = {
    tokens: Token[]
}

interface MoralisNFTData {
    creator_address: string,
    collection_name: string,
    name: string,
    property_version: string,
    amount: string,
    collection_data_id_hash: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { address } = req.query;
    const tokens: Token[] = await fetch(
        getQueryString(address as string, fighters.map(fighter => fighter.collectionIdHash)),
    {
            method: 'GET',
            headers: {
                accept: 'application/json',
                "X-API-KEY": process.env.MORALIS_API_KEY as string,
            },
        }
    )
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
    res.status(200).json({ tokens })
}

const getQueryString = (address: string, collections: string[]) => {
    const collectionWhitelist = collections.map((collection, index) => `collection_whitelist%5B${index}%5D=${collection}`).join('&');
    return `https://mainnet-aptos-api.moralis.io/wallets/nfts?limit=100&owner_addresses%5B0%5D=${address}&${collectionWhitelist}`;
}
