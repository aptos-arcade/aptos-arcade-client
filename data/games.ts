import {Game} from "@/types/Game";

import {GiBattleGear, GiBolterGun} from "react-icons/gi";

export const APTOS_ARENA: Game = {
    title: "BRAWL3R",
    description: "Bring your Aptos NFTs to life an action-packed 2D Platform brawler!",
    href: "/arena",
    icon: GiBattleGear
}

export const APTOS_SHOWDOWN = {
    title: "SHOOT3R",
    description: "Test your aim in a high-octane 3D free-for-all first-person-shooter!",
    href: "/showdown",
    icon: GiBolterGun
}

const games: Game[] = [
    APTOS_ARENA,
    APTOS_SHOWDOWN
]

export default games;