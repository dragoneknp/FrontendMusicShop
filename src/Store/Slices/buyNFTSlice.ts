import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuyNFTProps {
    isLoading: boolean;
    error: string;
    isSuccess: boolean;
}
const initialState: BuyNFTProps = {
    isLoading: false,
    error: "",
    isSuccess: false,
};
export const buyNFTSlice = createSlice({
  name: "buyNFT",
  initialState,
  reducers: {
    buyNFTstart(state){
      state.error = "";
      state.isLoading = true;
      state.isSuccess = false;
    },
    buyNFTsSuccess(state){
      state.error = "";
      state.isLoading = false;
      state.isSuccess = true;
    },
    buyNFTsFailed(state, action: PayloadAction<string>){
      state.error = action.payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
    changeSuccessStatus(state){
      state.isSuccess = false;
    }
  }
})
