import {ChangeEvent, useState} from "react";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {aptosArenaModuleAddress} from "@/data/moduleAddresses";

import {Token} from "@/types/Token";

const useGrantCapability = (capability: 'casual' | 'ranked', token: Token) => {

    const [address, setAddress] = useState<string>("");

    const { submitTransaction } = useAptosTransaction();

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

    const grantCapability = async () => {
        await submitTransaction({
            type: 'entry_function_payload',
            function: `${aptosArenaModuleAddress}::game_capabilities::grant_${capability}_capability`,
            arguments: [
                address,
                token.creator,
                token.collection,
                token.name,
                token.propertyVersion
            ],
            type_arguments: [],
        }, {
            title: `Granted ${capability} capability`,
        })
    }

    return {
        address,
        handleAddressChange,
        grantCapability,
    }
}

export default useGrantCapability;