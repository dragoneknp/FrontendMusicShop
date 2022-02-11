import axios from "axios";
import { UserProps } from "../../types/types";
import { updateProfileSlice } from "../Slices/updateProfileSlice";
import { AppDispatch } from "../store";

export const updateProfile =
    (fieldsToUpdate: Partial<UserProps>, token: string, displayName: string, password: string) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(updateProfileSlice.actions.updateStart());
            await axios.patch(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/accounts/${displayName};${password}/${token}.json`,
                fieldsToUpdate
            );
            dispatch(updateProfileSlice.actions.updateSuccess());
        } catch (e: any) {
            dispatch(updateProfileSlice.actions.updateFailed(e.message));
        }
    };
