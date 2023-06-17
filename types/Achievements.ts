export interface Achievement {
    name: string;
    tiers: AchievementTier[];
}

export interface AchievementTier {
    name: string;
    image: string;
    threshold: number;
    reward: string;
}