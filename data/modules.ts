import {Module} from "@/types/Aptos";
import {aptosArenaModuleAddress} from "@/data/moduleAddresses";

export const brawlerModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "brawler"
}

export const meleeWeaponModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "melee_weapon"
}

export const rangedWeaponModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "ranged_weapon"
}

export const scriptsModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "scripts"
}

export const aptosArenaModule: Module = {
    module_address: aptosArenaModuleAddress,
    module_name: "aptos_arena"
}