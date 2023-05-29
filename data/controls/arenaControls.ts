import {Controls} from "@/types/Controls";

const arenaControls: Controls[] = [
    {
        keys: [
            {
                name: 'Jump',
                key: 'W'
            }
        ]
    },
    {
        keys: [
            {
                name: 'Left',
                key: 'A'
            },
            {
                name: 'Drop',
                key: 'S'
            },
            {
                name: 'Right',
                key: 'D'
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
                key: 'Click'
            },
        ]
    }
]

export default arenaControls