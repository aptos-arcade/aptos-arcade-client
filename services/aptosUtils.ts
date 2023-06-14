import {Module} from "@/types/Aptos";

export const moduleToString = (module: Module) => {
    return `${module.module_address}::${module.module_name}`
}

// makes an address 66 characters by adding trailing zeros if it is less than 66 characters
export const canonicalAddress = (address: string) => address.padEnd(66, "0")