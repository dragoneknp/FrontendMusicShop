import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SalesCardProps } from "../../types/types";

interface mySalesProps {
    isLoading: boolean;
    error: string;
    salesCards: SalesCardProps[];
}

const initialState: mySalesProps = {
    error: "",
    isLoading: false,
    salesCards: [],
};

export const mySalesSlice = createSlice({
    name: "mySales",
    initialState,
    reducers: {
        mySalesFetching(state) {
            state.isLoading = true;
            state.error = "";
            state.salesCards = [];
        },
        mySalesFetchingSuccess(state, action: PayloadAction<SalesCardProps[]>) {
            state.isLoading = false;
            state.error = "";
            state.salesCards = action.payload;
        },
        mySalesFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.salesCards = [];
        },
    },
});
