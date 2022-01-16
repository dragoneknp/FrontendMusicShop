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
