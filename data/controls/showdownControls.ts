import {Controls} from "@/types/Controls";

const showdownControls: Controls[] = [
    {
        keys: [
            {
                name: 'Move',
                key: 'WASD'
            },
            {
                name: 'Sprint',
                key: 'L. Shift'
            },
            {
                name: 'Jump',
                key: 'Space'
            },
        ]
    },
    {
        keys: [
            {
                name: 'Shoot',
                key: 'Click'
            },
            {
                name: 'Zoom',
                key: 'R. Shift'
            }
        ]
    },
    {
        keys: [
            {
                name: "Pistol",
                key: "1"
            },
            {
                name: "Automatic",
                key: "2"
            },
            {
                name: "Sniper",
                key: "3"
            }
        ]
    },
    {
        keys: [
            {
                name: "Menu",
                key: "Esc"
            },
            {
                name: "Leaderboard",
                key: "Tab"
            }
        ]
    }
]

export default showdownControls;