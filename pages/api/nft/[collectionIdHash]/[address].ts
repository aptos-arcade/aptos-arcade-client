import type { NextApiRequest, NextApiResponse } from 'next'

import {getTokens} from "@/services/moralis";

import {Token} from "@/types/Token";


type Data = {
    tokens: Token[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { collectionIdHash, address } = req.query;
    const tokens = await getTokens(address as string, [collectionIdHash as string]);
    res.status(200).json({ tokens })
}


