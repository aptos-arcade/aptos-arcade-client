export interface TokenData {
    creator_address: string;
    collection_name: string;
    name: string;
    property_version: number;
}

export interface TokenDataQuery {
    current_token_ownerships: TokenData[];
}