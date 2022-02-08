import { AppDispatch } from "../store";
import axios from "axios";
import { myBidsSlice } from "../Slices/myBidsSlice";
import { Card } from "../../types/types";

export const fetchMyBids = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(myBidsSlice.actions.myBidsFetching());

        const response: { data: Card[] } = await axios.get(
            `https://nftshop-4237c-default-rtdb.firebaseio.com/bids/${token}.json`
        );

        dispatch(myBidsSlice.actions.myBidsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(myBidsSlice.actions.myBidsFetchingFailed(e));
    }
};
