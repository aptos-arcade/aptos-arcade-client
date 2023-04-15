export interface Controls {
    keys: Key[]
}

export interface Key {
    name: string
    key: string
}

export const controls: Controls[] = [
    {
        keys: [
            {
                name: 'Move',
                key: 'WASD'
            },
            {
                name: 'Sprint',
                key: 'L. Shift'
            }
        ]
    },
    {
        keys: [
            {
                name: 'Jump',
                key: 'Space'
            },
            {
                name: 'Shoot',
                key: 'Click'
            }
        ]
    },
]