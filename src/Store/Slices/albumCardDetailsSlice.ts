import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketPlaceCard } from "../../types/types";
interface CardState {
    card: MarketPlaceCard;
    error: string;
    isLoading: boolean;
}
const initialState: CardState = {
    card: {
        performer: "Come down official music",
        picture: "/Images/1big.svg",
        id: "rtk_query_1228",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        album: "open edition",
        sellingCards: [
            {
                edition: "#3",
                price: "9",
                timeRemaining: "0d left Thu 03:11 PM",
                seller: "@curios",
                sellerAvatar: "/Images/3.svg",
                token: "0x2d0c8af807ef45ac17cafb2973d866ba8f38caa9",
            },
        ],
    },
    error: "",
    isLoading: false,
};
export const albumCardDetailsSlice = createSlice({
    name: "albumCardDetails",
    reducers: {
        albumCardDetailsFetching(state) {
            state.isLoading = true;
            state.error = "";
        },
        albumCardDetailsFetchingSuccess(
            state,
            action: PayloadAction<MarketPlaceCard>
        ) {
            state.isLoading = false;
            state.error = "";
            state.card = action.payload;
        },
        albumCardDetailsFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    initialState,
});
