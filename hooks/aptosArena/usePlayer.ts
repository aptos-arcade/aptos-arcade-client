import {useState, useEffect, useCallback} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import { mintPlayerPayload,} from "@/services/transactionBuilder";
import {
    getPlayerCharacterData,
    getPlayerMeleeWeaponData,
    getPlayerRangedWeaponData,
    getPlayerTokenAddress
} from "@/services/viewFunctionBuilder";

import {useAptos} from "@/contexts/AptosContext";

import {meleeWeaponNames} from "@/data/meleeWeapons";
import {rangedWeaponNames} from "@/data/rangedWeapons";

import {TokenData} from "@/types/TokenData";
import {MeleeWeaponData} from "@/types/MeleeWeapon";
import {RangedWeaponData} from "@/types/RangedWeapon";

const usePlayer = () => {

    let { provider } = useAptos();

    let { account } = useWallet();

    let { submitTransaction } = useAptosTransaction();

    const [loading, setLoading] = useState(true);
    const [playerTokenAddress, setPlayerTokenAddress] = useState("");
    const [playerCharacter, setPlayerCharacter] = useState<TokenData>();
    const [playerMeleeWeapon, setPlayerMeleeWeapon] = useState<MeleeWeaponData>();
    const [playerRangedWeapon, setPlayerRangedWeapon] = useState<RangedWeaponData>();


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
                    creator_address: playerCharacter[0],
                    collection_name: playerCharacter[1],
                    name: playerCharacter[2],
                    property_version: 0
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

    const fetchPlayerRangedWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerRangedWeapon = await getPlayerRangedWeaponData(provider.aptosClient, account?.address?.toString());
            if(playerRangedWeapon.length > 0) {
                setPlayerRangedWeapon({
                    power: playerRangedWeapon[0],
                    name: rangedWeaponNames[playerRangedWeapon[1] - 1],
                    weaponType: playerRangedWeapon[1],
                })
            }
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerRangedWeapon();
    }, [fetchPlayerRangedWeapon]);

    const createPlayer = async () => {
        await submitTransaction(mintPlayerPayload, {
            title: "Brawler Created",
        });
    }

    return {
        walletConnected: Boolean(account?.address?.toString()),
        createPlayer,
        loading,
        playerTokenAddress,
        playerCharacter,
        playerMeleeWeapon,
        playerRangedWeapon
    }
}

export default usePlayer;