import {Module} from "@/types/Aptos";
import {aptosArenaModuleAddress} from "@/data/moduleAddresses";

export const playerModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "player"
}

export const meleeWeaponModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "melee_weapon"
}

export const scriptsModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "scripts"
}