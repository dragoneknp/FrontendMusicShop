import { AppDispatch } from "../store";
import axios from "axios";
import { registerSlice } from "../Slices/registerSlice";
import { UserProps } from "../../types/types";
import { getCurrentDate } from "../../utils/getCurrentDate";
export const registerUser =
    ({
        firstName,
        lastName,
        emailAdress,
        phoneNumber,
        displayName,
        password,
    }: UserProps) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(registerSlice.actions.registerStart());
            const response = await axios.post(
                `https://nftshop-4237c-default-rtdb.firebaseio.com/accounts/${emailAdress};${password}.json`,
                {
                    firstName,
                    lastName,
                    emailAdress,
                    phoneNumber,
                    displayName,
                    joinedAt: getCurrentDate(),
                }
            );
            dispatch(registerSlice.actions.registerSuccess());
        } catch (e: any) {
            dispatch(registerSlice.actions.registerFailed(e));
            setTimeout(() => {
                dispatch(registerSlice.actions.changeErrorStatus(""));
            }, 2000);
        }
    };
