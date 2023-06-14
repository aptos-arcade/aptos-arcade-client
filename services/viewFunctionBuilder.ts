import {ViewRequest} from "aptos/src/generated";
import {canonicalAddress, moduleToString} from "@/services/aptosUtils";
import {aptosArenaModule, brawlerModule, meleeWeaponModule, rangedWeaponModule} from "@/data/modules";
import {AptosClient} from "aptos";
import {Module} from "@/types/Aptos";

export const viewFunction = (module: Module, functionName: string, args: string[], typeArgs: string[]): ViewRequest => ({
    function: `${moduleToString(module)}::${functionName}`,
    arguments: args,
    type_arguments: typeArgs
})

export const getPlayerTokenAddress = (client: AptosClient, playerAddress: string): Promise<string> =>
    client.view(viewFunction(
        brawlerModule,
        "get_player_token_address",
        [playerAddress],
        []
    ))
        .then((result) => result[0] as string)
        .catch(() => "")

export const getPlayerCharacterData = (client: AptosClient, playerAddress: string): Promise<string[]> =>
    client.view(viewFunction(
        brawlerModule,
        "get_player_character",
        [playerAddress],
        []
    ))
        .then((result) => result as string[])
        .catch(() => [])

export const getPlayerMeleeWeaponData = (client: AptosClient, playerAddress: string): Promise<number[]> =>
    client.view(viewFunction(
        brawlerModule,
        "get_player_melee_weapon",
        [playerAddress],
        []
    ))
        .then((result) => result.map((value) => parseInt(value as string)))
        .catch(() => [])

export const getMeleeWeaponCollectionAddress = (client: AptosClient): Promise<string> =>
    client.view(viewFunction(
        meleeWeaponModule,
        "get_collection_address",
        [],
        []
    ))
        .then((result) => canonicalAddress(result[0] as string))
        .catch(() => "")

export const getMeleeWeaponData = (client: AptosClient, address: string): Promise<number[]> =>
    client.view(viewFunction(
        meleeWeaponModule,
        "get_melee_weapon_data",
        [address],
        []
    ))
        .then((result) => result.map((value) => parseInt(value as string)))
        .catch(() => [])

export const getHasPlayerMintedMeleeWeapon = (client: AptosClient, playerAddress: string): Promise<boolean> =>
    client.view(viewFunction(
        meleeWeaponModule,
        "has_player_minted",
        [playerAddress],
        []
    ))
        .then((result) => result[0] as boolean)
        .catch(() => false)

export const getHasPlayerMintedRangedWeapon = (client: AptosClient, playerAddress: string): Promise<boolean> =>
    client.view(viewFunction(
        rangedWeaponModule,
        "has_player_minted",
        [playerAddress],
        []
    ))
        .then((result) => result[0] as boolean)
        .catch(() => false)

export const getRangedWeaponCollectionAddress = (client: AptosClient): Promise<string> =>
    client.view(viewFunction(
        rangedWeaponModule,
        "get_collection_address",
        [],
        []
    ))
        .then((result) => canonicalAddress(result[0] as string))
        .catch(() => "")

export const getRangedWeaponData = (client: AptosClient, address: string): Promise<number[]> =>
    client.view(viewFunction(
        rangedWeaponModule,
        "get_ranged_weapon_data",
        [address],
        []
    ))
        .then((result) => result.map((value) => parseInt(value as string)))
        .catch(() => [])

export const getPlayerRangedWeaponData = (client: AptosClient, playerAddress: string): Promise<number[]> =>
    client.view(viewFunction(
        brawlerModule,
        "get_player_ranged_weapon",
        [playerAddress],
        []
    ))
        .then((result) => result.map((value) => parseInt(value as string)))
        .catch(() => [])

export const getPlayerEloRatingData = (client: AptosClient, playerAddress: string): Promise<number[]> =>
    client.view(viewFunction(
        aptosArenaModule,
        "get_player_elo_rating",
        [playerAddress],
        []
    ))
        .then((result) => result.map((value) => parseInt(value as string)))
        .catch(() => [])