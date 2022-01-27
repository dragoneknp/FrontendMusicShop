import { AppDispatch } from "../store";
import axios from "axios";
import { registerSlice } from "../Slices/registerSlice";
import { RegistrationProps } from "../../types/types";
export const registerUser =
    ({
        firstName,
        lastName,
        emailAdress,
        phoneNumber,
        displayName,
        password,
    }: RegistrationProps) =>
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
                }
            );
            console.log(response);
            dispatch(registerSlice.actions.registerSuccess());
        } catch (e: any) {
            dispatch(registerSlice.actions.registerFailed(e));
        }
    };
