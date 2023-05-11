import {NavLink} from "@/types/NavLink";

import {FaGamepad} from "react-icons/fa";
import {MdLeaderboard} from "react-icons/md";


const navLinks: NavLink[] = [
    {
        name: "Games",
        path: "/",
        icon: FaGamepad
    },
    {
        name: "Leaderboard",
        path: "/leaderboard",
        icon: MdLeaderboard
    }
]

export default navLinks;