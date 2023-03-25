import { Fighter } from '@/types/Fighter'

const fighters: Fighter[] = [
    {
        collectionName: 'Pontem Pirates',
        collectionImage: '/PontemPirate.png',
        collectionBackgroundImage: '/PontemPirateBackdrop.jpg',
        stats: {
            speed: 3,
            strength: 7,
            defense: 5,
        },
        marketplaceURL: "https://www.topaz.so/collection/Pontem-Space-Pirates-c46dd298b8",
        collectionIdHash: "aece05d29c0b543be608d73c44d8bb46a09e18e06097f7fdec078689e52ed118"
    },
    {
        collectionName: "Aptos Monkeys",
        collectionImage: "/AptosMonkey.png",
        collectionBackgroundImage: "/AptosMonkeyBackdrop.jpg",
        stats: {
            speed: 8,
            strength: 4,
            defense: 3,
        },
        marketplaceURL: "https://www.topaz.so/collection/Aptos-Monkeys-f932dcb983",
        collectionIdHash: "7ac8cecb76edbbd5da40d719bbb9795fc5744e4098ee0ce1be4bb86c90f42301"
    }
]

export default fighters