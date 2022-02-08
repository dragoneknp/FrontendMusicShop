import axios from "axios";
import { SalesCardProps } from "../../types/types";
import { mySalesSlice } from "../Slices/mySalesSlice";
import { AppDispatch } from "../store";

export const fetchMySales = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(mySalesSlice.actions.mySalesFetching());

        const response: { data: SalesCardProps[] } = await axios.get(
            `https://nftshop-4237c-default-rtdb.firebaseio.com/sales/${id}.json`
        );

        if (response.data === null) {
            throw new Error("Item not found");
        }

        dispatch(mySalesSlice.actions.mySalesFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(mySalesSlice.actions.mySalesFetchingFailed(e));
    }
};
