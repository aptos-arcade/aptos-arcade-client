import {Game} from "@/types/Game";

import {GiBattleGear, GiBolterGun} from "react-icons/gi";

export const APTOS_ARENA: Game = {
    title: "Aptos Arena",
    description: "Fight as your Aptos NFTs in a 2D Platform Brawler!",
    href: "/arena",
    icon: GiBattleGear
}

export const APTOS_SHOWDOWN = {
    title: "Aptos Showdown",
    description: "Test your Aim in the Ultimate 3D Free-for-All First-Person Shooter Where Only the Best Survive!",
    href: "/showdown",
    icon: GiBolterGun
}

const games: Game[] = [
    APTOS_ARENA,
    APTOS_SHOWDOWN
]

export default games;