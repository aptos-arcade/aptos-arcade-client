import {Controls} from "@/types/Controls";

const arenaControls: Controls[] = [
    {
        keys: [
            {
                name: 'Jump',
                key: '↑'
            }
        ]
    },
    {
        keys: [
            {
                name: 'Left',
                key: '←'
            },
            {
                name: 'Drop',
                key: '↓'
            },
            {
                name: 'Right',
                key: '→'
            }
        ]
    },
    {
        keys: [
            {
                name: 'Shoot',
                key: 'Space'
            },
            {
                name: 'Melee',
                key: 'L. Shift'
            },
        ]
    }
]

export default arenaControls