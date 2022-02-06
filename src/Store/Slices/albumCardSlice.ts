import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../types/types";

interface CardState {
    cards: Card[];
    error: string;
    isLoading: boolean;
}

const initialState: CardState = {
    error: "",
    isLoading: false,
    cards: [],
};

export const albumCardSlice = createSlice({
    name: "albumCard",
    initialState,
    reducers: {
        cardsFetching(state) {
            state.isLoading = true;
            state.error = "";
        },
        cardsFetchingSuccess(state, action: PayloadAction<Card[]>) {
            state.isLoading = false;
            state.error = "";
            state.cards = action.payload;
        },
        cardsFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        changeErrorStatus(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});
