import { AppDispatch } from "../store";
import axios from "axios";
import { cardSlice } from "../Slices/cardSlice";
export const fetchCards = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cardSlice.actions.cardsFetching());
        const response = await axios.get(
            "https://nftshop-4237c-default-rtdb.firebaseio.com/cards.json"
        );
        dispatch(cardSlice.actions.cardsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(cardSlice.actions.cardsFetchingFailed(e.message));
    }
};
