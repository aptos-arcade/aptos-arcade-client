import {NextApiRequest, NextApiResponse} from "next";

import {HexString, AptosAccount} from "aptos";
import { TransactionPayload_EntryFunctionPayload, UserTransaction } from "aptos/src/generated";

import {createMatch} from "@/services/transactionBuilder";
import {getAptosProvider} from "@/services/aptosClients";

import {aptosArenaModuleAddress} from "@/data/moduleAddresses";

interface Data {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // get the request body json
        const { body } = req;
        if(body.teams === undefined || body.teams.length < 2) {
            res.status(400).json({message: 'Invalid request body'})
            return;
        }
        let { aptosClient } = getAptosProvider();
        const PK_BYTES = new HexString(process.env.APTOS_ARENA_PK as string).toUint8Array()
        const account = new AptosAccount(PK_BYTES);
        let createMatchTransactionPayload = createMatch(body.teams as string[][]) as TransactionPayload_EntryFunctionPayload;
        const txnRequest = await aptosClient.generateTransaction(
            aptosArenaModuleAddress,
            createMatchTransactionPayload
        );
        const signedTxn = await aptosClient.signTransaction(account, txnRequest);
        const transactionRes = await aptosClient.submitTransaction(signedTxn);
        await aptosClient.waitForTransactionWithResult(transactionRes.hash, { checkSuccess: true})
            .then((txRes) =>
                res.status(200).json({message: (txRes as UserTransaction).events[0].data.token}))
            .catch((e) => res.status(400).json({message: e.message}));
    } else {
        res.status(400).json({message: 'Only POST requests allowed'})
    }
}