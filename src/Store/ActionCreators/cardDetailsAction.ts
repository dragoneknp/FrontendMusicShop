import { AppDispatch } from "../store";
import axios from "axios";
import { cardDetailsSlice } from "../Slices/cardDetailsSlice";
import { CardDetails } from "../../types/types";
import { Exception } from "sass";
export const fetchCardDetails =
    (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(cardDetailsSlice.actions.cardDetailsFetching());
            const response: { data: CardDetails } = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/cardDetails/${id}.json`
            );
            if (response.data === null) {
                throw "Item not found";
            }

            dispatch(
                cardDetailsSlice.actions.cardDetailsFetchingSuccess(
                    response.data
                )
            );
        } catch (e: any) {
            dispatch(cardDetailsSlice.actions.cardDetailsFetchingFailed(e));
        }
    };
