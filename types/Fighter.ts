export interface Fighter {
    collectionName: string;
    collectionImage: string;
    collectionBackgroundImage: string;
    stats: Stats;
    marketplaceURL: string,
    collectionIdHash: string,
}

export const statMetrics = ['speed', 'strength', 'defense'] as const;

export type Stats = {
    [key in typeof statMetrics[number]]: number;
}