import { AppDispatch } from "../store";
import axios from "axios";
import { cardSlice } from "../Slices/cardSlice";
import { Filters } from "../../types/types";

export const fetchCards =
    (filter: Filters = "all") =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(cardSlice.actions.cardsFetching());

            const response = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/cards/${filter}.json`
            );

            dispatch(cardSlice.actions.cardsFetchingSuccess(response.data));
        } catch (e: any) {
            dispatch(cardSlice.actions.cardsFetchingFailed(e.message));

            setTimeout(() => {
                dispatch(cardSlice.actions.changeErrorStatus(""));
            }, 2000);
        }
    };
