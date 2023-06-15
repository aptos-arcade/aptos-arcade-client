import {useCallback, useEffect, useState} from "react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useAptosTransaction from "@/hooks/useAptosTransaction";

import {useAptos} from "@/contexts/AptosContext";

import {
    getHasPlayerMintedRangedWeapon,
    getRangedWeaponCollectionAddress,
    getRangedWeaponData
} from "@/services/viewFunctionBuilder";
import {
    equipRangedWeaponPayload, mintAndEquipRangedWeapon,
} from "@/services/transactionBuilder";

import {rangedWeaponNames} from "@/data/rangedWeapons";

import {RangedWeapon} from "@/types/RangedWeapon";

const useRangedWeapons = () => {

    let { provider } = useAptos();

    let { account } = useWallet();

    let { submitTransaction } = useAptosTransaction();

    const [hasPlayerMintedLoading, setHasPlayerMintedLoading] = useState(true);
    const [hasPlayerMintedRangedWeapon, setHasPlayerMintedRangedWeapon] = useState(false);

    const [rangedWeaponsLoading, setRangedWeaponsLoading] = useState(true);
    const [rangedWeapons, setRangedWeapons] = useState<RangedWeapon[]>([]);

    const fetchPlayerHasMintedRangedWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const hasPlayerMintedRangedWeapon = await getHasPlayerMintedRangedWeapon(provider.aptosClient, account.address.toString());
            setHasPlayerMintedRangedWeapon(hasPlayerMintedRangedWeapon);
            setHasPlayerMintedLoading(false);
        }
    }, [account?.address, provider.aptosClient])

    useEffect(() => {
        fetchPlayerHasMintedRangedWeapon();
    }, [fetchPlayerHasMintedRangedWeapon])

    const fetchRangedWeapons = useCallback(async () => {
        if(account?.address?.toString()) {
            const collectionAddress = await getRangedWeaponCollectionAddress(provider.aptosClient);
            const tokens = await provider.indexerClient.getTokenOwnedFromCollectionAddress(
                account.address.toString(),
                collectionAddress
            );
            const RangedWeapons = await Promise.all(tokens.current_token_ownerships_v2.map((token) => {
                return getRangedWeaponData(provider.aptosClient, token.storage_id)
            }))
            setRangedWeapons(RangedWeapons.map(([power, type], index) => ({
                address: tokens.current_token_ownerships_v2[index].storage_id,
                weaponType: type,
                power: power,
                name: rangedWeaponNames[type - 1]
            })));
            setRangedWeaponsLoading(false);
        }
    }, [account?.address, provider.aptosClient, provider.indexerClient])

    useEffect(() => {
        fetchRangedWeapons();
    }, [fetchRangedWeapons]);

    const mintRangedWeapon = async () => {
        await submitTransaction(mintAndEquipRangedWeapon, {
            title: "Ranged weapon minted!",
        });
    }

    const equipRangedWeapon = async (RangedWeaponAddress: string) => {
        await submitTransaction(equipRangedWeaponPayload(RangedWeaponAddress), {
            title: "Ranged weapon equipped!",
        });
    }

    return {
        mintRangedWeapon,
        equipRangedWeapon,
        hasPlayerMintedLoading,
        hasPlayerMintedRangedWeapon,
        rangedWeaponsLoading,
        rangedWeapons
    }
}

export default useRangedWeapons