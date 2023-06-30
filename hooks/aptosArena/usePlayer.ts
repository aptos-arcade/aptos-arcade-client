import {useState, useEffect, useCallback} from "react";

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import {
    getPlayerCharacterData,
    getPlayerMeleeWeaponData,
    getPlayerRangedWeaponData,
    getPlayerBrawlerTokenAddress
} from "@/services/viewFunctions";

import {useAptos} from "@/contexts/AptosContext";

import {CharacterData, MeleeWeaponData, RangedWeaponData} from "@/types/PlayerData";

const usePlayer = () => {

    let { provider } = useAptos();

    let { account } = useWallet();

    const [loading, setLoading] = useState(true);
    const [playerTokenAddress, setPlayerTokenAddress] = useState("");
    const [playerCharacter, setPlayerCharacter] = useState<CharacterData>();
    const [playerMeleeWeapon, setPlayerMeleeWeapon] = useState<MeleeWeaponData>();
    const [playerRangedWeapon, setPlayerRangedWeapon] = useState<RangedWeaponData>();


    const fetchPlayerTokenAddress = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerTokenAddress = await getPlayerBrawlerTokenAddress(provider.aptosClient, account.address.toString());
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
            setPlayerCharacter(playerCharacter);
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerCharacter();
    }, [fetchPlayerCharacter]);

    const fetchPlayerMeleeWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerMeleeWeapon = await getPlayerMeleeWeaponData(provider.aptosClient, account?.address?.toString());
            setPlayerMeleeWeapon(playerMeleeWeapon)
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerMeleeWeapon();
    }, [fetchPlayerMeleeWeapon]);

    const fetchPlayerRangedWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const playerRangedWeapon = await getPlayerRangedWeaponData(provider.aptosClient, account?.address?.toString());
            setPlayerRangedWeapon(playerRangedWeapon)
        }
    }, [account?.address, provider.aptosClient]);

    useEffect(() => {
        fetchPlayerRangedWeapon();
    }, [fetchPlayerRangedWeapon]);



    return {
        walletConnected: Boolean(account?.address?.toString()),
        loading,
        playerTokenAddress,
        playerCharacter,
        playerMeleeWeapon,
        playerRangedWeapon
    }
}

export default usePlayer;