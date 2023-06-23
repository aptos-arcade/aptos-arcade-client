import type { NextApiRequest, NextApiResponse } from 'next'

import { Network } from "aptos";

import {getPlayerMeleeWeaponData} from "@/services/viewFunctions";
import {getAptosClient} from "@/services/aptosClients";

import {MeleeWeaponData} from "@/types/PlayerData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MeleeWeaponData>
) {
    const meleeWeaponData = await getPlayerMeleeWeaponData(
        getAptosClient(Network.MAINNET),
        req.query.accountAddress as string
    );
    res.status(200).json(meleeWeaponData)
}


