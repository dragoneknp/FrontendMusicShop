export interface SellingCard {
    edition: string;
    price: string;
    timeRemaining: string;
    token: string;
    seller: string;
    sellerAvatar?: string;
}

export interface MarketPlaceCard {
    performer: string;
    album: string;
    picture: string;
    id: string;
    description: string;
    sellingCards?: SellingCard[];
}

export interface Card {
    performer: string;
    bidding?: boolean;
    minBid?: number;
    buyNow?: number;
    picture: string;
    id: string;
    album?: boolean;
    availableListenings?: number;
    to?: string;
}

export enum NFTTypes {
    Audio,
    Video,
}
export interface CardDetails extends Omit<Card, "picture"> {
    pictures: string[];
    timeRemaining: string;
    header: string;
    collectionId: string;
    editionOf: number;
    description: string;
    type: NFTTypes;
    creator: string;
}

export interface RegistrationProps {
    firstName: string;
    lastName: string;
    emailAdress: string;
    phoneNumber: string;
    displayName: string;
    password: string;
}
