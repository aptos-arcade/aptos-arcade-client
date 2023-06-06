import type { NextApiRequest, NextApiResponse } from 'next'

import {getTokens} from "@/services/moralis";


type Data = {
    hasNFT: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { collectionIdHash, address } = req.query;
    const tokens = await getTokens(address as string, [collectionIdHash as string]);
    res.status(200).json({ hasNFT: tokens.length > 0 })
}


