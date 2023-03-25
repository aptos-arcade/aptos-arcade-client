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