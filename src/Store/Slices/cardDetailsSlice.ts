import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardDetails, NFTTypes } from "../../types/types";
interface CardState {
    error: string;
    isLoading: boolean;
    cardDetails: CardDetails;
}
const initialState: CardState = {
    error: "",
    isLoading: false,
    cardDetails: {
        timeRemaining: "29d 23h 19m 31s",
        performer: "Run the Jewels 2",
        header: "Studio album by Run The Jewels",
        bidding: false,
        minBid: 0,
        buyNow: 9,
        pictures: [
            "/Images/test1.svg",
            "/Images/4.svg",
            "/Images/4.svg",
            "/Images/4.svg",
            "/Images/4.svg",
        ],
        id: "rtk_2125_1632",
        collectionId: "#0x2d0c8af807ef45ac17cafb2973d866ba8f38caa9",
        editionOf: 20000,
        description:
            "Run the Jewels 2 is the second studio album by American hip hop duo Run the Jewels, which consists of Killer Mike and El-P. The album was released early for free on October 24, 2014, and the following day on iTunes. It was made available on CD and LP by Mass Appeal Records and RBC Records on October 28, 2014.",
        type: NFTTypes.Audio,
        creator: "Best Music",
    },
};
export const cardDetailsSlice = createSlice({
    name: "cardDetails",
    initialState,
    reducers: {
        cardDetailsFetching(state) {
            state.isLoading = true;
            state.error = "";
        },
        cardDetailsFetchingSuccess(state, action: PayloadAction<CardDetails>) {
            state.isLoading = false;
            state.error = "";
            state.cardDetails = action.payload;
        },
        cardDetailsFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
