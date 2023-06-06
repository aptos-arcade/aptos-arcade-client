import type { NextApiRequest, NextApiResponse } from 'next'

import {getTokens} from "@/services/moralis";

import characters from "@/data/characters";

import {Token} from "@/types/Token";

type Data = {
    tokens: Token[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { address } = req.query;
    const tokens = await getTokens(address as string, characters.map(character => character.collectionIdHash));
    res.status(200).json({ tokens })
}
