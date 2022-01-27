import { AppDispatch } from "../store";
import axios from "axios";
import { albumCardSlice } from "../Slices/albumCardSlice";
import { useNavigate } from "react-router-dom";

export const fetchAlbumCards = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(albumCardSlice.actions.cardsFetching());
        const response = await axios.get(
            "https://nftshop-4237c-default-rtdb.firebaseio.com/albumCards.json"
        );
        dispatch(albumCardSlice.actions.cardsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(albumCardSlice.actions.cardsFetchingFailed(e.message));
    }
};