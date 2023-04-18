import {Game} from "@/types/Game";

import {GiBattleGear, GiBolterGun} from "react-icons/gi";

const games: Game[] = [
    {
        title: "Aptos Arena",
        description: "2D platform fighter game",
        href: "/arena",
        icon: GiBattleGear
    },
    {
        title: "Aptos Showdown",
        description: "3D first person shooter game",
        href: "/showdown",
        icon: GiBolterGun
    }
]

export default games;