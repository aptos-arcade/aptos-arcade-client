import { TransactionPayload } from "aptos/src/generated";
import {moduleToString} from "@/services/aptosUtils";
import {scriptsModule} from "@/data/modules";

export const scriptTransactionPayload = (functionName: string, args: any[], typeArgs: string[]): TransactionPayload => ({
    type: "entry_function_payload",
    function: `${moduleToString(scriptsModule)}::${functionName}`,
    arguments: args,
    type_arguments: typeArgs
})

export const mintPlayerPayload = scriptTransactionPayload("mint_player", [], []);

export const mintMeleeWeaponPayload = scriptTransactionPayload("mint_melee_weapon", [], []);

export const equipMeleeWeaponPayload = (meleeWeaponAddress: string): TransactionPayload => scriptTransactionPayload(
    "equip_melee_weapon",
    [meleeWeaponAddress],
    []
);

export const mintAndEquipMeleeWeapon = scriptTransactionPayload(
    "mint_and_equip_melee_weapon",
    [],
    []
);

export const equipCharacterPayload = (creatorAddress: string, collectionName: string, tokenName: string, propertyVersion: number) => scriptTransactionPayload(
    "equip_character",
    [creatorAddress, collectionName, tokenName, propertyVersion],
    []
);

