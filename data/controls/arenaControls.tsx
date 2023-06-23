import { ArrowForwardIcon, ArrowDownIcon, ArrowBackIcon, ArrowUpIcon, SmallAddIcon } from '@chakra-ui/icons'

import {Controls} from "@/types/Controls";
import {HStack, Text} from "@chakra-ui/react";

const arenaControls: Controls[] = [
    {
        title: 'Defense',
        keys: [
            [
                {
                    name: 'Shield',
                    key: 'L. Shift'
                }
            ],
            [
                {
                    name: 'Dodge',
                    key: <HStack>
                        <Text>
                            L. Shift
                        </Text>
                        <SmallAddIcon />
                        <ArrowBackIcon />
                        <Text>
                            or
                        </Text>
                        <ArrowForwardIcon />
                    </HStack>
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
                    key: <ArrowUpIcon />
                }
            ],
            [
                {
                    name: 'Left',
                    key: <ArrowBackIcon />
                },
                {
                    name: 'Drop',
                    key: <ArrowDownIcon />
                },
                {
                    name: 'Right',
                    key: <ArrowForwardIcon />
                }
            ]
        ]
    }
]

export default arenaControls