import axios from "axios";
import { WalletCardProps } from "../../types/types";
import { myNFTsSlice } from "../Slices/myNFTsSlice";
import { AppDispatch } from "../store";

export const fetchMyNFTs = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(myNFTsSlice.actions.myNFTsFetching());
        const response: { data: WalletCardProps[] } = await axios.get(
            `https://nftshop-4237c-default-rtdb.firebaseio.com/wallet/${token}.json`
        );
        if (response.data === null) {
            throw "Item not found";
        }
        dispatch(myNFTsSlice.actions.myNFTsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(myNFTsSlice.actions.myNFTsFetchingFailed(e));
        setTimeout(() => {
            dispatch(myNFTsSlice.actions.changeErrorStatus(""));
        }, 2000);
    }
};
