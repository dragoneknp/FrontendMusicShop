interface Card {
    performer: string;
    bidding: boolean;
    minBid: number;
    buyNow: number;
    picture: string;
    id: string;
}
// /Users/dragonek/Desktop/music shop/music-shop-app/src/mock/img/1.svg
const cards: Card[] = [
    {
        performer: "Run the Jewels 2",
        bidding: false,
        minBid: 0,
        buyNow: 9,
        picture: "/Images/1.svg",
        id: "rtk_2125_1632",
    },
    {
        performer: "Come Down official Music Video",
        bidding: true,
        minBid: 1000,
        buyNow: 25000,
        picture: "/Images/2.svg",
        id: "rtk_2125_1633",
    },
    {
        performer: "Smiley",
        bidding: false,
        minBid: 0,
        buyNow: 5,
        picture: "/Images/3.svg",
        id: "rtk_2125_1634",
    },
    {
        performer: "Pressa",
        bidding: false,
        minBid: 0,
        buyNow: 2,
        picture: "/Images/4.svg",
        id: "rtk_2125_1635",
    },
];
export { cards };
