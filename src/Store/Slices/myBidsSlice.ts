import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../types/types";
interface MyBidsProps {
    isLoading: boolean;
    error: string;
    cards: Card[];
}

const initialState: MyBidsProps = {
    isLoading: false,
    error: "",
    cards: [],
};
export const myBidsSlice = createSlice({
    name: "myBids",
    initialState,
    reducers: {
        myBidsFetching(state) {
          state.isLoading = true;
          state.error = "";
          state.cards = [];
        },
        myBidsFetchingSuccess(state, action : PayloadAction<Card[]>){
          state.isLoading = false;
          state.error = "";
          state.cards = action.payload;
        },
        myBidsFetchingFailed(state, action : PayloadAction<string>){
          state.isLoading = false;
          state.error = action.payload;
          state.cards = [];
        }
    },
});
