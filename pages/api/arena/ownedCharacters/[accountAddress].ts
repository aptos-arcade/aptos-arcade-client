import type {NextApiRequest, NextApiResponse} from 'next'

import {Network} from "aptos";

import {getAptosProvider} from "@/services/aptosClients";
import {getAptosArenaOwnedTokens} from "@/services/ownedTokens";

import {TokenData} from "@/types/TokenData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TokenData[]>
) {
    const provider = getAptosProvider(Network.MAINNET);
    const tokens = await getAptosArenaOwnedTokens(provider.indexerClient, req.query.accountAddress as string);
    res.status(200).send(tokens);
}


