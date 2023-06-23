import {Controls} from "@/types/Controls";

const arenaControls: Controls[] = [
    {
        title: 'Movement',
        keys: [
            [
                {
                    name: 'Jump',
                    key: '↑'
                }
            ],
            [
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
        ]
    },
    {
        title: 'Melee',
        keys: [
            [
                {
                    name: 'Up',
                    key: 'W'
                }
            ],
            [
                {
                    name: 'Left',
                    key: 'A'
                },
                {
                    name: 'Down',
                    key: 'S'
                },
                {
                    name: 'Right',
                    key: 'D'
                }
            ]
        ],
    },
    {
        title: 'Ranged',
        keys: [
            [
                {
                    name: 'Shoot',
                    key: 'Space'
                }
            ]
        ]
    },
    {
        title: 'Shield',
        keys: [
            [
                {
                    name: 'Shield',
                    key: 'L. Shift'
                }
            ]
        ]
    }
]

export default arenaControls