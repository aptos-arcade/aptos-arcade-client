export interface RangedWeaponData {
    weaponType: number;
    power: number;
    name: string;
}

export interface RangedWeapon extends RangedWeaponData {
    address: string;
}