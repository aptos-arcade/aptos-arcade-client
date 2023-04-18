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
                name: 'ADS',
                key: 'R. Shift'
            }
        ]
    },
]

export default showdownControls;