import type { NextApiRequest, NextApiResponse } from 'next'

import { Network } from "aptos";

import { getPlayerData } from "@/services/viewFunctions";
import { getAptosClient } from "@/services/aptosClients";
import {PlayerData} from "@/types/PlayerData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PlayerData>
) {
    const playerData = await getPlayerData(
        getAptosClient(Network.MAINNET),
        req.query.accountAddress as string
    );
    res.status(200).json(playerData)
}


