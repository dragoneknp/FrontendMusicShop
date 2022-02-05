import axios from "axios";
import { albumCardDetailsSlice } from "../Slices/albumCardDetailsSlice";
import { AppDispatch } from "../store";

export const fetchAlbumCardDetails =
    (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(albumCardDetailsSlice.actions.albumCardDetailsFetching());
            const response = await axios.get(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/marketplaceCards/${id}.json`
            );
            if (response.data === null) {
                throw "Item not found";
            }
            dispatch(
                albumCardDetailsSlice.actions.albumCardDetailsFetchingSuccess(
                    response.data
                )
            );
        } catch (e: any) {
            dispatch(
                albumCardDetailsSlice.actions.albumCardDetailsFetchingFailed(e)
            );
            setTimeout(() => {
                dispatch(albumCardDetailsSlice.actions.changeErrorStatus(""));
            }, 2000);
        }
    };
