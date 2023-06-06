export interface MeleeWeaponData {
    weaponType: number;
    power: number;
    name: string;
}

export interface MeleeWeapon extends MeleeWeaponData {
    address: string;
}