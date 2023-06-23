import {Controls} from "@/types/Controls";

const arenaControls: Controls[] = [
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
    }
]

export default arenaControls