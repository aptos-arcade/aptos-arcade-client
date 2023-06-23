export interface PlayerData {
    character: CharacterData,
    meleeWeapon: MeleeWeaponData,
    rangedWeapon: RangedWeaponData
}

export interface CharacterData {
    creator: string,
    collection: string,
    name: string,
}

export interface MeleeWeaponData {
    power: number,
    type: number
}

export interface RangedWeaponData {
    power: number,
    type: number
}