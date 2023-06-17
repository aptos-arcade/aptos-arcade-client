import {Achievement} from "@/types/Achievements";

export const killsAchievement: Achievement = {
    name: "Kills",
    tiers: [
        {
            name: "Bronze",
            image: "/achievements/kills/bronze.png",
            threshold: 10,
        },
        {
            name: "Silver",
            image: "/achievements/kills/silver.png",
            threshold: 15,
        },
        {
            name: "Gold",
            image: "/achievements/kills/gold.png",
            threshold: 30,
        }
    ]
}

export const winsAchievement: Achievement = {
    name: "Wins",
    tiers: [
        {
            name: "Bronze",
            image: "/achievements/wins/bronze.png",
            threshold: 3,
        },
        {
            name: "Silver",
            image: "/achievements/wins/silver.png",
            threshold: 5,
        },
        {
            name: "Gold",
            image: "/achievements/wins/gold.png",
            threshold: 10,
        }
    ]
}

export const eloAchievement: Achievement = {
    name: "ELO",
    tiers: [
        {
            name: "Bronze",
            image: "/achievements/elo/bronze.png",
            threshold: 125,
        },
        {
            name: "Silver",
            image: "/achievements/elo/silver.png",
            threshold: 150,
        },
        {
            name: "Gold",
            image: "/achievements/elo/gold.png",
            threshold: 200,
        }
    ]
}

export const gamesAchievement: Achievement = {
    name: "Games",
    tiers: [
        {
            name: "Bronze",
            image: "/achievements/games/bronze.png",
            threshold: 5,
        },
        {
            name: "Silver",
            image: "/achievements/games/silver.png",
            threshold: 10,
        },
        {
            name: "Gold",
            image: "/achievements/games/gold.png",
            threshold: 20,
        }
    ]
}