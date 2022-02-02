import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalletCardProps } from "../../types/types";
interface myNFTsProps {
    isLoading: boolean;
    error: string;
    walletCards: WalletCardProps[];
}

const initialState : myNFTsProps = {
    error: "",
    isLoading: false,
    walletCards: [],
};

export const myNFTsSlice = createSlice({
    name: "myNFTs",
    initialState,
    reducers: {
      myNFTsFetching(state) {
        state.isLoading = true;
        state.error = "";
        state.walletCards = []
      },
      myNFTsFetchingSuccess(state, action: PayloadAction<WalletCardProps[]>){
        state.isLoading = false;
        state.error = "";
        state.walletCards = action.payload;
      },
      myNFTsFetchingFailed(state, action: PayloadAction<string>){
        state.isLoading = false;
        state.error = action.payload
        state.walletCards = [];
      }

    },
});
