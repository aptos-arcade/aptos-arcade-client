import {Controls} from "@/types/Controls";

const arenaControls: Controls[] = [
    {
        title: 'Movement',
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
        title: 'Melee',
        keys: [
            {
                name: 'Up Attack',
                key: 'W'
            },
        ],
    },
    {
        keys: [
            {
                name: 'Left Attack',
                key: 'A'
            },
            {
                name: 'Down Attack',
                key: 'S'
            },
            {
                name: 'Right Attack',
                key: 'D'
            }
        ]
    },
    {
        title: 'Ranged',
        keys: [
            {
                name: 'Shoot',
                key: 'Space'
            }
        ]
    }
]

export default arenaControls