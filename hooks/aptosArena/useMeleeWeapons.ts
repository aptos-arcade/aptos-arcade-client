import {useAptos} from "@/contexts/AptosContext";
import {useWallet} from "@manahippo/aptos-wallet-adapter";
import useAptosTransaction from "@/hooks/useAptosTransaction";
import {useCallback, useEffect, useState} from "react";
import {MeleeWeapon} from "@/types/MeleeWeapon";
import {
    getHasPlayerMintedMeleeWeapon,
    getMeleeWeaponCollectionAddress,
    getMeleeWeaponData
} from "@/services/viewFunctionBuilder";
import {equipMeleeWeaponPayload, mintMeleeWeaponPayload} from "@/services/transactionBuilder";
import {meleeWeaponNames} from "@/data/meleeWeapons";

const useMeleeWeapons = () => {

    let { provider } = useAptos();

    let { account } = useWallet();

    let { submitTransaction } = useAptosTransaction();


    const [hasPlayerMintedLoading, setHasPlayerMintedLoading] = useState(true);
    const [hasPlayerMintedMeleeWeapon, setHasPlayerMintedMeleeWeapon] = useState(false);

    const [meleeWeaponsLoading, setMeleeWeaponsLoading] = useState(true);
    const [meleeWeapons, setMeleeWeapons] = useState<MeleeWeapon[]>([]);

    const fetchPlayerHasMintedMeleeWeapon = useCallback(async () => {
        if(account?.address?.toString()) {
            const hasPlayerMintedMeleeWeapon = await getHasPlayerMintedMeleeWeapon(provider.aptosClient, account.address.toString());
            setHasPlayerMintedMeleeWeapon(hasPlayerMintedMeleeWeapon);
            setHasPlayerMintedLoading(false);
        }
    }, [account?.address, provider.aptosClient])

    useEffect(() => {
        fetchPlayerHasMintedMeleeWeapon();
    }, [fetchPlayerHasMintedMeleeWeapon])

    const fetchMeleeWeapons = useCallback(async () => {
        if(account?.address?.toString()) {
            const collectionAddress = await getMeleeWeaponCollectionAddress(provider.aptosClient);
            const tokens = await provider.indexerClient.getTokenOwnedFromCollectionAddress(
                account.address.toString(),
                collectionAddress
            );
            const meleeWeapons = await Promise.all(tokens.current_token_ownerships_v2.map((token) => {
                return getMeleeWeaponData(provider.aptosClient, token.storage_id)
            }))
            setMeleeWeapons(meleeWeapons.map(([type, power], index) => {
                return {
                    address: tokens.current_token_ownerships_v2[index].storage_id,
                    weaponType: type,
                    power: power,
                    name: meleeWeaponNames[type - 1]
                }
            }));
            setMeleeWeaponsLoading(false);
        }
    }, [account?.address, provider.aptosClient, provider.indexerClient])

    useEffect(() => {
        fetchMeleeWeapons();
    }, [fetchMeleeWeapons]);

    const mintMeleeWeapon = async () => {
        await submitTransaction(mintMeleeWeaponPayload, {
            title: "Melee weapon created",
            description: "Melee weapon created"
        });
    }

    const equipMeleeWeapon = async (meleeWeaponAddress: string) => {
        await submitTransaction(equipMeleeWeaponPayload(meleeWeaponAddress), {
            title: "Melee weapon created",
            description: "Melee weapon created"
        });
    }

    return {
        mintMeleeWeapon,
        equipMeleeWeapon,
        hasPlayerMintedLoading,
        hasPlayerMintedMeleeWeapon,
        meleeWeaponsLoading,
        meleeWeapons
    }
}

export default useMeleeWeapons