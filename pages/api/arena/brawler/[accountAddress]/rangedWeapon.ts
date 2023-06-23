import type { NextApiRequest, NextApiResponse } from 'next'

import { Network } from "aptos";

import {getPlayerRangedWeaponData} from "@/services/viewFunctions";
import {getAptosClient} from "@/services/aptosClients";

import {RangedWeaponData} from "@/types/PlayerData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<RangedWeaponData>
) {
    const rangedWeaponData = await getPlayerRangedWeaponData(
        getAptosClient(Network.MAINNET),
        req.query.accountAddress as string
    );
    res.status(200).json(rangedWeaponData)
}


