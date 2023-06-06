import {useState, useEffect, useCallback} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import { mintPlayerPayload,} from "@/services/transactionBuilder";
import {getPlayerCharacterData, getPlayerMeleeWeaponData, getPlayerTokenAddress} from "@/services/viewFunctionBuilder";

import {useAptos} from "@/contexts/AptosContext";

import {TokenData} from "@/types/TokenData";
import {MeleeWeaponData} from "@/types/MeleeWeapon";
import {meleeWeaponNames} from "@/data/meleeWeapons";

const usePlayer = () => {

    let { provider } = useAptos();

    let { account } = useWallet();

    let { submitTransaction } = useAptosTransaction();

    const [loading, setLoading] = useState(true);
    const [playerTokenAddress, setPlayerTokenAddress] = useState("");
    const [playerCharacter, setPlayerCharacter] = useState<TokenData>();
    const [playerMeleeWeapon, setPlayerMeleeWeapon] = useState<MeleeWeaponData>();


    const fetchPlayerTokenAddress = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerTokenAddress = await getPlayerTokenAddress(provider.aptosClient, account.address.toString());
            setPlayerTokenAddress(playerTokenAddress);
            setLoading(false);
        }
    }, [account?.address, provider.aptosClient])


    useEffect(() => {
        fetchPlayerTokenAddress();
    }, [fetchPlayerTokenAddress]);

    const fetchPlayerCharacter = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerCharacter = await getPlayerCharacterData(provider.aptosClient, account?.address?.toString());
            if(playerCharacter.length > 0) {
                setPlayerCharacter({
                    creatorAddress: playerCharacter[0],
                    collectionName: playerCharacter[1],
                    tokenName: playerCharacter[2],
                    propertyVersion: 0
                })
            }
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerCharacter();
    }, [fetchPlayerCharacter]);

    const fetchPlayerMeleeWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerMeleeWeapon = await getPlayerMeleeWeaponData(provider.aptosClient, account?.address?.toString());
            if(playerMeleeWeapon.length > 0) {
                setPlayerMeleeWeapon({
                    power: playerMeleeWeapon[0],
                    name: meleeWeaponNames[playerMeleeWeapon[1] - 1],
                    weaponType: playerMeleeWeapon[1],
                })
            }
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerMeleeWeapon();
    }, [fetchPlayerMeleeWeapon]);

    const createPlayer = async () => {
        await submitTransaction(mintPlayerPayload, {
            title: "Player created",
            description: "Player created"
        });
    }

    return {
        createPlayer,
        loading,
        playerTokenAddress,
        playerCharacter,
        playerMeleeWeapon
    }
}

export default usePlayer;