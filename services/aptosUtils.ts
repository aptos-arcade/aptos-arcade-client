import {Module} from "@/types/Aptos";

export const moduleToString = (module: Module) => {
    return `${module.module_address}::${module.module_name}`
}