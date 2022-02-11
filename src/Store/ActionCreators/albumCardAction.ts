import { AppDispatch } from "../store";
import axios from "axios";
import { albumCardSlice } from "../Slices/albumCardSlice";
import { Filters } from "../../types/types";

export const fetchAlbumCards =
    (filter: Filters = "all") =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(albumCardSlice.actions.cardsFetching());

            const response = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/albumCards/${filter}.json`
            );

            dispatch(
                albumCardSlice.actions.cardsFetchingSuccess(response.data)
            );
        } catch (e: any) {
            dispatch(albumCardSlice.actions.cardsFetchingFailed(e.message));

            setTimeout(() => {
                dispatch(albumCardSlice.actions.changeErrorStatus(""));
            }, 2000);
        }
    };
